require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 3000
const cors = require('cors')
const app = express()
const routers = require('./routers')
const errorHandler = require('./middleware/errorhandler')


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routers)

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server run smoothly on port ${port}`)
})


