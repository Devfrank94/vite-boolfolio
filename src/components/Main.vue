<script>
import ProjectCard from './partials/ProjectCard.vue';
import { store } from '../data/store.js';
import axios from 'axios';


export default {
  name:'Main',
  components:{
    ProjectCard
  },


  data(){
    return {
      projects:[]
    }
  },

    methods:{
      getApi(){
        axios.get(store.apiUrl + 'projects')
          .then(results =>{
            this.projects = results.data;
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

  <h2 class="text-center mt-2">Elenco Progetti</h2>
  <div class="container-fluid my-5 d-flex justify-content-center align-item-center flex-wrap">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :description="project.description"
      :image="project.image"
      :date="project.date"
      />

  </div>


  
</template>


<style lang="scss" scoped>

  @use '../scss/main.scss' as *;



</style>