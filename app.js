const express = require('express')
require('dotenv').config()

const config = require('config')

const app = express()

require('./startup/config')()

require('./startup/db')()
require('./startup/router')(app)

const PORT = process.env.PORT || config.get('port')

app.listen(PORT, () => console.log('Server on...'))
