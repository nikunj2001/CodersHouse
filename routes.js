const router = require('express').Router();
const authMiddleware = require("./middlewares/auth-middleware");
const authcontroller = require('./controllers/auth-controller')
const activatecontroller = require('./controllers/activate-controller')
const roomscontroller = require('./controllers/roomscontroller')
router.post('/api/send-otp',authcontroller.sendOtp)
router.post('/api/verify-otp',authcontroller.verifyOtp)
router.post('/api/activate',authMiddleware,activatecontroller.activate)
router.post('/api/refresh',authcontroller.refresh)
router.post('/api/logout',authMiddleware,authcontroller.logout)
router.post('/api/rooms',authMiddleware,roomscontroller.create)

module.exports = router;
