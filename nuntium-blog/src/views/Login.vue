<template>
  <div class="container">
    <div class="wrapper">
      <h4>Welcome back!</h4>
      <p>Sign in to get the most our of nuntium</p>
      <form class="d-flex flex-column needs-validation" novalidate>
        <input
          class="form-control"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          class="form-control"
          type="text"
          name="password"
          placeholder="Password"
        />
        <div class="option d-flex justify-content-between">
          <div class="check">
            <input type="checkbox" name="remember" id="remember" />
            <label>Remember me</label>
          </div>
          <a href="#" class="forgot">Forgot Password?</a>
        </div>
        <button @click="update">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    update() {
      this.$cookies.set('secret', true);
      // this.$router.go("/dashboard");
      this.$router.push('/dashboard');
      this.$router.go();
    },
  },
};
</script>

<style scoped lang="scss">
$text-color: #222;

* {
  color: $text-color;
}

.container {
  position: relative;
  height: 100%;
  width: 100%;
  .wrapper {
    width: 300px;
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
    h4 {
      font-weight: 600;
    }
    input {
      margin: 5px 0;
    }

    button {
      background-color: transparent;
      padding: 5px 0;
      border-radius: 5px;
      margin-top: 5px;
    }
    #remember {
      margin: 0px 5px;
    }
    button:hover {
      background-color: rgb(168, 167, 167);
    }
  }
}
</style>