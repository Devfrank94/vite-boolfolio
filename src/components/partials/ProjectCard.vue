<script>
export default {
  name:'ProjectCard',

  props:{
    title: String,
    description: String,
    image:String,
    date:String,

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