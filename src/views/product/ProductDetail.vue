<script setup>
import { products } from '@/data-seed'
import NotFoundVue from '../errors/NotFound.vue'
</script>

<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <div id="product-detail">
      <h1>{{ product.name }}</h1>
      <h3 id="price">Rp{{ product.price }}</h3>
      <p>Average rating : {{ product.averageRating }}</p>
      <button id="add-to-cart">Add to cart</button>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundVue v-else />
</template>

<script>
export default {
  data() {
    return {
      products
    }
  },
  computed: {
    product() {
      return products.find((product) => product.id === this.$route.params.id)
    }
  },
  components: {
    NotFoundVue
  }
}
</script>

<style scoped>
#page-wrap {
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-detail {
  padding: 1rem;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 2rem;
  right: 1rem;
}

.notif {
  text-align: center;
  color: white;
  background-color: #41b883;
  padding: 3%;
  border-radius: 8px;
}
</style>