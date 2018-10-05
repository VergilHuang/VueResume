import Vue        from 'vue'
import Router     from 'vue-router'
import About      from '@/views/About.vue'
import Resume     from '@/views/Resume.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/resume',
      name: 'Resume',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "resume" */ './views/Resume.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
