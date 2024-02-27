'use strict';
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

const apiRouter = require('./routes/api')

app.use('/amirullazmi/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port || 3000, () => {
    console.log(`Running in port ${port}`)
})