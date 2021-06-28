<template>
  <div class="container">
    <h5>Tags:</h5>
    <div class="tags">
      <span class="tag-item"><a href="#"> #fashion</a></span>
      <span class="tag-item"><a href="#"> #games</a></span>
      <span class="tag-item"><a href="#"> #music</a></span>
      <span class="tag-item"><a href="#"> #aucostic</a></span>
      <span class="tag-item"><a href="#"> #films</a></span>
      <span class="tag-item"><a href="#"> #computers</a></span>
      <span class="tag-item"><a href="#"> #web</a></span>
      <span class="tag-item"><a href="#"> #artifical</a></span>
      <span class="tag-item"><a href="#"> #history</a></span>
      <span class="tag-item"><a href="#"> #machinelearning</a></span>
      <span class="tag-item"><a href="#"> #love</a></span>
      <span class="tag-item"><a href="#"> #human</a></span>
      <span class="tag-item"><a href="#"> #environment</a></span>
      <span class="tag-item"><a href="#"> #trees</a></span>
      <span class="tag-item"><a href="#"> #baby</a></span>
      <span class="tag-item"><a href="#"> #grandma</a></span>
      <span class="tag-item"><a href="#"> #friend</a></span>
    </div>
  </div>
</template>

<script>
export default {};
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

.container {
  padding: 20px;
  word-wrap: break-word;
  h5 {
    text-align: left;
  }
  .tags {
    .tag-item {
      display: inline-flex;
      border: 1px solid #222;
      border-radius: 30px;
      padding: 5px;
      margin: 5px;
    }
  }
}
</style>