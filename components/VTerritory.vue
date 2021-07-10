<template>
  <div>
    <div v-for="(point,i) in $store.getters.getUsers" :key="i">
      <p>{{point.territory}}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async created(){
      await this.$store.dispatch('fetchUsers')
    }
  }
}
</script>