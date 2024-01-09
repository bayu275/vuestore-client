<template>
  <div id="nav-bar">
    <router-link :to="{ name: 'Product' }" id="product-link">
      <h1>BayStore</h1>
    </router-link>
    <router-link :to="{ name: 'Cart' }" id="cart-link">
      <button>Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
}

#product-link {
  text-align: center;
  /* display: block; */
  color: #41b883;
  font-size: 1.5rem;
  text-decoration: none;
  position: absolute;
  top: 1rem;
  left: 3rem;
}

#product-link h1 {
  margin: 0;
}

#cart-link {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>