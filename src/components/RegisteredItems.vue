<script>
  export default {
    name: 'registered-items'
  }
</script>

<template>
  <ul>
    <li v-for="item of $store.state.itemList">
      <button @click="$store.commit('removeItem', item)">x</button> {{item}}
    </li>
  </ul>
</template>
