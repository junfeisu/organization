<template>
  <div class="index">index</div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {}
    },
    methods: {
      abc () {
        res.user.get_user({user_id: 1})
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    ready () {
      this.abc()
    }
  }
</script>

<style lang="scss" scoped>
  
</style>