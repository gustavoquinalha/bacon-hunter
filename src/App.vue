<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
   @import './src/assets/css/main.scss';

   #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;

     a {
       text-decoration: none;
       font-weight: 900;
       color: #2c3e50;
       margin: 10px;
       transition: .1s
     }
     a:hover {
       color: #1f262e;
       transform: scale(1.1, 1.1);
     }
     .menu {
       background: #ffffff;
       width: 100vw;
       height: 10vh;
       display: flex;
       justify-content: center;
       align-items: center;
     }
   }
</style>
