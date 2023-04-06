const router  = require("express").Router()

router.get('/', (req,res) => {
    res.status(200).json({
        microservice : "gymonitor",
        status : 'Ready',
        version: '1.0.0'
    })
})




module.exports = router