<template>
  <div>
    <div v-for="(user,i) in $store.getters.getUsers" :key="i">
      <p>{{user.profile.name}}</p>
      <p><a>{{user.profile.age}}
      {{user.profile.sex}}</a></p>
      <p>{{user.profile.breed}}</p>
      <p>{{user.profile.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  async created(){
    // await this.$store.dispatch('fetchUsers')
    await this.$store.dispatch('initUsers')
  }
}
</script>