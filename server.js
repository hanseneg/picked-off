const express = require('express')
const app = express()
const middleware = require('./routes/middleware')

app.use(middleware.addProp)

app.get('/', (req, res) => {
    res.send({firstName: 'sam', lastName: 'mii'})
})

app.listen(9000, () => {
    console.log('The server is running on Port 9000!')
})