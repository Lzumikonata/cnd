const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
console.log(path.join(__dirname, 'dist'))
app.listen('1222', () => {
    console.log('success')
})
