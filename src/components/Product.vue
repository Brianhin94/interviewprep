<template>
  <b-card
    :title="product.title"
    :img-src="product.src"
    img-alt="Image"
    tag="article"
    class="mb-2 mt-2"
  >
    <b-card-text> </b-card-text>
    <b-button href="#" variant="primary">Add to cart</b-button>
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
  background: cornflowerblue
}
</style>