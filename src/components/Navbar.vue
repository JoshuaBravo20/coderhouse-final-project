<template>
  <div class="container mb-3">
    <nav class="navbar navbar-expand-lg bg-dark fixed-top">
      <div class="container-fluid">
        <h5>BIENVENIDO, {{ loggedUserName }}</h5>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" @click="$router.push('/main')">
              <div
                class="nav-link active text-white clickable"
                aria-current="page"
              >
                <strong
                  ><font-awesome-icon icon="fa-solid fa-list" /> STOCK
                </strong>
              </div>
            </li>
            <li class="nav-item">
              <div
                class="nav-link text-white clickable"
                @click="$router.push('/cart')"
              >
                <strong
                  ><font-awesome-icon icon="fa-solid fa-cart-shopping" />
                  CARRITO
                  <span class="badge text-bg-danger" v-if="cartQuantity > 0">{{
                    cartQuantity
                  }}</span>
                </strong>
              </div>
            </li>
            <li class="nav-item" v-if="loggedUserType === 'admin'">
              <div
                class="nav-link text-white clickable"
                @click="$router.push('/products')"
              >
                <strong
                  ><font-awesome-icon icon="fa-solid fa-pen-to-square" /> ABM
                  PRODUCTOS
                </strong>
              </div>
            </li>
            <li class="nav-item" v-if="loggedUserType === 'admin'">
              <div
                class="nav-link text-white clickable"
                @click="$router.push('/users')"
              >
                <strong
                  ><font-awesome-icon icon="fa-solid fa-person" /> USUARIOS
                </strong>
              </div>
            </li>
          </ul>
          <button
            class="btn btn-danger"
            @click="logout()"
            v-b-tooltip.hover.bottom
            title="Salir"
          >
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$store.dispatch('cleanUser')
      this.$router.push("/");
    },
  },
  data() {
    return {
      loggedUserName: "",
      loggedUserType: "",
    };
  },
  async created() {
    let userObj = this.$store.getters.getUser
    this.loggedUserName = userObj.name;
    this.loggedUserType = userObj.userType;
  },
  props: {
    cartQuantity: Number,
  },
};
</script>

<style>
nav,
a,
ul,
li {
  color: white !important;
}

.clickable {
  cursor: pointer;
  width: 250px;
  transition: 0.3s;
}

.clickable:hover {
  color: rgb(149, 144, 144) !important;
}
</style>
