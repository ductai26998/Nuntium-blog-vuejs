<template>
  <div class="container">
    <h4 class="title">Blogs</h4>
    <b-list-group class="blogs">
      <b-list-group-item
        @click="$router.push(/blogs/ + item.id)"
        class="blog-item"
        v-for="item in blogs"
        :key="item.id"
      >
        <img :src="item.image" alt="" />
        <div class="blog-info">
          <h5 class="author">{{item.author}}</h5>
          <h4>{{ item.title }}</h4>
          <h5 class="release">{{item.release.slice(0,10)}}</h5>
          <p>{{ item.sumary }}</p>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  props: ["blogs"],
  data() {
    return {};
  },
  components: {},
  computed: {},
};
</script>

<style lang="scss">
.container {
  .title {
    font-weight: 600;
    font-size: 23px;
    margin-bottom: 20px;
    font-family: serif;
    position: relative;
  }
  .title::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    border-radius: 5px;
    background-color: #222;
  }
  .blogs {
    margin: 40px;
    .blog-item {
      @media screen and (max-width: 460px) {
        flex-direction: column;
        align-items: center;
        img {
          margin: 0 !important;
          min-height: 80px;
          min-width: 80px;
        }
      }
      display: flex;
      flex-direction: row;
      cursor: pointer;
      border: 0;
      img {
        height: 25vw;
        width: 25vw;
        margin: 0px 20px 10px 0px;
      }

      .blog-info {
        text-align: left;
        padding: 10px;
        font-family: serif;
        h5 {
          font-weight: 400;
          color: #8d8d8d;
        }
        .author {
          font-size: 18px;
        }
        .release {
          font-size: 14px;
        }
        h4 {
          font-family: serif;
          font-weight: 550;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
