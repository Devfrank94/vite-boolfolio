import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue'
import Projects from './components/pages/Projects.vue'
import Contacts from './components/pages/Contacts.vue'

const router = createRouter({

  history: createWebHistory(),

  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },

    //rotta per 404

    { 
      path: '/:pathMatch(.*)*', 
      component: Error404 
    }



  ]

})

export { router }