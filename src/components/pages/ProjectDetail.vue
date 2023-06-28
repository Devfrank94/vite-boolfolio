<script>
import { store } from '../../data/store.js';
import Loader from '../partials/Loader.vue';
import axios from 'axios';

export default {
    name:"ProjectDetail",

    components:{
      Loader
    },

    data(){
        return{
            project: null,
            loaded:false,
            tecnologies:[]
        }
    },

    methods:{
        getApi(){
          this.loaded = false;
            axios.get(store.apiUrl + 'projects/detail-project/' + this.$route.params.slug)
                .then(results =>{
                    this.project = results.data;
                    this.loaded = true;
                    console.log(this.project);
                  })
        },

    },

    mounted(){
      this.getApi()
    }
}
</script>

<template>

<Loader v-if="!loaded"/>

<div v-else>
  <h3 class="my-5">Dettaglio Progetto</h3>
  <div class="card mx-2 my-3" style="w-75">
    <div class="card-body h-50 d-flex gap-3">
        <img :src=  project.image class="w-25">
        <div>
          <h5 class="card-title">{{project.title}}</h5>
          <p class="card-text h-25">{{project.description}}</p>

        </div>
      </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Data: {{project.date}}</li>
          <li class="list-group-item">
            <span>Tipo: </span>
            <span class="badge text-bg-primary p-2">{{project.type.name}}</span>
          </li>
          <li class="list-group-item">
            <span>Tecnologie: </span>
            <span class="badge text-bg-warning p-2 me-2" v-for="tecnology in project.tecnologies" :key="tecnology.id">{{ tecnology.name }} </span>
          </li>
        </ul>
      </div>
</div>

</template>


<style lang="scss" scoped>

@use '../../scss/main.scss' as *;




</style>