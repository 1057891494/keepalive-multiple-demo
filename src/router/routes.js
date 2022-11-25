export default [{
  path: '/',
  name: 'Base',
  redirect: '/route1',
  component: () => import("../components/layout"),
  children: [{
    title: '路由1',
    name: 'Route1',
    path: 'route1',
    component: () => import('../views/route1'),
    meta: {
      multiple: false,
      keepAlive: true
    }
  },{
    title: '路由2',
    name: 'Route2',
    path: 'route2',
    component: () => import('../views/route2'),
    meta: {
      multiple: false,
      keepAlive: true
    }
  },{
    title: '路由3',
    name: 'Route3',
    path: 'route3',
    component: () => import('../views/route3'),
    meta: {
      multiple: true,
      keepAlive: true
    }
  }]
}]