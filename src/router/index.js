import Login from "../components/Auth/Login";
import Products from "../components/Product/Products";
import AddProduct from "../components/Product/AddProduct";

export const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/products', name: 'products', component: Products },
    { path: '/add-products', name: 'add_product', component: AddProduct },
]