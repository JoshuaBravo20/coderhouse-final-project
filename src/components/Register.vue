<template>
  <b-card tag="article" style="max-width: 30rem" class="mb-2 centered">
    <div class="container">
      <div class="row" style="font-weight: bold; font-size: 1.7rem">
        Regístrate
      </div>
      <div class="row mt-3">Nombre</div>
      <div class="row">
        <b-form-input id="input-name" placeholder="John" v-model="name"></b-form-input>
      </div>
      <div class="row mt-3">Apellido</div>
      <div class="row">
        <b-form-input id="input-lastName" placeholder="Doe" v-model="lastName"></b-form-input>
      </div>
      <div class="row mt-3">Email</div>
      <div class="row">
        <b-form-input
          id="input-email"
          placeholder="ejemplo@gmail.com"
          v-model="email"
        ></b-form-input>
      </div>
      <div class="row mt-2">Clave</div>
      <div class="row">
        <b-form-input id="input-pass" placeholder="********" v-model="password"></b-form-input>
      </div>

      <div class="row mt-4 d-flex justify-content-center">
        <b-button variant="dark" class="w-50">Registrarse</b-button>
      </div>

      <div class="row mt-4 text-secondary clickable" style="font-weight: bold">
        Ya tienes una cuenta?
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
    props: {
        email: String,
        password: String,
        name: String,
        lastName: String
    }
};
</script>

<style scoped>
.centered {
  margin: auto;
  padding: 6px;
}

.clickable {
  cursor: pointer;
  width: 164px;
  transition: 0.3s;
}

.clickable:hover {
  color: rgb(28, 27, 27) !important;
}
</style>
