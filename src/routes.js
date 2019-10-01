const express = require('express')

const routes = express.Router();

routes.get('/status',(req, res) => {
  res.json({ status: "Server is running", port: `${process.env.PORT}`, time:`${Date()}` })
})

module.exports = routes