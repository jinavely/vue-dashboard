<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import url('./assets/css/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

#app {
  height: 100vh;
  background: #172b4d;
}
#container {
  width: 1200px;
  margin: 0 auto;
}
</style>
