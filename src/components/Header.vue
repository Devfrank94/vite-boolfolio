<script>
// per importare dati dalla cartella data in cui ci sono database
// import {mainMenu} from "../data/menus";
export default {
  name: "Header",
  data(){
    return{
      // mainMenu
    }
  }
}
</script>

<template>

<h1>Header</h1>

</template>

<!-- Al'interno del tag style dobbiamo scrivere lang="scss" per poter utilizzare sass all'interno -->
<style lang="scss" scoped>

@use '../scss/main.scss' as *;

</style>