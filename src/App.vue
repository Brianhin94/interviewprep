<template>
  <main id="app">
    <b-container class="products-row">
      <div>
        <b-navbar class="rounded" toggleable="lg" type="dark" variant="info">
          <b-navbar-brand>ShopForce</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-text class="mr-2" ><strong> Product types: </strong> </b-nav-text>
    
              <b-nav-form>
                <b-select v-model="category" classname="size-sm">
                 <option value=""></option>
                  <option value="running">Running</option>
                  <option value="basketball">Basketball</option>
                  <option value="casual">Casual</option>
                </b-select>
                <b-row
                  v-for="product in filterProductsByCategory"
                  :key="product"
                >
                </b-row>
              </b-nav-form>

              <b-nav-item-dropdown text="Language" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">DE</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <template #button-content>
                  <em>Your Cart</em>
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
          cols="12" sm="2" md="4"
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
          category: "basketball",
          brand: "nike",
          style: "sport",
          src: require("./assets/blackbag.png"),
        },
        {
          title: "basic black shoe",
          color: "black",
          category: "basketball",
          brand: "basic",
          style: "sport",
          src: require("./assets/blackshoe.png"),
        },
        {
          title: "blue basic hat",
          color: "blue",
          category: "running",
          brand: "basic",
          style: "street",
          src: require("./assets/bluebag.png"),
        },
        {
          title: "blue nike hat",
          color: "blue",
          category: "casual",
          brand: "nike",
          style: "sport",
          src: require("./assets/bluehat.png"),
        },
        {
          title: "blue nike shoe",
          color: "blue",
          category: "running",
          brand: "nike",
          style: "streetwear",
          src: require("./assets/blueshoe.png"),
        },
        {
          title: "gray basic hat",
          color: "gray",
          category: "casual",
          brand: "nature",
          style: "hiking",
          src: require("./assets/grayhat.png"),
        },
        {
          title: "green nature bag",
          color: "green",
          category: "running",
          brand: "nature",
          style: "hiking",
          src: require("./assets/greenbag.png"),
        },
        {
          title: "green nature hat",
          color: "green",
          category: "casual",
          brand: "nature",
          info: "hiking",
          src: require("./assets/greenhat.png"),
        },
        {
          title: "pink nike shoe",
          color: "pink",
          category: "running",
          brand: "nike",
          style: "sport",
          src: require("./assets/pinkshoe.png"),
        },
        {
          title: "red basic bag",
          color: "red",
          category: "casual",
          brand: "basic",
          style: "streetwear",
          src: require("./assets/redbag.png"),
        },
        {
          title: "red mcdonalds visor",
          color: "red",
          category: "basketball",
          brand: "mcdonalds",
          style: "sport",
          src: require("./assets/redhat.png"),
        },
        {
          title: "red nike shoes",
          color: "red",
          category: "basketball",
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
