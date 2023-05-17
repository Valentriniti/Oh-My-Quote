import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyQuotesView from '../views/MyQuotesView.vue'
import ExploreView from '../views/ExploreView.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/MyQuotes',
    redirect: '/MyQuotes/you',
    children:[{
      path: '/MyQuotes/:user',
      name: 'MyQuotes',
      component: MyQuotesView,
      props: true
    }]
  },
  {
    path: '/Explore',
    name: 'Explore',
    component: ExploreView
  },
  {
    path: '/:NotFound',
    component: NotFound
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router