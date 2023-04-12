const router  = require("express").Router()
const placeRouter = require('./place')

router.get('/', (req,res) => {
    res.status(200).json({
        microservice : "gymonitor",
        status : 'Ready',
        version: '1.0.0'
    })
})

router.use('/place', placeRouter)




module.exports = router