<script>
  import RegisteredItems from './RegisteredItems'

  export default {
    name: 'registration',
    components: {
      RegisteredItems
    },
    data () {
      return {
        item: ''
      }
    },
    methods: {
      submitItem () {
        this.$store.commit('addItem', this.item)
        this.item = ''
      }
    }
  }
</script>

<template>
  <div class="hello">
    <h1>Registration</h1>
    <form @submit.prevent="submitItem">
      <input type="text" v-model="item"></input>
      <input type="submit"></input>
    </form>
    <registered-items></registered-items>
    <button v-if="$store.state.itemList.length >= 2"
            @click="$store.commit('beginTournament')">
      Begin the Tournament!
    </button>
  </div>
</template>

<style scoped>
</style>
