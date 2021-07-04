<template>
  <div>
    <b-nav class="d-flex justify-content-between w-100">
      <div class="d-flex">
        <b-nav-item @click="actived = 'home'">
          <router-link to="/">
            <img src="../assets/logo.png" alt="" />
          </router-link>
        </b-nav-item>
        <b-nav-item @click="actived = 'home'">
          <router-link to="/" :class="actived == 'home' ? 'actived' : ''"
            >Home</router-link
          >
        </b-nav-item>
        <b-nav-item @click="actived = 'about'">
          <router-link to="/about" :class="actived == 'about' ? 'actived' : ''">About</router-link>
        </b-nav-item>
        <b-nav-item @click="actived = 'blogs'">
          <router-link to="/blogs" :class="actived == 'blogs' ? 'actived' : ''"
            >Blogs</router-link
          >
        </b-nav-item>
      </div>
      <b-nav-item
        ><button class="login-btn" @click="$router.push('/auth/login')">
          Login
        </button></b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actived: "home",
    };
  },
};
</script>

<style scoped lang="scss">
$text-color: #222;

* {
  color: $text-color;
  font-family: "FontAwesome";
}

a {
  text-decoration: none !important;
}

.nav {
  .nav-item {
    align-items: center;
    display: flex;
    font-weight: 600;
    img {
      height: 40px;
    }
    .login-btn {
      border-radius: 5px;
      border: 1px solid #111;
      background-color: transparent;
      padding: 0 10px;
    }
  }

  .actived {
    color: gray;
  }
}
</style>