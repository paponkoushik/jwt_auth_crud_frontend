import axios from "axios";

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters: {
        authenticated() {

        },

        user(state) {
            return state.user;
        }

    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER_INFO(state, data) {
            state.user = data;
        }
    },
    actions: {
        async login({ dispatch }, credentials) {
            let response = await axios.post('auth/login', credentials)
            return dispatch('attempt', response.data.token);
        },

        async attempt({commit}, token) {
            console.log(token);
            commit('SET_TOKEN', token);

            try {
               let user = await axios.get('auth/myself', {
                   headers: {
                       'Authorization': 'Bearer ' + token
                   }
               });
               commit('SET_USER_INFO', user.data);

            }catch (e){
                console.log('failed');
            }
        }
    }
}
