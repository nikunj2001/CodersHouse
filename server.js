require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require("./database")
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use('/storage',express.static('storage'))
const corsOption = {
    credentials: true,
    origin:['http://localhost:3000']
}
app.use(cors(corsOption))

const PORT=process.env.PORT;
const router = require("./routes");
dbConnect()
app.use(express.json({limit:'8mb'}))
app.use(router);
app.listen(PORT,()=>{
    console.log("Listening on port 5500");
})