<script setup>
import NavbarItem from './components/NavbarItem.vue'
</script>

<template>
  <div>
    <NavbarItem />
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
    NavbarItem
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Arial;
}

#page-wrap {
  margin: 1rem auto;
  max-width: 800px;
  min-height: 100vh;
}

button {
  background-color: #41b883;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  outline: 0;
  padding: 1rem;
}
</style>