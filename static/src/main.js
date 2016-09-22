import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import config from './route.config'
import res from '../res.js'

Vue.use(VueRouter)

const router = new VueRouter({
  saveScrollPosition: true,
  history: true
})

window.res = res
config(router)

router.start(App, 'App')
