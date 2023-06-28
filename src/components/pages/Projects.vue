<script>
import ProjectCard from '../partials/ProjectCard.vue';
import { store } from '../../data/store.js';
import axios from 'axios';


export default {
  name:'Projects',
  components:{
    ProjectCard
  },


  data(){
    return {
      projects:[],
      // links:[],
      // currentPage: null,
    }
  },

    methods:{
      getApi(){
        axios.get(store.apiUrl + 'projects')
          .then(results =>{
            this.projects = results.data;
            // this.links = results.data.links;
            // this.currentPage = results.data.current_page;
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
      :type="project.type.name"
      :tecnologies="project.tecnologies"
      :slug="project.slug"
      />
  </div>

  <!-- TODO: Button Paginatation -->
  <div>
    <!-- <button
      v-for="(link, index) in links"
      :key="index"
      v-html="link.label"
      @click="getApi(link.url)"
      :disabled="link == currentPage || !link.url"
      ></button> -->

  </div>

  
</template>


<style lang="scss" scoped>

  @use '../../scss/main.scss' as *;

// button{
//   padding: 5px 10px;
//   border: none;
//   border-radius: 5px;
//   margin-right: 3px;
// }

</style>