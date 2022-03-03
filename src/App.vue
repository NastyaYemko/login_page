<template>
  <div class="auth">
    <div class="background"></div>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.background{
  background-image: url("./assets/background.png");
  background-size: cover;
  width: 55%;
  height: 100vh;
  position: fixed;
}
.auth{
  background: linear-gradient(90deg, #FEDCC5 0%, #FEDDC6 100%);
  min-height: 100vh;
}
@media screen and (max-width: 950px) {
  .background{
    width: 100%;
  }
}
</style>
