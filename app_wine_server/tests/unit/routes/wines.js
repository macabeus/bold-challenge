const test = require('ava')
const { get, post } = require('../../../src/routes/wines')
const { mockKoaRouter } = require('../../helpers/koa_router')

test('GET /wines - empty database', (t) => {
  const route = {}
  const ctx = {
    database: {
      wines: [],
    },
  }
  get(mockKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/wines' }, 'Should route be "GET /wines"')
  t.deepEqual(ctx.body, [])
})

test('GET /wines - filled database', (t) => {
  const databaseWines = [
    {
      name: 'wine name',
      vineyard: 'vineyard name',
      year: 1999,
      price: 200,
    },
  ]

  const route = {}
  const ctx = {
    database: {
      wines: databaseWines,
    },
  }
  get(mockKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/wines' }, 'Should route be "GET /wines"')
  t.deepEqual(ctx.body, databaseWines)
})

test('POST /wines', (t) => {
  const newWine = {
    name: 'wine name',
    vineyard: 'vineyard name',
    year: 1999,
    price: 200,
  }

  const route = {}
  const ctx = {
    database: {
      wines: [],
    },
    request: {
      body: newWine,
    },
  }
  post(mockKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'post', path: '/wines' }, 'Should route be "POST /wines"')
  t.deepEqual(ctx.body, newWine)
  t.deepEqual(ctx.database.wines, [newWine])
})
