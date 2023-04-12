const { placeService } = require('../service')
const { sequelize } = require('../models')
const { validator } = require("../helpers")


async function createPlace(req,res,next) {
    const transaction = await sequelize.transaction()
    try {
        const rules = {
            name : 'required|string'
        }

        const validate = await validator(req.body, rules) 
        if( validate.fails()) throw { status : 412, msg : validate.errors.errors}

        let { name,detail } = req.body

        let payload = {
            name, detail
        }
        const data = await placeService.createPlace(payload,transaction)
        transaction.commit()
        res.status(200).json({
            status : 200, 
            msg : 'Success Create Place',
            data
        })
    } catch (error) {
        transaction.rollback()
        next(error)
    }
}

async function getAllPlace(req,res,next) {
    try {
        let data = await placeService.getPlaces()
        res.status(200).json({
            status : 200,
            msg : "Success get all places",
            data
        })
    } catch (error) {
        next(error)
    }
}

async function getPlace(req,res,next) {
    try {
        let id = req.params.id
        let data = await placeService.getPlace(id)
        return res.status(200).json({
            status : 200,
            msg : 'Success Get Place with id' + ' ' + id,
            data
        })
    } catch (error) {
        next(error)
    }
}

async function updatePlace(req,res,next) {
    const transaction = await sequelize.transaction()
    try {
        let id = req.params.id
        let { name, detail } = req.body

        let payload = { name, detail }
        let data = await placeService.updatePlace(payload, id , transaction)

        return res.status(200).json({
            status : 200, 
            msg : 'Success update data with id ' + id,
            data
        })
    } catch (error) {
        transaction.rollback()
        next(error)
    }
}

async function deletePlace(req,res,next) {
    const transaction = await sequelize.transaction()
    try {
        const id = req.params.id
        const data = await placeService.deletePlace(id)
        transaction.commit()
        return res.status(200).json({
            status : 200, 
            message : 'Success Delete Places'
        })
    } catch (error) {
        transaction.rollback()
        next(error)
    }
}

module.exports = {
    createPlace,
    getAllPlace,
    getPlace,
    updatePlace,
    deletePlace
}