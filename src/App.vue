<template>
  <main id="app">
    <b-container class="products-row">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
             <select v-model="category">
      <option value="bags">Bags</option>
      <option value="hats">Hats</option>
      <option value="shoes">Shoes</option>
    </select>
    <b-row v-for="product in filterProductsByCategory" :key="product"> </b-row>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">DE</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>Cart</em>
          </template>
          <b-dropdown-item href="#">Check my cart</b-dropdown-item>
          <b-dropdown-item href="#">Check my deals</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
      <b-row>
        <b-col
          cols="4"
          v-for="(product, index) in filterProductsByCategory"
          :key="index"
        >
          <Product :product="product" />
        </b-col>
      </b-row>
      
    </b-container>

    
  </main>
</template>


<script>
import Product from "./components/Product.vue";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      category: "",
      products: [
        {
          title: "black nike bag",
          color: "black",
          category: "bags",
          brand: "nike",
          style: "sport",
          src: require("./assets/blackbag.png"),
        },
        {
          title: "basic black shoe",
          color: "black",
          category: "shoes",
          brand: "basic",
          style: "sport",
          src: require("./assets/blackshoe.png"),
        },
        {
          title: "blue basic hat",
          color: "blue",
          category: "bags",
          brand: "basic",
          style: "street",
          src: require("./assets/bluebag.png"),
        },
        {
          title: "blue nike hat",
          color: "blue",
          category: "hats",
          brand: "nike",
          style: "sport",
          src: require("./assets/bluehat.png"),
        },
        {
          title: "blue nike shoe",
          color: "blue",
          category: "shoes",
          brand: "nike",
          style: "streetwear",
          src: require("./assets/blueshoe.png"),
        },
        {
          title: "gray basic hat",
          color: "gray",
          category: "hats",
          brand: "nature",
          style: "hiking",
          src: require("./assets/grayhat.png"),
        },
        {
          title: "green nature bag",
          color: "green",
          category: "bags",
          brand: "nature",
          style: "hiking",
          src: require("./assets/greenbag.png"),
        },
        {
          title: "green nature hat",
          color: "green",
          category: "hats",
          brand: "nature",
          info: "hiking",
          src: require("./assets/greenhat.png"),
        },
        {
          title: "pink nike shoe",
          color: "pink",
          category: "shoes",
          brand: "nike",
          style: "sport",
          src: require("./assets/pinkshoe.png"),
        },
        {
          title: "red basic bag",
          color: "red",
          category: "bags",
          brand: "basic",
          style: "streetwear",
          src: require("./assets/redbag.png"),
        },
        {
          title: "red mcdonalds visor",
          color: "red",
          category: "hats",
          brand: "mcdonalds",
          style: "sport",
          src: require("./assets/redhat.png"),
        },
        {
          title: "red nike shoes",
          color: "red",
          category: "shoes",
          brand: "nike",
          style: "sport",
          src: require("./assets/redshoe.png"),
        },
      ],
    };
  },
  computed: {
    filterProductsByCategory: function () {
      return this.products.filter(
        (Product) => !Product.category.indexOf(this.category)
      );
    },
  },
};
Vue.use(BootstrapVue);
</script>

<style>
body {
  font-family: "montseratt", sans-serif;
}
</style>
