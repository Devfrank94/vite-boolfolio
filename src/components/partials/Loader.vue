<script>
export default {
  name: "Loader"
}
</script>

<template>
  <div class="container d-flex justify-content-center my-3">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
 @use '../../scss/main.scss' as *;

 .loader {
  width: 72px;
  height: 72px;
  margin: 30px;
  display: grid;
  animation: spinner-plncf9 4.8s infinite;
}

.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  border: 11.5px solid;
  border-radius: 50%;
  border-color: red red #0000 #0000;
  mix-blend-mode: darken;
  animation: spinner-plncf9 1.2s infinite linear;
}

.loader::after {
  border-color: lightgray lightgray #dbdcef #dbdcef;
  animation-direction: reverse;
}

@keyframes spinner-plncf9 {
  100% {
  transform: rotate(1turn);
  }
}



</style>