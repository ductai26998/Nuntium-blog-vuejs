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
          <h4>{{ item.title }}</h4>
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
    return {
      // blogs: [
      //   {
      //     title: "Fantastic Concrete Tuna",
      //     sumary: "Minima soluta maxime.",
      //     image: "http://placeimg.com/640/480/city",
      //     id: "1",
      //   },
      //   {
      //     title: "Tasty Plastic Soap",
      //     sumary: "Excepturi error impedit ut ea illo dicta placeat dolor.",
      //     image: "http://placeimg.com/640/480/fashion",
      //     id: "2",
      //   },
      //   {
      //     title: "Practical Steel Tuna",
      //     sumary: "Quisquam id soluta molestiae.",
      //     image: "http://placeimg.com/640/480/cats",
      //     id: "3",
      //   },
      //   {
      //     title: "Sleek Steel Table",
      //     sumary: "Soluta unde aliquid mollitia.",
      //     image: "http://placeimg.com/640/480/animals",
      //     id: "4",
      //   },
      //   {
      //     title: "Fantastic Cotton Keyboard",
      //     sumary:
      //       "Ut rerum rerum veritatis recusandae quisquam vel eos quo velit.",
      //     image: "http://placeimg.com/640/480/technics",
      //     id: "5",
      //   },
      //   {
      //     title: "Tasty Steel Fish",
      //     sumary: "Dolorem iste saepe earum aut.",
      //     image: "http://placeimg.com/640/480/transport",
      //     id: "6",
      //   },
      //   {
      //     title: "Gorgeous Concrete Soap",
      //     sumary: "Quia iure sit ut reiciendis enim.",
      //     image: "http://placeimg.com/640/480/abstract",
      //     id: "7",
      //   },
      //   {
      //     title: "Handcrafted Soft Mouse",
      //     sumary: "Quia recusandae aliquam sed quis voluptate quidem.",
      //     image: "http://placeimg.com/640/480/cats",
      //     id: "8",
      //   },
      //   {
      //     title: "Licensed Granite Hat",
      //     sumary: "Et minus assumenda nostrum aliquid.",
      //     image: "http://placeimg.com/640/480/technics",
      //     id: "9",
      //   },
      //   {
      //     title: "Unbranded Plastic Computer",
      //     sumary: "Nam sint sed accusantium iste placeat et consequatur et.",
      //     image: "http://placeimg.com/640/480/nightlife",
      //     id: "10",
      //   },
      //   {
      //     title: "Gorgeous Wooden Shirt",
      //     sumary: "Sapiente ut sequi ipsam ut earum nostrum voluptas.",
      //     image: "http://placeimg.com/640/480/technics",
      //     id: "11",
      //   },
      //   {
      //     title: "Incredible Rubber Chips",
      //     sumary: "Nihil quaerat ullam odit corporis fugit quaerat accusamus.",
      //     image: "http://placeimg.com/640/480/animals",
      //     id: "12",
      //   },
      //   {
      //     title: "Intelligent Fresh Computer",
      //     sumary: "Dolores nemo autem modi esse.",
      //     image: "http://placeimg.com/640/480/cats",
      //     id: "13",
      //   },
      //   {
      //     title: "Rustic Plastic Bacon",
      //     sumary:
      //       "Consectetur recusandae fuga ea voluptates corrupti laborum odio.",
      //     image: "http://placeimg.com/640/480/cats",
      //     id: "14",
      //   },
      // ],
    };
  },
  components: {},
  computed: {

  },
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
        h4 {
          font-weight: 550;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
