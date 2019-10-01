const express = require('express')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/status',(req, res) => {
  res.json({ status: "Server is running", port: `${process.env.PORT}`, time:`${Date()}` })
})

routes.post('/sessions',SessionController.store)

module.exports = routes