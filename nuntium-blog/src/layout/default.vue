<template>
  <div class="default">
    <Navbar></Navbar>
    <div class="main">
      <router-view :blogs="blogs" />
    </div>

    <template>
      <b-pagination
        class="container justify-content-center"
        v-model="currentPage"
        :total-rows="61"
        :per-page="10"
      ></b-pagination>
    </template>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Default",
  props: ["blogs"],
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  watch: {
    currentPage(val) {
      this.$emit("update:currentPage", val);
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.default {
  .main {
    min-height: 60vh;
  }
}
</style>