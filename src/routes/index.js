const {Router} = require('express')

const zombiesRouter = require('./zombies.routes')

const routes = Router()

routes.use('/zombies',zombiesRouter)

module.exports = routes