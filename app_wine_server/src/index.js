const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')
const database = require('./middleware/database')

const app = new Koa()

app
  .use(cors())
  .use(database)
  .use(bodyParser())
  .use(router.routes())
  .listen(3000)
