<template>
  <div>
    <navbar class="mb-5" :cartQuantity="items.length"></navbar>
    <div class="container">
      <b-card class="shadows animate__animated animate__fadeIn">
        <h3 class="mb-4"><strong>CARRITO</strong></h3>
        <h2 v-if="items.length === 0">Aún no has agregado ningún producto al carrito!</h2>
        <b-table :items="items" hover table-variant="light"></b-table>
      </b-card>
      <b-button @click="finishPurchase()" variant="dark" class="mt-3 mb-5 btn-lg shadows" v-if="items.length > 0">Finalizar Compra</b-button>
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
      cartURL: "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/cart"
    };
  },
  components: {
    Navbar,
  },
  async created() {
    let cartResponse = await axios.get(
      this.cartURL
    );
    this.items = cartResponse.data;
  },
  methods: {
    formatPrice(amount) {
      let formatted = `$ ${amount}`;
      return formatted;
    },
    async finishPurchase() {
      for await (const elem of this.items) {
        const auxId = elem.id;
        await axios.delete(`${this.cartURL}/${auxId}`)
      }
      this.items = []
      this.$toast.open({
        message: "Compra Finalizada!",
        type: "success"
      })
    }
  },
};
</script>

<style></style>
