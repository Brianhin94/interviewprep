<template>
  <main id="app">
      <select v-model="category">
            <option value="bags">Bags</option>
            <option value="shoes">Hats</option>
            <option value="shoes">Shoes</option>
        </select> 
        <ul>
            <li v-for="product in filterProductByCategory" :key="product">Product Name : {{product.name}} - type ({{product.category}})</li>
        </ul>
    <b-container class="products-row">
      <b-row>
        <b-col cols="4" v-for="(product, index) in products" :key="index">
          <!-- <b-row v-if="index % 4 == 0"> -->
          <!-- <b-col cols="4"> -->
          <Product :product="product" />
        
          
        </b-col>
        <!-- </b-row> -->
      </b-row>
    </b-container>
  </main>
</template>


<script>
import Product from "./components/Product.vue";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      category: '',
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
         computed: {
            filterProductsByCategory: function(){
                return this.products.filter(product => !product.category.indexOf(this.category))
            }
        }
    };
  },
};
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
</script>

<style>
body {
  font-family: "montseratt", sans-serif;
}
</style>
