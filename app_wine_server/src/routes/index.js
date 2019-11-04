const KoaRouter = require('koa-router')
const winesRoute = require('./wines')
const statusRoute = require('./status')

const router = new KoaRouter()

Object.values(winesRoute).forEach(route => route(router))
statusRoute(router)

module.exports = router
