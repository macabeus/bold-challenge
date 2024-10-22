const mockKoaRouter = (route, ctx) => ({
  get: async (path, callback) => {
    route.verb = 'get'
    route.path = path

    await callback(ctx)
  },

  post: async (path, callback) => {
    route.verb = 'post'
    route.path = path

    await callback(ctx)
  },
})

module.exports = { mockKoaRouter }
