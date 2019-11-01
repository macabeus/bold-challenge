const addWine = (ctx, {
  name,
  vineyard,
  year,
  price,
}) => {
  const newWine = {
    name,
    vineyard,
    year,
    price,
  }
  ctx.database.wines.push(newWine)

  return newWine
}

const listWine = ctx => ctx.database.wines

module.exports = {
  addWine,
  listWine,
}
