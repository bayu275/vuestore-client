<template>
  <div id="page-wrap" v-if="product">
    <h4 v-if="notif" class="notif">item added to cart</h4>
    <div id="img-wrap">
      <img :src="`http://localhost:3000${product.imageUrl}`" :alt="product.name" />
    </div>
    <div id="product-detail">
      <h1>{{ product.name }}</h1>
      <h3 id="price">Rp{{ product.price }}</h3>
      <p>Average rating : {{ product.averageRating }}</p>
      <button id="add-to-cart" @click="addToCart(product.code)">Add to cart</button>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundVue v-else />
</template>

<script>
import NotFoundVue from '../errors/NotFound.vue'

export default {
  data() {
    return {
      product: {},
      notif: false
    }
  },
  async created() {
    const code = this.$route.params.id
    try {
      const results = await fetch(`http://localhost:3000/api/products/${code}`).then((res) =>
        res.json()
      )
      this.product = results.product
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async addToCart(code) {
      try {
        await fetch('http://localhost:3000/api/orders/user/1/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ product: code })
        })
        this.notif = true
      } catch (error) {
        console.log(error)
      }
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