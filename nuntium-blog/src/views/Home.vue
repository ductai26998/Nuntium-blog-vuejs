<template>
  <div class="home">
    <div
      class="header"
      :style="{ backgroundImage: 'url(' + blogs[0].image + ')' }"
    ></div>
    <div class="main container">
      <b-list-group class="blogs">
        <h4 class="title">What's new</h4>
        <b-list-group-item
          @click="$router.push(/blogs/ + item.id)"
          class="blog-item"
          v-for="item in blogs"
          :key="item.id"
        >
          <img :src="item.image" alt="" />
          <div class="blog-info">
            <h5 class="author">{{ item.author }}</h5>
            <h4>{{ item.title }}</h4>
            <h5 class="release">{{ item.release }}</h5>
            <p>{{ item.sumary }}</p>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["blogs"],
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  .header {
    width: 100%;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
