<template>
  <div id="app">
    <login :email="email" :password="password"></login>
    <register
      :email="email"
      :password="password"
      :name="name"
      :lastName="lastName"
    ></register>
    <cart :items="items"></cart>
    <stock :items="items"></stock>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Cart from "./components/Cart.vue";
import Stock from "./components/Stock.vue";

export default {
  name: "App",
  components: {
    Login,
    Register,
    Cart,
    Stock,
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      lastName: "",
      items: [
        {
          id: 1,
          nombre: "God of War",
          estudio: "Sony Santa Monica",
          consola: "PS4",
          precio: "59.99",
        },
        {
          id: 2,
          nombre: "Zelda Breath of The Wild",
          estudio: "Nintendo",
          consola: "Nintendo Switch",
          precio: "49.99",
        },
        {
          id: 3,
          nombre: "Halo 4",
          estudio: "Microsoft",
          consola: "Xbox",
          precio: "40.00",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}



@import "~bootstrap/dist/css/bootstrap.css";
</style>
