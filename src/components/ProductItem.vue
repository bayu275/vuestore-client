<template>
  <div class="product-item">
    <img :src="product.imageUrl" :alt="product.name" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">Rp{{ product.price }}</p>
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
      <button>View Details</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.product-item {
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

img {
  width: 200px;
  height: 200px;
}
.product-name {
  margin-bottom: 0;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>