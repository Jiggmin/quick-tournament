<script>
  import Registration from './components/Registration'
  import Tournament from './components/Tournament'
  import Welcome from './components/Welcome'

  export default {
    name: 'app',
    components: {
      Registration,
      Tournament,
      Welcome
    }
  }
</script>

<template>
  <div id="app" class="container">
    <registration v-if="$store.state.page === 'registration'"></registration>
    <tournament v-if="$store.state.page === 'tournament'"></tournament>
    <welcome v-if="$store.state.page === 'welcome'"></welcome>
  </div>
</template>

<style>
  a:hover {
    cursor: pointer
  }
</style>
