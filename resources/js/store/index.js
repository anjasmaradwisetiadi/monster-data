import { createStore } from 'vuex';
import {collectionUrl} from '../urlCollection';
import {authStore} from './auth/authStore';
import {serverStore} from './server/serverStore';
import axios from 'axios';
import router from '../routes/index';

const urlCounterStyle = `${collectionUrl.baseUrlApi}`;
let getLocalStorage = {};

const store = createStore({
    modules:{
        authStore,
        serverStore
    },

    state:{
        loading: false,
        error: '',
        modal: false,
        responseGeneral: null,
    },

    mutations:{
        mutateModal(state, payload){
            state.modal = payload;
        },
        mutateResponseModal(state, payload){
            state.responseGeneral = payload 
        }
    },
    actions:{

    }, 
    getters:{
        getterResponseGeneral(state){
            return state.responseGeneral;
        },
        // it need getter for loading because when read action "getListCounterStyle()" always true not false
        getterStateLoading(state){
            return state.loading;
        },

        getterStateModal(state){
            return state.modal;
        },
    }
})

export default store;