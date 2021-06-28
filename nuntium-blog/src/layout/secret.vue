<template>
  <div class="d-flex">
    <Sidebar></Sidebar>
    <div class="d-flex flex-column w-100">
      <Navbar></Navbar>
      <router-view />
    </div>
    
  </div>
</template>

<script>
import Navbar from "../components/Navbar_secret.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Secret",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
<style>
</style>