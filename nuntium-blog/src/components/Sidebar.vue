<template>
  <div class="content">
    <div class="sidebar">
      <img src="../assets/logo.png" alt="" />
      <b-list-group class="list">
        <b-list-group-item class="item active"
          ><router-link to="/dashboard">Dashboard</router-link></b-list-group-item
        >
        <b-list-group-item class="item"
          ><router-link to="/profile">Profile</router-link></b-list-group-item
        >
        <b-list-group-item class="item"
          ><router-link to="/dashboard">All Posts</router-link></b-list-group-item
        >
        <b-list-group-item class="item"
          ><router-link to="/profile">Setting</router-link></b-list-group-item
        >
        <b-list-group-item class="item" @click="logout"
          >Logout</b-list-group-item
        >
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.set("secret", false);
      this.$router.push("/");
      this.$router.go();
    },
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #fff !important;
}

* {
  color: #fff !important;
}

.content {
  height: 100vh;
  .sidebar {
    background-color: #3b3f44;
    padding: 10px;
    height: 100%;
    img {
      height: 40px;
      margin-bottom: 20px;
    }
    .list {
      background-color: transparent;
    }
    .item {
      background-color: transparent;
      border: 0 !important;
      cursor: pointer;
      text-align: left;
    }
    .active,
    .item:hover {
      background-color: #545a61;
    }
  }
}
</style>