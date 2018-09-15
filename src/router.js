import Vue        from 'vue'
import Router     from 'vue-router'
import About      from '@/views/About.vue'
import Resume     from '@/views/Resume.vue'
import Portfolio  from '@/views/Portfolio.vue'
import Contact    from '@/views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/resume',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "resume" */ './views/Resume.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    }
  ]
})
