const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')
const database = require('./middleware/database')

const app = new Koa()

app
  .use(database)
  .use(bodyParser())
  .use(router.routes())
  .listen(3000)
