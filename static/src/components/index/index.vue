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
        res.community.get_allcommunity()
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
      console.log(this)
    }
  }
</script>

<style lang="scss" scoped>
  
</style>