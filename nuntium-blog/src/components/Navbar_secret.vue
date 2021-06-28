<template>
  <div class="">
    <b-nav class="d-flex justify-content-end w-100">
      <b-nav-item>
        <b-form-input v-model="text" placeholder="Search ..."></b-form-input>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/notify"><b-icon-bell></b-icon-bell></router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/profile">
          <img src="../assets/logo.png" alt="">
        </router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  .nav-item {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>