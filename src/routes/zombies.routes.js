const { Router } = require('express')

const ZombiesController = require('../controllers/ZombiesController')

const zombiesController = new ZombiesController()

const zombiesRoutes = Router()

zombiesRoutes.post('/',zombiesController.create)
zombiesRoutes.put('/:id',zombiesController.update)
zombiesRoutes.get('/:id',zombiesController.show)
zombiesRoutes.delete('/:id',zombiesController.delete)

module.exports = zombiesRoutes