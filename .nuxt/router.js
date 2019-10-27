import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3562b68e = () => interopDefault(import('..\\pages\\add.vue' /* webpackChunkName: "pages_add" */))
const _d6324b1c = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _b6b410fe = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _9d6547cc = () => interopDefault(import('..\\pages\\musicians.vue' /* webpackChunkName: "pages_musicians" */))
const _0e32f1c1 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _0c0e65bb = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _4a03572c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/musicians",
    component: _9d6547cc,
    name: "musicians"
  }, {
    path: "/profile",
    component: _0e32f1c1,
    name: "profile"
  }, {
    path: "/register",
    component: _0c0e65bb,
    name: "register"
  }, {
    path: "/",
    component: _4a03572c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
