<script>
  export default {
    name: 'registered-items'
  }
</script>

<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item of $store.state.itemList">
      <a class="pull-right" @click="$store.commit('removeItem', item)">x</a> {{item}}
    </li>
  </ul>
</template>

<style>
</style>
