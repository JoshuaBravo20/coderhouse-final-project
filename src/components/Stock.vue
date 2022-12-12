<template>
  <div class="container mt-2">
    <b-card class="centered">
      <h3 class="mb-4" v-if="!showMoreInfo">Stock</h3>
      <div class="row text-center" v-if="!showMoreInfo">
        <div class="col" v-for="(item, index) in items" :key="index">
          <product-card
            :nombre="item.nombre"
            :imageSource="getSource(item.id)"
            :precio="item.precio"
            :consola="item.consola"
            :estudio="item.estudio"
            @toggleShowMoreInfo="toggleShowMoreInfo"
          ></product-card>
        </div>
      </div>
      <div class="container" v-if="showMoreInfo">
        <b-card
          :title="'Información Sobre: ' + requestedItem.nombre"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 text-center"
        >
          <b-card-img :src="requestedItem.imageSource"></b-card-img>

          <h5 class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            rhoncus lobortis mauris, sed pellentesque ex malesuada ullamcorper.
            Suspendisse potenti.
          </h5>

          <h5 class="mt-4"><strong>Consola:</strong> {{ requestedItem.consola }}</h5>
          <h5><strong>Estudio:</strong> {{ requestedItem.estudio }}</h5>
          <h5><strong>Precio:</strong> {{ requestedItem.precio }}</h5>

          <div class="row text-center">
            <div class="col"><b-button variant="dark">Comprar</b-button></div>
            <div class="col"></div>
            <div class="col" @click="showMoreInfo = false">
              <b-button variant="secondary">Regresar</b-button>
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
      imageSources: [
        {
          id: 1,
          url: "https://coverproject.sfo2.cdn.digitaloceanspaces.com/playstation_4/playstation_4.godofwar_.16271991131724927770_thumb.jpg",
        },
        {
          id: 2,
          url: "https://coverproject.sfo2.cdn.digitaloceanspaces.com/nintendo_switch/switch_zeldabreathofthewild_thumb.jpg",
        },
        {
          id: 3,
          url: "https://coverproject.sfo2.cdn.digitaloceanspaces.com/xbox_360/x360_halo4_thumb.jpg",
        },
      ],
    };
  },
  methods: {
    getSource(id) {
      let aux = this.imageSources.filter((obj) => {
        if (obj.id === id) return obj;
      });
      return aux[0].url;
    },
    toggleShowMoreInfo(nombre, precio, imageSource, consola, estudio) {
      this.showMoreInfo = !this.showMoreInfo;
      this.requestedItem.nombre = nombre;
      this.requestedItem.precio = precio;
      this.requestedItem.imageSource = imageSource;
      this.requestedItem.consola = consola;
      this.requestedItem.estudio = estudio;
    },
    /* formatPrice(amount) {
      let formatted = `$ ${amount}`;
      return formatted;
    }, */
    // Comentado temporalmente, al instanciarse todos los componentes, esta función se ejecuta dos veces
    // Para refactorizar
  },
};
</script>

<style>
.centered {
  margin: auto;
}
</style>
