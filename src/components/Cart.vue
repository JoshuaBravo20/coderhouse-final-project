<template>
  <div class="container">
    <b-card>
      <h3 class="mb-4">Carrito</h3>
      <b-table :items="items" hover table-variant="light"></b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {};
  },
  mounted() {
    this.items = this.items.map((obj) => {
      obj.precio = this.formatPrice(obj.precio);
      return obj;
    });
  },
  methods: {
    formatPrice(amount) {
      let formatted = `$ ${amount}`;
      return formatted;
    },
  },
};
</script>

<style></style>
