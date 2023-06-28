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
            loaded:false
        }
    },

    methods:{
        getApi(){
            this.loaded = false;
            axios.get(store.apiUrl + 'projects' + this.$route.params.slug)
                .then(results =>{
                    this.project = results.data;
                    this.loaded = true;
                })
        },

    },

    mounted(){
        this.getApi();
    }
}
</script>

<template>
    <div class="page-wrapper">
        
        <div v-if="loaded" class="wrapper">
            <h2>{{ this.$route.params.slug }}</h2>
            <!-- <div>
                <img :src="project.image_path" :alt="project.image_original_name">
            </div> -->
            <!-- <h5 class="mt-3">Type -> {{ project.type }}</h5>
            <div class="mt-3">
                <span class="pe-4">Kind of work:</span>
                <span class="badge text-bg-primary">{{ project.kind.name }}</span>
            </div>
            <div class="my-3">
                <span class="me-3">Technologies used:</span>
                <span v-for="(name,index) in project.technologies" :key="index">
                    
                </span>
            </div>
            <span>Description:</span>
            <p v-html="project.description"></p>
            <div>
                <span>Project data: </span>
                <span>{{ project.data }}</span>
            </div> -->
        </div>
        <Loader v-else/>
    </div>
</template>


<style lang="scss" scoped>

@use '../../scss/main.scss' as *;




</style>