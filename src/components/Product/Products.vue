<template>
  <div class="container">
    <div class="mt-5">
      <div class="alert alert-success" role="alert" v-if="alert">
        {{alert}}
      </div>
      <div class="card">
        <div class="card-header text-center">Products</div>
        <div class="card-body">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody  v-if="products.length">
            <tr v-for="(product,index) in products" :key="index">
              <td>{{product.title}}</td>
              <td>{{product.description}}</td>
              <td>{{product.price}}</td>
              <td>
                <img v-if="product.image" :src="`${$appURL + product.image}`" width="80" height="50"/>
              </td>
              <td>
                <router-link :to="`/edit-products/${product.id}`" class="btn btn-outline-primary ml-2">Edit</router-link>
                <button class="btn btn-outline-danger ml-2" @click.prevent="deleteProduct(product)">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      alert:'',
    }
  },
  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      axios.get('product/index').then(({data}) =>{
        this.products = data;
      }).catch(()=>{
      })
    },

    deleteProduct(product) {
      axios.delete('product/delete/' + product.id).then((response) => {

        this.alert = response.data;

        this.getProducts();

        setTimeout(() => {
          this.alert = '';
        }, 2500);

      }).catch(() => {

      })
    },
  }

}
</script>

<style scoped>

</style>