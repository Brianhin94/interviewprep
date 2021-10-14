<template>
  <b-card
    :title="product.title"
    :img-src="product.src"
    img-alt="Image"
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "product",
  props: ["product"],
};
</script>

<style>
.card-img {
  width: 100% !important;
  height: 200px !important;
  object-fit: cover !important;
  background: red;
}
</style>