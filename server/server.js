const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./app/models')

// define express
const app = express()

// generate table in db
db.sequelize.sync()

// define list url parmission cors
const whiteList = [
  'http://localhost:8081'
]

// difine validate CORS Url
const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not Allowed CORS'))
    }
  }
}

// use CORS in App
app.use(cors(corsOption))

// use body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// define try route in server
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome To MEVN'
  })
})

// define port url
const PORT = process.env.PORT || 8080

// listen server ini post url
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
