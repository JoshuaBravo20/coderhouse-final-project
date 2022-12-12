<template>
  <b-card tag="article" style="max-width: 30rem" class="mb-2 centered">
    <div class="container">
      <div class="row" style="font-weight: bold; font-size: 1.7rem">
        Ingresar
      </div>
      <div class="row mt-3">Email</div>
      <div class="row">
        <b-form-input
          id="input-email"
          placeholder="Ingresa tu email"
        ></b-form-input>
      </div>
      <div class="row mt-2">Clave</div>
      <div class="row">
        <b-form-input
          id="input-pass"
          placeholder="Ingresa tu clave"
        ></b-form-input>
      </div>

      <div class="row mt-4 d-flex justify-content-center">
        <b-button variant="dark" class="w-50">Entrar</b-button>
      </div>

      <div class="row mt-4 text-secondary clickable" style="font-weight: bold">
        Regístrate
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
    props: {
        email: String,
        password: String
    }
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
