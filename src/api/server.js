var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
fly.config.baseURL = 'http://47.92.217.9:9090'
fly.interceptors.request.use((config, promise) => {
  config.headers['X-Tag'] = 'flyio'
  return config
})

export default fly
