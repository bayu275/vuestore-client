<template>
  <div class="product-container">
    <img :src="item.imageUrl" :alt="item.title" class="product-image" />
    <div class="detail-wrap">
      <h3>{{ item.title }}</h3>
      <p>Rp{{ item.price }}</p>
    </div>
    <button class="remove-button">Remove</button>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.product-container {
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 1rem;
  width: 100%;
}
.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.detail-wrap {
  padding: 0 1rem;
  flex: 3;
}

.remove-button {
  margin: auto;
  flex: 1;
}
</style>