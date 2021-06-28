<template>
  <div class="container">
    <h5 class="d-flex justify-content-between">
      <span>Dashboard</span>
      <button>Customize</button>
    </h5>
    <div class="statistic d-flex justify-content-between">
      <div class="feature points">
        <p>Total Points</p>
        <div>214</div>
      </div>
      <div class="feature iews">
        <p>Total Views</p>
        <div>130K</div>
      </div>
      <div class="feature most-article">
        <p>Most Viewed Article</p>
        <div>The Most Awesome Article Man Has Ever Written</div>
      </div>
    </div>
    <div class="total-views">
      <h5>Total Views</h5>
      <img src="@/assets/chart.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  h5 {
    font-weight: 400;
    font-size: 17px;
    button {
      border-radius: 5px;
      border: 1.5px solid;
      background-color: transparent;
    }
  }
  .statistic {
    margin: 20px 0;
    .feature {
      border-radius: 5px;
      border: 1px solid;
      padding: 5px 20px;

      p {
        font-size: 14px;
        text-align: left;
      }
      div {
        font-weight: 600;
        font-size: 19px;
      }
    }
  }
  .total-views {
  }
}
</style>
