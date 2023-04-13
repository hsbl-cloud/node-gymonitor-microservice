const db = require("../models")

async function createAttendance(payload, transaction) {
    try {
        let data = await db.attendence.create(payload, {
            transaction
         })
        return data
    } catch (error) {
        throw error
    }
}

async function getAttendanceById(id) {
    try {
        let data = await db.attendence.findOne({
            where : {
                id
            }, 
            include : [
                {
                    model : db.place
                }
            ]
        })
        if(data) {
            return data
        }else {
            throw  {
                status : 404,
                msg : 'Data Not Found'
            }
        }
    } catch (error) {
        throw error
    }
}

async function getAttendances() {
    try {
        let data = await db.attendence.findAll({
            include : [
                {
                    model : db.place
                }
            ], 
        })
        return data
    } catch (error) {
        throw error
    }
}

async function updateAttendance(id,payload,transaction) {
    try {
        let data = await db.attendence.update(payload, {
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

async function deleteAttendance(id, transaction) {
    try {
        const data = await db.attendence.destroy({
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
    createAttendance,
    getAttendanceById,
    getAttendances,
    updateAttendance,
    deleteAttendance
}