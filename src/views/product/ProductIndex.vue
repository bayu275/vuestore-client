<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'

export default {
  data() {
    return {
      products: []
    }
  },
  async created() {
    try {
      const results = await fetch('http://localhost:3000/api/products').then((res) => res.json())
      this.products = results.data
    } catch (error) {
      console.log(error)
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