<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
.shadows {
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.1);
}

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
