import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01de04f7 = () => interopDefault(import('../pages/add.vue' /* webpackChunkName: "pages/add" */))
const _1e2febb0 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _f4a92d5a = () => interopDefault(import('../pages/main.vue' /* webpackChunkName: "pages/main" */))
const _d107fa02 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/add",
    component: _01de04f7,
    name: "add"
  }, {
    path: "/inspire",
    component: _1e2febb0,
    name: "inspire"
  }, {
    path: "/main",
    component: _f4a92d5a,
    name: "main"
  }, {
    path: "/profile",
    component: _d107fa02,
    name: "profile"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
