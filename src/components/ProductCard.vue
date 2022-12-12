<template>
  <div>
    <b-card
      :title="nombre"
      :img-src="imageSource"
      :img-alt="nombre + ' img'"
      img-top
      tag="article"
      style="max-width: 24rem"
      class="mb-2"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        ullamcorper vulputate pharetra. Aliquam quis viverra magna.
      </b-card-text>

      <div class="row">
        <div class="col">
          <button class="btn btn-dark">Comprar</button>
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
    estudio: String
  },
  methods: {
    toggleInfoModal() {
      //console.log('54 name ', nombre, precio, imageSource)
      this.$emit("toggleShowMoreInfo", this.nombre, this.precio, this.imageSource, this.consola, this.estudio);
    },
  },
};
</script>

<style></style>
