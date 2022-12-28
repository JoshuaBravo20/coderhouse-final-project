<template>
  <div>
    <navbar class="mb-5" :cartQuantity="cartQuantity"></navbar>
    <stock :items="items" @updatedCart="updateCartQuantity()"></stock>
  </div>
</template>

<script>
import axios from "axios";
import Stock from "../components/Stock.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Stock,
    Navbar,
  },
  async created() {
    let gameStockResponse = await axios.get(
      "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/gamestock"
    );
    this.items = gameStockResponse.data;
    await this.updateCartQuantity()
  },
  data() {
    return {
      items: [],
      cartQuantity: 0
    };
  },
  methods: {
    async updateCartQuantity() {
      let aux = await axios.get("https://639fdedf7aaf11ceb8a1fe20.mockapi.io/cart")
      this.cartQuantity = aux.data.length
    },
  }
};
</script>

<style></style>
