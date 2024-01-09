import { createRouter, createWebHistory } from 'vue-router'
import ProductIndex from '../views/product/ProductIndex.vue'
import ProductDetail from '../views/product/ProductDetail.vue'
import CartIndex from '../views/cart/CartIndex.vue'
import NotFound from '../views//errors/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Product',
      component: ProductIndex
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartIndex
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
})

export default router
