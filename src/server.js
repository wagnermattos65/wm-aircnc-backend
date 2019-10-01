require('dotenv').config();

const express = require('express')

const app = express();

app.get('/status',(req, res) => {
  res.json({ status: "Server is running", port: `${process.env.PORT}`, time:`${Date()}` })
})

app.listen(process.env.PORT)


