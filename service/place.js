const { Transaction } = require('sequelize')
const db = require('../models')

/**
 * 
 * @param {Object} payload 
 * @param { String } payload.name
 * @param { JSON } payload.detail
 * @param {Transaction} transaction 
 */


async function createPlace(payload, transaction) {
    try {
        let data = await db.place.create(payload, { transaction })
        return data
    } catch (error) {
        throw error
    }
}

/**
 * 
 * @param {UUID} id 
 * @returns { Object }
 */

async function getPlace(id) {
    try {
        const data = await db.place.findOne({
            where : {
                id
            }
        })
        if(data) {
            return data.toJSON()
        }else {
            return {}
        }

    } catch (error) {
        throw error
    }
}

async function getPlaces() {
    try {
        const data = await db.place.findAll({
            order : [['createdAt', 'desc']]
        })
        return data
    } catch (error) {
        throw error
    }
}
/**
 * 
 * @param {Object} payload 
 * @param { String } payload.name
 * @param { JSON } payload.detail
 * @param {UUID} id 
 * @param {Transaction} transaction 
 * @returns 
 */
async function updatePlace(payload, id, transaction) {
    try {
        if(payload.detail && !payload.isFull) {
            let prevDetail = await getPlace(id)
            payload.detail = {...prevDetail.detail, ...payload.detail}
        }

        delete payload.isFull

        let data = await db.place.update(payload, {
            where : {
                id 
            },
            transaction,
            returning : true
        })

        if( data[0] ) {
            data = data[1][0]
            return data
        }else {
            throw {
                status : 404,
                msg : 'Data Not Found'
            }
        }
    } catch (error) {
        throw error
    }
}
/**
 * 
 * @param {UUID} id 
 * @param {Transaction} transaction 
 * @returns 
 */
async function deletePlace(id, transaction) {
    try {
        const data = await db.place.destroy({
            where : {
                id 
            },
            transaction
        })
        if(data) {
            return data
        }else {
            throw {
                status : 404, 
                msg : 'Data not found'
            }
        }

    } catch (error) {
        throw error
    }
}

module.exports = {
    createPlace,
    getPlace,
    getPlaces,
    updatePlace,
    deletePlace
}