const wines = []

const database = async (ctx, next) => {
  ctx.database = { wines }
  await next()
}

module.exports = database
