const test = require('ava')
const statusRoute = require('../../../src/routes/status')
const { mockKoaRouter } = require('../../helpers/koa_router')

test('GET /status', (t) => {
  const route = {}
  const ctx = {}
  statusRoute(mockKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/status' }, 'Should route be "GET /status"')
  t.deepEqual(ctx.body, {
    status: 'ok',
  })
})
