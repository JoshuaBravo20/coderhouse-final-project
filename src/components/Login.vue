<template>
  <b-card
    tag="article"
    style="max-width: 30rem"
    class="mb-2 centered shadows animate__animated animate__fadeIn"
    @keyup.enter="login()"
  >
    <div class="container">
      <div class="row" style="font-weight: bold; font-size: 1.7rem">
        Ingresar
      </div>
      <div class="row mt-3">Email</div>
      <div class="row">
        <b-form-input
          id="input-email"
          placeholder="Ingresa tu email"
          v-model="email"
        ></b-form-input>
      </div>
      <div class="row mt-2">Clave</div>
      <div class="row">
        <b-form-input
          id="input-pass"
          placeholder="Ingresa tu clave"
          v-model="password"
          type="password"
        ></b-form-input>
      </div>

      <div class="row mt-4 d-flex justify-content-center">
        <b-button variant="dark" class="w-50" @click="login()">Entrar</b-button>
      </div>

      <div
        class="row mt-4 text-secondary clickable"
        style="font-weight: bold"
        @click="triggerRegister()"
      >
        Registrarse
      </div>
    </div>
  </b-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      canContinue: false,
      usersResponse: [],
    };
  },
  props: {
    email: String,
    password: String,
  },
  async created() {
    this.usersResponse = await axios.get(
      "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/users"
    );
  },
  methods: {
    triggerRegister() {
      this.$emit("goRegister");
    },
    login() {
      this.evalFields();
      if (this.canContinue) {
        let existingUsers = this.usersResponse.data.filter(
          (obj) => obj.email === this.email && obj.password === this.password
        );
        if (existingUsers.length) {
          localStorage.setItem("loggedUser", JSON.stringify(existingUsers[0]));
          this.$toast.open({
            message: "Sesión iniciada con éxito",
            type: "success",
          });
          let auxItem = localStorage.getItem("loggedUser")
          let auxUser = JSON.parse(auxItem)
          this.$store.dispatch('receiveUser', auxUser)
          setTimeout(() => {
            this.$router.push("/main");
          }, 1400);
        } else {
          this.$toast.open({
            message: "Email o Clave inválido, por favor revisar",
            type: "error",
          });
        }
      }
    },
    evalFields() {
      if (!this.email) {
        console.log("email ", this.email);
        this.$toast.open({
          message: "Email es inválido",
          type: "error",
        });
      }
      if (!this.password) {
        this.$toast.open({
          message: "Clave es inválida",
          type: "error",
        });
      } else this.canContinue = true;
    },
  },
};
</script>

<style>
.centered {
  margin: auto;
  padding: 6px;
}

.clickable {
  cursor: pointer;
  width: 73px;
  transition: 0.3s;
}

.clickable:hover {
  color: rgb(28, 27, 27) !important;
}
</style>
