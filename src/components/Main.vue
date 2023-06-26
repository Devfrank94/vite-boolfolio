<script>

import { store } from '../data/store.js';
import axios from 'axios';


export default {
  name:'Main',
  // data(){
  //   return {
    
  //   }
  // },

    methods:{
      getApi(){
        axios.get(store.apiUrl + 'projects')
          .then(results =>{

            console.log(results.data);
          })
      }


    },

    mounted(){
      this.getApi();
    }

  
}

</script>
<template>

  <div class="container my-5">
    <h1>Main</h1>

  </div>


  
</template>


<style lang="scss" scoped>

  @use '../scss/main.scss' as *;



</style>