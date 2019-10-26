import Api from '@/api/api.js'

export default (ctx, inject) => {
    const api = new Api({ $axios: ctx.app.$axios, $store: ctx.store, $router: ctx.app.router })
    ctx.$api = api
    inject('api', api)
}