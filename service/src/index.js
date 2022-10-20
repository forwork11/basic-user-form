require('dotenv').config()
require('./utils/db')
const express = require('express')
const cors = require('cors')
const fileupload = require("express-fileupload")
const API = require('./constants/API')
const usersRoute = require('./routes/Users')
const app = express()

const corsOpts = {
  origin: process.env.CORS_ORIGIN,
  methods: process.env.CORS_METHOD,
}
app.use(cors(corsOpts))
app.use(express.json())
app.use(fileupload())
app.use(API.USER, usersRoute)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})