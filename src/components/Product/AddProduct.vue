<template>
  <div class="container">
    <div class="mt-5">
      <div class="alert alert-success" role="alert" v-if="alert">
        {{alert}}
      </div>
      <div class="card">
        <div class="card-header text-center">Add Product</div>
        <div class="card-body">
          <form>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Product name" v-model="product.title">
                <small class="text-danger" v-if="errors.title">{{errors.title[0]}}</small>
              </div>

            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">price</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="price" v-model="product.price">
                <small class="text-danger" v-if="errors.price">{{errors.price[0]}}</small>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Description</label>
              <div class="col-sm-10">
                <textarea type="text" class="form-control" placeholder="Description" v-model="product.description"></textarea>
                <small class="text-danger" v-if="errors.price">{{errors.description[0]}}</small>
              </div>
            </div>
<!--            <div class="form-group row">-->
<!--              <label class="col-sm-2 col-form-label">Image</label>-->
<!--              <div class="col-sm-10">-->
<!--                <input type="file" class="form-control-file" accept="image/*" placeholder="Description" @change="addImage" />-->
<!--              </div>-->
<!--            </div>-->
            <div class="form-group">
              <button class="btn btn-outline-primary" @click.prevent="submit">Save</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        title: '',
        price: '',
        description: '',
      },
      image: '',
      alert: '',
      errors: [],
    }
  },
  methods: {
    submit() {
      axios.post('product/store', this.product).then(response => {

        this.alert = response.data;

        this.resetForm();

        setTimeout(() => {
          this.alert = '';
        }, 2000);

      }).catch(({response}) =>{
        this.errors = response.data.errors;
      })
    },
    resetForm() {
      this.product = {
        title: '',
        price: '',
        description: '',
      }
      this.image = '';
    },
  }
}
</script>

<style scoped>

</style>