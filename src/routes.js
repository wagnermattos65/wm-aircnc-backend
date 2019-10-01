const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/uploads')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig)

routes.get('/status',(req, res) => {
  res.json({ status: "Server is running", port: `${process.env.PORT}`, time:`${Date()}` })
})

routes.post('/sessions',SessionController.store)


routes.get('/spots',SpotController.index)
routes.post('/spots',upload.single('thumbnail'),SpotController.store)
routes.post('/spots/:spot_id/bookings',BookingController.store)

routes.get('/dashboard',DashboardController.show)



module.exports = routes