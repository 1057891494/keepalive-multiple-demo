<template>
  <div>route3 id:{{routeId}}</div>
</template>
<script>
export default {
  name: 'Route3',
  data () {
    return {
      routeId: ''
    }
  },
  mounted () {
    console.log('Route3 mounted')
    // 模拟接口
    Promise.resolve(this.$route.query.id).then(id => {
      this.routeId = id
    })
  }
}
</script>