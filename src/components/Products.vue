<template>
  <div>
    <navbar class="mb-5" :cartQuantity="cartQuantity"></navbar>
    <div class="container">
      <b-card class="shadows animate__animated animate__fadeIn">
        <h3 class="mb-4"><strong>ABM PRODUCTOS</strong></h3>

        <div class="container">
          <div class="row mt-3"><strong>OPERACIÓN</strong></div>
          <div class="row mt-2">
            <b-form-radio-group
              id="btn-radios"
              v-model="operation"
              :options="operationOptions"
              :aria-describedby="ariaDescribedby"
              name="radios-btn-default"
              buttons
              button-variant="dark"
            ></b-form-radio-group>
          </div>

          <div class="row mt-3">Nombre</div>
          <div class="row">
            <b-form-input
              placeholder="Zelda Ocarina of Time"
              v-model="nombre"
            ></b-form-input>
          </div>
          <div class="row mt-3">Precio</div>
          <div class="row">
            <b-form-input
              placeholder="200"
              v-model="precio"
              type="number"
            ></b-form-input>
          </div>
          <div class="row mt-3">Estudio</div>
          <div class="row">
            <b-form-input
              placeholder="Nintendo"
              v-model="estudio"
            ></b-form-input>
          </div>
          <div class="row mt-3">Consola</div>
          <div class="row">
            <b-form-input placeholder="PS4" v-model="consola"></b-form-input>
          </div>
          <div class="row mt-3">URL Imagen</div>
          <div class="row">
            <b-form-input
              placeholder="Insertar URL de imagen"
              v-model="imageSource"
            ></b-form-input>
          </div>
          <div class="row mt-3">Descripción de Juego</div>
          <div class="row">
            <b-form-input
              placeholder="Zelda Ocarina of Time (1998) es un juego de N64 que..."
              v-model="gameDescription"
            ></b-form-input>
          </div>

          <div class="row mt-4 d-flex justify-content-center">
            <b-button
              variant="dark"
              class="w-50 shadows"
              @click="handleABM(operation)"
              >{{
                operation === "post"
                  ? "Agregar producto"
                  : operation === "put"
                  ? "Modificar producto"
                  : "Eliminar producto"
              }}</b-button
            >
          </div>
        </div>
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
      cartQuantity: 0,
      gameStock: [],
      operation: "post",
      operationOptions: [
        { text: "Alta", value: "post" },
        { text: "Baja", value: "delete" },
        { text: "Modificación", value: "put" },
      ],
      nombre: "",
      precio: "",
      estudio: "",
      consola: "",
      imageSource: "",
      gameDescription: "",
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
    this.cartQuantity = cartResponse.data.length;
    let gameStockResponse = await axios.get(
      "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/gamestock"
    );
    this.gameStock = gameStockResponse.data;
  },
  methods: {
    async handleABM(ope) {
      const URL = "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/gamestock";
      const gameObj = {
        nombre: this.nombre,
        precio: this.precio,
        estudio: this.estudio,
        consola: this.consola,
        imageSource: this.imageSource,
        gameDescription: this.gameDescription,
      };
      if (ope === "post") {
        await axios.post(URL, gameObj);
        this.$toast.open({
          message: "Agregado al stock!",
          type: "success",
        });
        setTimeout(() => {
          this.$router.push("/main");
        }, 2000);
      }
      if (ope === "put") {
        let aux = this.gameStock.filter(
          (elem) => elem.nombre.toLowerCase() === this.nombre.toLowerCase()
        );
        if (aux.length) {
          await axios.put(`${URL}/${aux[0].id}`, gameObj);
          this.$toast.open({
            message: "Producto modificado!",
            type: "success",
          });
          setTimeout(() => {
            this.$router.push("/main");
          }, 2000);
        } else {
          this.$toast.open({
            message: "Producto no encontrado!",
            type: "danger",
          });
        }
      }
      if (ope === "delete") {
        let aux = this.gameStock.filter(
          (elem) => elem.nombre.toLowerCase() === this.nombre.toLowerCase()
        );
        if (aux.length) {
          await axios.delete(`${URL}/${aux[0].id}`, gameObj);
          this.$toast.open({
            message: "Producto eliminado!",
            type: "success",
          });
          setTimeout(() => {
            this.$router.push("/main");
          }, 2000);
        } else {
          this.$toast.open({
            message: "Producto no encontrado!",
            type: "danger",
          });
        }
      }
    },
  },
};
</script>

<style></style>
