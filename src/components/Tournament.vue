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

    <div class="jumbotron" v-if="$store.state.survivingItemList.length === 1">
      <p>The winner is...</p>
      <h1>{{itemOne}}</h1>
      <p><a class="btn btn-primary btn-lg" @click="$store.commit('beginRegistration')">Start Another Tournament</a></p>
    </div>

    <div v-else class="row text-center">
      <div class="col-sm-5">
        <div class="well">
          <h3>{{itemOne}}</h3>
          <button class="btn btn-primary" @click="$store.commit('battle', {winner: itemOne, loser: itemTwo})">
            {{itemOne}} Wins!
          </button>
        </div>
      </div>

      <div class="col-sm-2">
        <br>
        <br>
        <br>
        <p>vs</p>
      </div>

      <div class="col-sm-5">
        <div class="well">
          <h3>{{itemTwo}}</h3>
          <button class="btn btn-primary" @click="$store.commit('battle', {winner: itemTwo, loser: itemOne})">
            {{itemTwo}} Wins!
          </button>
        </div>
      </div>

      <div class="col-sm-12">
        <br>
        <br>
        <button class="btn btn-default" @click="$store.commit('beginRegistration')">Quit</button>
      </div>
    </div>
  </div>
</template>
