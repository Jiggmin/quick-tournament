<script>
  import Registration from './components/Registration'
  import Tournament from './components/Tournament'

  export default {
    name: 'app',
    components: {
      Registration,
      Tournament
    }
  }
</script>

<template>
  <div id="app">
    <registration v-if="$store.state.page === 'registration'"></registration>
    <tournament v-if="$store.state.page === 'tournament'"></tournament>
  </div>
</template>

<style>
  #app {
  }
</style>
