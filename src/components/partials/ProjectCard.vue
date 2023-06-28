<script>
export default {
  name:'ProjectCard',

  props:{
    title: String,
    description: String,
    image:String,
    date:String,
    type: String,
    tecnologies: Array,
    slug: String,
  }

  

}

</script>
<template>

  <div class="card mx-2 my-3" style="width: 20rem;">
      <img :src= image class="card-img-top">
    <div class="card-body h-50">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text h-25">{{description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Data: {{date}}</li>
      <li class="list-group-item">
        <span class="badge text-bg-primary p-2">Tipo: {{type}}</span>
        <span class="badge text-bg-primary p-2" v-if="!type.length"> N/D </span>
      </li>
      <li class="list-group-item">
        <span class="badge text-bg-warning p-2 me-2" v-for="tecnology in tecnologies" :key="tecnology.id" >{{tecnology.name}}</span>
        <span class="badge text-bg-warning p-2 me-2" v-if="!tecnologies.length"> N/D </span>
      </li>
      <li class="list-group-item">
        <router-link :to="{ name: 'detail-project', params: { slug: slug } }">More Info</router-link>
      </li>
    </ul>
  </div>

  
</template>


<style lang="scss" scoped>

  @use '../../scss/main.scss' as *;
  //   .card{
  //     width: calc(100% / 6);
  //     margin-top: 2.5rem;
  //     padding: 0 10px;
  //     color: white;

  //   //   // img{
  //   //   //     width: 100%;
  //   //   //     aspect-ratio: 2 / 3;
  //   //   //     margin-bottom: .4rem;
  //   //   // }

  // }

  
  h2{
    color: white;
  }

</style>