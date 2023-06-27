<script>

export default {
  name: "Header",
  data(){
    return{
     
    }
  }
}
</script>

<template>

<header>

  <ul class="d-flex justify-content-center fs-5 my-4">

    <li>
      <router-link :to="{ name: 'home' }">home</router-link>
    </li>

    <li>
      <router-link :to="{ name: 'projects' }">progetti</router-link>
    </li>

    <li>
      <router-link :to="{ name: 'contacts' }">contatti</router-link>
    </li>

  </ul>

</header>


</template>

<!-- Al'interno del tag style dobbiamo scrivere lang="scss" per poter utilizzare sass all'interno -->
<style lang="scss" scoped>

@use '../scss/main.scss' as *;

ul{

  list-style: none;

  li{

    margin: 0 15px;

    a{
      
      text-transform: uppercase;
      text-decoration: none;
      &.active{
        color: red;
      }
    }

  }

}

</style>