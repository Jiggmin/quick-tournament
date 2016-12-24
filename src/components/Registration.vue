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
    <h1>Set Up</h1>

    <form @submit.prevent="submitItem" class="form">
      <div class="form-group">
        <label class="control-label">What Shall Battle?</label>
        <div class="input-group">
          <input class="form-control" type="text" v-model="item"></input>
          <span class="input-group-btn">
            <input type="submit" class="btn btn-primary" value="Add"></input>
          </span>
        </div>
      </div>
    </form>

    <registered-items></registered-items>

    <div class="form-group" v-if="$store.state.itemList.length >= 2">
      <label class="control-label">Ready to Begin?</label>
      <div class="input-group">
        <button @click="$store.commit('beginTournament')"
                class="btn btn-primary">
          Begin the Tournament!
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
