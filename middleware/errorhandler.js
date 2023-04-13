function errorHandler(err,req,res,next) {

    if(err.status){
        res.status(err.status).json({
            message : err.msg
        })
    }
    else if(err.name == 'SequelizeValidationError' || err.name == 'SequelizeUniqueConstraintError'){

        if(err.errors.length == 1){
            res.status(400).json({
                message : err.errors[0].message
            })
        }else {
            let message = err.errors.map(element =>{
                return element.message
            })
            res.status(400).json({
                message : message
            })
        }
    }else {
        res.status(500).json({
            message : 'internal server eror'
        })
    }
}


module.exports = errorHandler