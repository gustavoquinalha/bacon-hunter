<template>
  <div class="hello">
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/bacon-hunter">Bacon Hunter</router-link>

    </div>
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'My Games and SVG Animations'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
