import Login from "../components/Auth/Login";
import Products from "../components/Product/Products";
import AddProduct from "../components/Product/AddProduct";
import store from "../store/index"
import EditProduct from "../components/Product/EditProduct";

export const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.getters['Auth/authenticated']) {
                return next({
                    name: 'products'
                });
            }
            next();
        }
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
        beforeEnter: (to, from, next) => {
            if (!store.getters['Auth/authenticated']) {
                return next({
                    name: 'login'
                });
            }
            next();
        }
    },
    {
        path: '/add-products',
        name: 'add_product',
        component: AddProduct,
        beforeEnter: (to, from, next) => {
            if (!store.getters['Auth/authenticated']) {
                return next({
                    name: 'login'
                });
            }
            next();
        }
    },
    {
        path: '/edit-products/:id',
        name: 'edit_product',
        component: EditProduct ,
        beforeEnter: (to, from, next) => {
            if (!store.getters['Auth/authenticated']) {
                return next({
                    name: 'login'
                });
            }
            next();
        }
    },
]