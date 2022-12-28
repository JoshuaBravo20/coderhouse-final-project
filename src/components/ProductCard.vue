<template>
  <div>
    <b-card
      :img-src="imageSource"
      :img-alt="nombre + ' img'"
      img-top
      tag="article"
      style="max-width: 20rem; min-width: 20rem;"
      class="mb-4"
    >
      <h2>
        <strong>{{ nombre.toUpperCase() }}</strong>
      </h2>
      <b-card-text>
        {{ description }}
      </b-card-text>

      <div class="row">
        <div class="col">
          <button class="btn btn-dark" @click="addToCart()">
            <strong>COMPRAR</strong>
          </button>
        </div>
        <div class="col mt-2">
          <strong>{{ precio }}</strong>
        </div>
        <div class="col">
          <button
            class="btn btn-dark mr-3"
            v-b-tooltip.hover
            title="Más Info"
            @click="toggleInfoModal(nombre)"
          >
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
          </button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showMoreInfo: false,
      requestedItem: {},
    };
  },
  props: {
    imageSource: String,
    nombre: String,
    precio: String,
    consola: String,
    estudio: String,
    description: String,
  },
  methods: {
    async addToCart() {
      let gameObj = {
        precio: this.precio,
        nombre: this.nombre,
        consola: this.consola,
        estudio: this.estudio,
        gameDescription: this.description,
      };
      await axios.post("https://639fdedf7aaf11ceb8a1fe20.mockapi.io/cart", gameObj);
      this.$emit('updatedCartChild')
      this.$toast.open({
        message: 'Agregado al carrito',
        type: 'success'
      })
    },
    toggleInfoModal() {
      this.$emit(
        "toggleShowMoreInfo",
        this.nombre,
        this.precio,
        this.imageSource,
        this.consola,
        this.estudio,
        this.description
      );
    },
  },
};
</script>

<style></style>
