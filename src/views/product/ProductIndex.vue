<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { products } from '@/data-seed'
import ProductItem from '@/components/ProductItem.vue'
export default {
  data() {
    return {
      products
    }
  },
  components: {
    ProductItem
  }
}
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>