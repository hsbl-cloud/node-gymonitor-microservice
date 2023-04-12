const routes = require('express').Router()
const { placeController } = require('../controller')


routes.get('/', placeController.getAllPlace)
routes.get('/:id', placeController.getPlace)
routes.post('/', placeController.createPlace)
routes.put('/:id', placeController.updatePlace)
routes.delete('/:id', placeController.deletePlace)


module.exports = routes