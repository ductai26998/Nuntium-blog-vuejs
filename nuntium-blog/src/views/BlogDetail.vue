<template>
  <div class="blog">
    <div
      class="image"
      :style="{ backgroundImage: 'url(' + blog.image + ')' }"
    ></div>
    <div class="article container">
      <h3 class="title">{{ blog.title }}</h3>
      <p class="content">{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
  props: ["blogs"],
  data() {
    return {};
  },
  computed: {
    blog() {
      return this.blogs.find((item) => item.id == this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  .image {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .article {
    padding: 0 40px !important;
    h3 {
      font-weight: 600;
      margin: 20px;
    }
    p {
      text-align: left;
      text-align: justify;
    }
  }
}
</style>>
