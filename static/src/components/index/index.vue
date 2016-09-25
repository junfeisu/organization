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
        res.user.put_password({
          user_id: 2,
          password: '123456',
          ensurepassword: '12345'
        })
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