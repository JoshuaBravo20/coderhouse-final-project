<template>
  <div class="container mt-5">
    <b-card class="centered shadows animate__animated animate__fadeIn">
      <h2 class="mb-4" v-if="!showMoreInfo"><strong>STOCK</strong></h2>
      <h2 v-if="items.length === 0">No hay stock aún :)</h2>
      <div class="row text-center" v-if="!showMoreInfo">
        <div class="col" v-for="(item, index) in items" :key="index">
          <product-card
            :nombre="item.nombre"
            :imageSource="item.imageSource"
            :precio="formatPrice(item.precio)"
            :consola="item.consola"
            :estudio="item.estudio"
            :description="item.gameDescription"
            @updatedCartChild="toggleUpdateCart()"
            @toggleShowMoreInfo="toggleShowMoreInfo"
          ></product-card>
        </div>
      </div>
      <div class="container d-flex justify-content-center" v-if="showMoreInfo">
        <b-card
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 10rem; max-width: 30rem"
          class="mb-2 text-center"
        >
          <b-card-img :src="requestedItem.imageSource"></b-card-img>

          <h2 class="mt-2"><strong>{{requestedItem.nombre.toUpperCase()}}</strong></h2>

          <h5 class="mt-3">
            {{ requestedItem.description }}
          </h5>

          <h5 class="mt-4">
            <strong>Consola:</strong> {{ requestedItem.consola }}
          </h5>
          <h5><strong>Estudio:</strong> {{ requestedItem.estudio }}</h5>
          <h5><strong>Precio:</strong> {{ requestedItem.precio }}</h5>

          <div class="row text-center">
            <div class="col">
              <b-button variant="dark"><strong>COMPRAR</strong></b-button>
            </div>
            <div class="col"></div>
            <div class="col" @click="showMoreInfo = false">
              <b-button variant="secondary"><strong>REGRESAR</strong></b-button>
            </div>
          </div>
        </b-card>
      </div>
    </b-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      requestedItem: {},
      showMoreInfo: false,
    };
  },
  methods: {
    toggleUpdateCart() {
      this.$emit('updatedCart')
    }, 
    toggleShowMoreInfo(
      nombre,
      precio,
      imageSource,
      consola,
      estudio,
      description
    ) {
      this.showMoreInfo = !this.showMoreInfo;
      this.requestedItem.nombre = nombre;
      this.requestedItem.precio = precio;
      this.requestedItem.imageSource = imageSource;
      this.requestedItem.consola = consola;
      this.requestedItem.estudio = estudio;
      this.requestedItem.description = description;
    },
    formatPrice(amount) {
      let formatted = `$ ${amount}`;
      return formatted;
    },
  },
};
</script>

<style>
.centered {
  margin: auto;
}
</style>
