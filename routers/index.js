const router  = require("express").Router()
const placeRouter = require('./place')
const attendanceRouter = require('./attendences')
router.get('/', (req,res) => {
    res.status(200).json({
        microservice : "gymonitor",
        status : 'Ready',
        version: '1.0.0'
    })
})

router.use('/place', placeRouter)
router.use('/attendance', attendanceRouter)



module.exports = router