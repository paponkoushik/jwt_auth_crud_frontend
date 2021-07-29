<template>
  <div class="container">
    <div class="mt-5">
      <div class="card">
        <div class="card-header text-center">Edit Product</div>
        <div class="card-body">
          <div class="alert alert-success" role="alert" v-if="alert">
            {{alert}}
          </div>
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
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Image</label>
              <div class="col-sm-10">
                <input type="file" class="form-control-file" accept="image/*" placeholder="Description" @change="addImage" />
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-outline-primary float-right" @click.prevent="update">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import {formDataAssigner} from "../../helpers/helper";

export default {
  name: "EditProduct",
  data() {
    return {
      product: {},
      alert: '',
      image: '',
      errors: [],
    }
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios.get('product/show/' + this.$route.params.id).then(({data}) =>{
        this.product = data;
      }).catch(()=>{
      })
    },
    update() {
      // let formData = formDataAssigner(new FormData, this.product);

      // if (this.image) {
      //   formData.append('image', this.image)
      // }

      axios.patch('product/update/' + this.product.id, this.product).then(({data}) => {
        this.alert = data;

        setTimeout(() => {
          this.alert = '';
          this.$router.push('/products');
        }, 2000);

      }).catch(({response}) => {
        this.errors = response.data.errors;
      })
    },
    addImage(item) {
      this.image = item.target.files[0];
    }
  }
}
</script>

<style scoped>

</style>