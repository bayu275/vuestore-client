<script setup>
import { cartItems } from '@/data-seed'
</script>

<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <div v-for="item in cartItems" :key="item" class="product-container">
      <img :src="item.imageUrl" :alt="item.title" class="product-image" />
      <div class="detail-wrap">
        <h3>{{ item.title }}</h3>
        <p>Rp{{ item.price }}</p>
      </div>
      <button class="remove-button">Remove</button>
    </div>
    <h3 id="total-price">Total : Rp{{ totalPrice }}</h3>
    <button id="checkout-button">Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + Number(item.price), 0)
    }
  },
  mounted() {
    console.log(this.cartItems)
  }
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #41b883;
  margin: 1rem 0 0;
  padding: 1rem;
}

#total-price {
  padding: 1rem;
  text-align: center;
}

#checkout-button {
  width: 100%;
}

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