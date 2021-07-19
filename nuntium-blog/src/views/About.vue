<template>
  <div class="about container">
    <div class="header">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="main">
      <div class="up">
        <div class="item item-1">
          <div class="text">
            <h5>We tell stories that drives the heart.</h5>
            <p>
              A est nemo qui harum corporis. Quia molestias blanditiis eum
              nesciunt sint nihil. Quas ducimus repellat aut voluptas odit
              voluptate fugiat et cum. Occaecati quod reiciendis quam rerum.
              Alias nostrum quia autem ad est accusamus sit cum omnis. Minus
              nihil nisi labore est itaque. Eveniet est numquam aut quo numquam
              expedita qui.
            </p>
          </div>
          <div class="img img1"></div>
        </div>
        <div class="item item-2">
          <div class="img img2"></div>
          <div class="text">
            <h5>We tell stories that drives the heart.</h5>
            <p>
              A est nemo qui harum corporis. Quia molestias blanditiis eum
              nesciunt sint nihil. Quas ducimus repellat aut voluptas odit
              voluptate fugiat et cum. Occaecati quod reiciendis quam rerum.
              Alias nostrum quia autem ad est accusamus sit cum omnis. Minus
              nihil nisi labore est itaque. Eveniet est numquam aut quo numquam
              expedita qui.
            </p>
          </div>
        </div>
        <div class="item item-3">
          <div class="text">
            <h5>We tell stories that drives the heart.</h5>
            <p>
              A est nemo qui harum corporis. Quia molestias blanditiis eum
              nesciunt sint nihil. Quas ducimus repellat aut voluptas odit
              voluptate fugiat et cum. Occaecati quod reiciendis quam rerum.
              Alias nostrum quia autem ad est accusamus sit cum omnis. Minus
              nihil nisi labore est itaque. Eveniet est numquam aut quo numquam
              expedita qui.
            </p>
          </div>
          <div class="img img3"></div>
        </div>
      </div>
      <div class="down"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  height: 100%;

  .header {
    img {
      margin-bottom: 100px;
      width: 200px;
    }
  }

  .main {
    margin-bottom: 50px;
    .up {
      background-color: #1c1c1c;

      .item {
        @media screen and (max-width: 600px) {
          flex-direction: column !important;
          align-items: center;
          img {
            margin: 0 !important;
            height: 60vw;
            width: 60vw;
            min-height: 80px;
            min-width: 80px;
          }
          .text {
            height: 90%;
            width: 90%;
          }
        }
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 40px;
        .text {
          height: 60%;
          width: 60%;
          display: flex;
          flex-direction: column;

          h5 {
            font-family: serif;
            font-size: 21px;
            font-weight: 600;
          }

          p {
            font-size: 14px;
          }
        }

        .text * {
          color: #fff;
          text-align: left;
        }

        .img {
          height: 30vw;
          width: 30vw;
          background-size: cover;
          margin: 0 30px;
        }

        .img1 {
          background-image: url(../assets/images/ab1.jpg);
        }

        .img2 {
          background-image: url(../assets/images/ab2.jpg);
        }

        .img3 {
          background-image: url(../assets/images/ab3.jpg);
        }
      }
    }
  }
}
</style>
