<template>
  <div>
    <div id="nav"></div>
    <login
      :email="email"
      :password="password"
      v-if="!register"
      @goRegister="register = true"
    ></login>
    <register
      :email="email"
      :password="password"
      :name="name"
      :lastName="lastName"
      :userType="userType"
      v-if="register"
      @goLogin="register = false"
    ></register>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      lastName: "",
      register: false,
      userType: "client",
    };
  },
};
</script>

<style></style>
