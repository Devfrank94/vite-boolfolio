import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({

  history: createWebHistory(),

  routes:[
    {
      path: '/',
      name: 'home'
      
    }
  ]

})