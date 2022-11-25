<template>
  <div class="layout">
    <div class="layout-top">
      <span v-for="route in openedRoutes" :key="route.name" @click="reopenRoute(route)">{{route.name}}</span>
    </div>
    <div class="container">
      <div class="menu-list">
        <div v-for="route in routes" :key="route.name">
          <span @click="touchRoute(route)">{{route.title}}</span>
        </div>
      </div>
      <main>
        <keep-alive>
          <router-view />
        </keep-alive>
      </main>
    </div>
  </div>
</template>
<script>
import routes from '../router/routes'
export default {
  name: 'Layout',
  data () {
    return {
      routes: routes[0].children,
      openedRoutes: []
    }
  },
  watch: {
    $route (nv) {
      this.collectRoute(nv)
    }
  },
  methods: {
    touchRoute (route) {
      if (route.name === 'Route3') {
        this.$router.push({
          name: route.name,
          query: {
            id: Math.random()
          }
        })
      } else {
        this.$router.push(route.name)
      }
    },
    collectRoute (route) {
      let hasCollected
      if (route?.meta?.multiple) {
        hasCollected = this.openedRoutes.some(r => r.name === route.name && r.query.id === route.query.id)
      } else {
        hasCollected = this.openedRoutes.some(r => r.name === route.name)
      }
      if (!hasCollected) {
        this.openedRoutes.push({ ...route })
      }
    },
    reopenRoute (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.layout {
  height: 100%;
  width: 100%;
}
.layout-top {
  height: 40px;
  background-color: blanchedalmond;
}
.layout-top > span {
  display: inline-block;
  margin: 0 10px;
}
.menu-list {
  height: 100%;
  background-color: #666;
  color: #fff;
}
.menu-list > div {
  margin: 10px 0;
}
.container {
  display: flex;
  height: calc(100% - 40px);
  background-color: aquamarine;
}
</style>
