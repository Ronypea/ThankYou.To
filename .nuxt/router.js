import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3562b68e = () => interopDefault(import('..\\pages\\add.vue' /* webpackChunkName: "pages_add" */))
const _d6324b1c = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _b6b410fe = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _104ec1d1 = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */))
const _0e32f1c1 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/add",
    component: _3562b68e,
    name: "add"
  }, {
    path: "/inspire",
    component: _d6324b1c,
    name: "inspire"
  }, {
    path: "/login",
    component: _b6b410fe,
    name: "login"
  }, {
    path: "/main",
    component: _104ec1d1,
    name: "main"
  }, {
    path: "/profile",
    component: _0e32f1c1,
    name: "profile"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
