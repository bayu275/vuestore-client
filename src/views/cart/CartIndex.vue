<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    <h3 id="total-price">Total : Rp{{ totalPrice }}</h3>
    <button id="checkout-button">Checkout</button>
  </div>
</template>

<script>
import { cartItems } from '@/data-seed'
import CartItem from '@/components/CartItem.vue'

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
  components: {
    CartItem
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
</style>