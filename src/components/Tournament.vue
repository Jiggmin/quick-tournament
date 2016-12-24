<script>
  export default {
    name: 'tournament',
    computed: {
      itemOne () {
        return this.$store.state.survivingItemList[0]
      },
      itemTwo () {
        return this.$store.state.survivingItemList[1]
      }
    }
  }
</script>

<template>
  <div>
    <h1>Tournament</h1>

    <div v-if="$store.state.survivingItemList.length === 1">
      <h2>The winner is... {{itemOne}}!</h2>
    </div>

    <div v-else>
      <h3>{{itemOne}}</h3>
      <button @click="$store.commit('battle', {winner: itemOne, loser: itemTwo})">
        {{itemOne}} Wins!
      </button>

      <p>vs</p>

      <h3>{{itemTwo}}</h3>
      <button @click="$store.commit('battle', {winner: itemTwo, loser: itemOne})">
        {{itemTwo}} Wins!
      </button>
    </div>

    <br>
    <button @click="$store.commit('beginRegistration')">Quit</button>
  </div>
</template>
