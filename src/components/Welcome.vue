<script>
  export default {
    name: 'welcome'
  }
</script>

<template>
  <div class="jumbotron">
    <h1>Mav's Tournaments</h1>
    <p>Let's play one now! What is the best cereal? What is the best dessert? What will Mav come up with next?</p>
    <p><a class="btn btn-primary btn-lg" @click="$store.commit('beginRegistration')">Start a Tournament</a></p>
  </div>
</template>
