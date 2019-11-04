const { addWine, listWine } = require('../models/wine')

const get = router => router.get('/wines', (ctx) => {
  const wines = listWine(ctx)

  ctx.body = wines
})

const post = router => router.post('/wines', (ctx) => {
  const {
    name,
    vineyard,
    year,
    price,
  } = ctx.request.body
  const newWine = addWine(ctx, {
    name,
    vineyard,
    year,
    price,
  })

  ctx.body = newWine
})

module.exports = {
  get,
  post,
}
