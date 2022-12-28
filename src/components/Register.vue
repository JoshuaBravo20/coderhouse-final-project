<template>
  <b-card tag="article" style="max-width: 30rem" class="mb-2 centered shadows animate__animated animate__fadeIn" @keyup.enter="register()">
    <div class="container">
      <div class="row" style="font-weight: bold; font-size: 1.7rem">
        Regístrate
      </div>
      <div class="row mt-3">Nombre</div>
      <div class="row">
        <b-form-input
          id="input-name"
          placeholder="John"
          v-model="name"
        ></b-form-input>
      </div>
      <div class="row mt-3">Apellido</div>
      <div class="row">
        <b-form-input
          id="input-lastName"
          placeholder="Doe"
          v-model="lastName"
        ></b-form-input>
      </div>
      <div class="row mt-3">Email</div>
      <div class="row">
        <b-form-input
          id="input-email"
          placeholder="ejemplo@gmail.com"
          v-model="email"
        ></b-form-input>
      </div>
      <div class="row mt-3">Clave</div>
      <div class="row">
        <b-form-input
          id="input-pass"
          placeholder="********"
          v-model="password"
          type="password"
        ></b-form-input>
      </div>

      <div class="row mt-3">Tipo de Perfil</div>
      <div class="row mt-2">
        <b-form-radio-group
          id="btn-radios"
          v-model="userType"
          :options="userOptions"
          :aria-describedby="ariaDescribedby"
          name="radios-btn-default"
          buttons
          button-variant="dark"
        ></b-form-radio-group>
      </div>

      <div class="row mt-4 d-flex justify-content-center">
        <b-button variant="dark" class="w-50" @click="register()"
          >Registrarse</b-button
        >
      </div>

      <div
        class="row mt-4 text-secondary clickable"
        style="font-weight: bold"
        @click="triggerLogin()"
      >
        Ya tienes una cuenta?
      </div>
    </div>
  </b-card>
</template>

<script>
import axios from "axios";
export default {
  props: {
    email: String,
    password: String,
    name: String,
    lastName: String,
    userType: String,
  },
  data() {
    return {
      userOptions: [
        { text: "Cliente", value: "client" },
        { text: "Admin", value: "admin" },
      ],
      canContinue: false,
      usersResponse: [],
    };
  },
  async created() {
    this.usersResponse = await axios.get(
      "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/users"
    );
  },
  methods: {
    triggerLogin() {
      this.$emit("goLogin");
    },
    async register() {
      this.evalFields();
      if (this.canContinue) {
        let existingUsers = this.usersResponse.data.filter(
          (obj) => obj.email === this.email
        );
        if (existingUsers.length) {
          this.$toast.open({
            message: "Un usuario con ese email ya ha sido creado",
            type: "warning",
          });
        } else {
          let userObj = {
            name: this.name,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            userType: this.userType,
          };
          try {
            await axios
              .post(
                "https://639fdedf7aaf11ceb8a1fe20.mockapi.io/users",
                userObj
              )
              .then((resp) => {
                if (resp.status === 201) {
                  this.$toast.open({
                    message: "Usuario Registrado con Éxito",
                    type: "success",
                  });
                  setTimeout(() => {
                    location.reload();
                  }, 1400);
                }
              });
          } catch (error) {
            this.$toast.open({
              message: `Hubo un error: ${error}`,
              type: "error",
            });
          }
        }
      }
    },
    evalFields() {
      if (!this.name) {
        this.$toast.open({
          message: "Nombre es inválido",
          type: "error",
        });
      }
      if (!this.lastName) {
        this.$toast.open({
          message: "Apellido es inválido",
          type: "error",
        });
      }
      if (!this.email) {
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

/* #btn-radios {
  color: yellow !important;
} */
</style>
