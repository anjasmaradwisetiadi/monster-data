import {collectionUrl} from '../../urlCollection';
import store from '../index.js';
import axios from 'axios';
import router from '../../routes/index';

const urlCounterStyle = `${collectionUrl.baseUrlApi}`;


export const authService = {
    async register(payload){

    },

    async login(payload){
        store.state.loading = true;

        await axios({
            method: 'post',
            url: `${urlCounterStyle}/login`,
            data: payload,
        })
        .then(function(response){
            store.state.loading = false;
            if(response.data.status){
                const itemSave = {
                  name: response.data.data.name,
                  email:response.data.data.email,
                  phone: response.data.data.phone,
                  token: response.data.data.token
                }
                store.commit('mutateResponsAuth', itemSave);
                localStorage.setItem('user', JSON.stringify(itemSave));
                router.push('/schedule');
            } else {
                store.commit('mutateResponsAuth', response.data);
            }
        })
        .catch(function(error) {
          store.commit('mutateResponsAuth', error.message); 
          store.state.loading = false;
        })
    },

    async logout(){

    },
}