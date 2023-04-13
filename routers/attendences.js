const routes = require('express').Router()
const { attendanceController } = require("../controller")

routes.get('/', attendanceController.getAttendaces)
routes.get('/:id', attendanceController.getAttendance)
routes.post('/', attendanceController.createAttendance)
routes.put('/:id', attendanceController.updateAttendance)
routes.delete('/:id', attendanceController.deleteAttendance)

module.exports = routes
