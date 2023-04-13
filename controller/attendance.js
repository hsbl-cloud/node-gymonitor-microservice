const { attendanceService } = require('../service')
const { sequelize } = require('../models')
const { validator } = require("../helpers")


async function createAttendance(req,res,next) {
    const transaction = await sequelize.transaction()
    try {
        const rules = {
            placeId : 'required|string',
            name : 'required|string',            
        }

        const validate = await validator(req.body, rules)   
        if( validate.fails()) throw { status : 412, msg : validate.errors.errors}

        let { detail, name , placeId , checkIn, checkOut } = req.body
        let payload = {
            detail, name, placeId, checkIn, checkOut
        }

        let data = await attendanceService.createAttendance(payload, transaction)
        transaction.commit()
        return res.status(200).json({
            status : 200,
            msg : 'Success Create Attendance',
            data
        })
    } catch (error) {
        transaction.rollback()
        next(error)
    }
}

async function getAttendance(req,res,next) {
    try {
        let id = req.params.id
        let data = await attendanceService.getAttendanceById(id)
        
        return res.status(200).json({
            status : 200, 
            msg : 'Success get attendance data',
            data
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getAttendaces(req,res,next) {
    try {
        let data = await attendanceService.getAttendances()
        return res.status(200).json({
            status : 200, 
            msg : 'Success get attendance data',
            data
        })
    } catch (error) {
        next(error)
    }
}

async function updateAttendance(req,res,next) {
    const transaction = await sequelize.transaction()
    try {
        const id = req.params.id
        let { detail, name , placeId , checkIn, checkOut } = req.body
        let payload = {
            detail, name, placeId, checkIn, checkOut
        }

        let data = await attendanceService.updateAttendance(id, payload,transaction)

        transaction.commit()
        return res.status(200).json({
            status : 200, 
            msg : 'Success update data with id ' + id,
            data
        })
    } catch (error) {
        console.log(error)
        transaction.rollback()
        next(error)
    }
}

async function deleteAttendance(req,res,next) {
    const transaction = await sequelize.transaction()
    try {
        const id = req.params.id
        const data = await attendanceService.deleteAttendance(id)

        transaction.commit()
        return res.status(200).json({
            status : 200, 
            message : 'Success Delete Attendence'
        })
    } catch (error) {
        transaction.rollback()

        next(error)
    }
}

module.exports = {
    createAttendance, 
    getAttendaces,
    getAttendance,
    updateAttendance,
    deleteAttendance
}