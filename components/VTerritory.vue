<template>
  <div>
    <p>縄張り</p>
    <div v-for="(point,i) in $store.getters.getUsers" :key="i">
      <p>{{point.territory}}</p>
    </div>
  </div>
</template>

<script>
export default {
  async created(){
    // await this.$store.dispatch('fetchUsers')
    // await this.$store.dispatch('initUsers')
  }
}
</script>