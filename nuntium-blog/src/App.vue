<template>
  <div id="app">
    <Default :blogs="blogs" v-if="secret != 'true'"></Default>
    <Secret :blogs="blogs" v-if="secret == 'true'"></Secret>
    <!-- <router-view :blogs="blogs" v-bind:secret.sync="secret" /> -->
  </div>
</template>

<script>
import Default from "./layout/default.vue";
import Secret from "./layout/secret.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      blogs: [],
    };
  },
  components: {
    Default,
    Secret,
  },
  computed: {
    secret() {
      console.log(this.$cookies.get("secret"));
      return this.$cookies.get("secret") ? this.$cookies.get("secret") : false;
    },
  },
  async created() {
    try {
      const response = await axios.get(
        "https://606b20daf8678400172e5aff.mockapi.io/users/blogs"
      );
      this.blogs = response.data;
    } catch {
      alert("Can not get data!!!");
    }
  },
};
</script>

<style lang="scss">
$text-color: #222;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  font-family: sans-serif;
  color: $text-color;
}

a {
  text-decoration: none !important;
}
</style>
