const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => console.log('Connected to db!'))
.catch((err) => console.log(err))