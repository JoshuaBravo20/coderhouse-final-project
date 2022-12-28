<template>
  <div>
    <navbar class="mb-5" :cartQuantity="cartQuantity"></navbar>
    <div class="container">
      <b-card class="shadows animate__animated animate__fadeIn">
        <h3 class="mb-4"><strong>USUARIOS</strong></h3>
        <b-table :items="items" hover table-variant="light"></b-table>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
export default {
  data() {
    return {
      items: [],
      cartQuantity: 0
    };
  },
  components: {
    Navbar,
  },
  async created() {
    let userResponse = await axios.get(
      "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/users"
    );
    this.items = userResponse.data;
    let cartResponse = await axios.get(
      "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/cart"
    );
    this.cartQuantity = cartResponse.data.length
  },
  methods: {},
};
</script>

<style></style>
