import {collectionUrl} from '../../urlCollection';
import store from '../index.js';
import axios from 'axios';
import router from '../../routes/index';
import {defaultWrongMessage} from '../../utilize/utilize.js'

const urlBase = `${collectionUrl.baseUrlApi}`;


export const authService = {
    async register(payload){
        store.state.loading = true;

        await axios({
            method: 'post',
            url: `${urlBase}/register`,
            data: payload,
        }).then(function(response){
            const itemSave = {
                name: response.data.data.name,
                email: response.data.data.email,
                phone: response.data.data.phone,
                token: response.data.data.token
            }
            const messageRegister = {
                title: 'Registration Success',
                message: 'Please check you email to activated your MonsterBackup Account.'
            }

            store.commit('mutateResponsAuth', itemSave);
            store.commit('mutateResponseModal', messageRegister);
            store.commit('mutateNameModalButton', 'Go to Login');
            store.commit('mutateModal', true);
            store.state.loading = false;
        })
        .catch(function(error) {
          store.commit('mutateResponseError', error.response.data.message); 
          store.commit('mutateResponseModal', defaultWrongMessage);
          store.commit('mutateModal', true);
          store.state.loading = false;
        })
    },

    async login(payload){
        store.state.loading = true;

        await axios({
            method: 'post',
            url: `${urlBase}/login`,
            data: payload,
        })
        .then(function(response){
            const itemSave = {
                name: response.data.data.name,
                email:response.data.data.email,
                phone: response.data.data.phone,
                token: response.data.data.token
            }
            const messageLogin = {
                title: 'Login Success',
                message: 'You will redirect to dashboard MonsterBackup'
            }
            localStorage.setItem('user', JSON.stringify(itemSave));

            store.commit('mutateResponsAuth', itemSave);
            store.commit('mutateResponseModal', messageLogin);
            store.commit('mutateNameModalButton', 'Go to dashboard');
            store.commit('mutateModal', true);
            store.state.loading = false;
        })
        .catch(function(error) {
          store.commit('mutateResponseError', error.response.data.message); 
          store.commit('mutateResponseModal', defaultWrongMessage);
          store.commit('mutateModal', true);
          store.state.loading = false;
        })
    },

    async logout(payload){
        const tokenAuth = JSON.parse(localStorage?.getItem('user'));
        await axios({
            method: 'post',
            url: `${urlBase}/logout`,
            data: payload,
            headers:{
                'Authorization': `Bearer ${tokenAuth}`
              },
        })
        .then(function(response){
            localStorage.removeItem('user');
            store.state.responseAuth = {};
            router.push('/login');

            store.state.loading = false;
        })
        .catch(function(error) {
          store.commit('mutateResponsAuth', error.message); 
          store.state.loading = false;
        })
    },

    autoLogin(){
        const getUser = localStorage.getItem('user');

        if(getUser){
          const getUserParse = JSON.parse(getUser);
          store.commit('mutateResponsAuth', getUserParse); 
        }
    },
}