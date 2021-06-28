<template>
<div class="default">
  <Navbar></Navbar>
  <div class="main">
    <router-view :blogs="blogs" />
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Default",
  props: ["blogs"],
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped lang="scss">
.default {
  .main {
    min-height: 60vh;
  }
}
</style>