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
        responseGeneral: null,
        modal: false,
        // modal frame
        responseModal: null,
        nameModalButton: 'Ok',
        confirmModal: false,
        responseError: null,
        // modal Global
        modalGlobal: false,
        responseModalGlobal: null,
        nameModalButtonGlobal: 'Ok',
        confirmModalGlobal: false,
    },

    mutations:{
        mutateModal(state, payload){
            state.modal = payload;
        },
        // modal frame
        mutateResponseModal(state, payload){
            state.responseModal = payload 
        },
        mutateNameModalButton(state, payload){
            state.nameModalButton = payload 
        },
        mutateConfirmModal(state, payload){
            state.confirmModal = payload  
        },
        muatateresponseGeneral(state, payload){
            state.responseGeneral = payload 
        },
        mutateResponseError(state, payload){
            state.responseError = payload 
        },
        // modal Global
        mutateModalGlobal(state, payload){
            state.modalGlobal = payload;
        },
        mutateResponseModalGlobal(state, payload){
            state.responseModalGlobal = payload 
        },
        mutateNameModalButtonGlobal(state, payload){
            state.nameModalButtonGlobal = payload 
        },
        mutateConfirmModalGlobal(state, payload){
            state.confirmModalGlobal = payload  
        },
    },
    actions:{

    }, 
    getters:{
        getterResponseGeneral(state){
            return state.responseGeneral;
        },

        getterResponseError(state){
            return state.responseError;
        },
        // it need getter for loading because when read action "getListCounterStyle()" always true not false
        getterStateLoading(state){
            return state.loading;
        },

        // modal frame
        getterStateModal(state){
            return state.modal;
        },

        getterNameModalButton(state){
            return state.nameModalButton;
        },

        getterResponseModal(state){
            return state.responseModal;
        },

        // modal Global
        getterStateModalGlobal(state){
            return state.modalGlobal;
        },

        getterNameModalButtonGlobal(state){
            return state.nameModalButtonGlobal;
        },

        getterResponseModalGlobal(state){
            return state.responseModalGlobal;
        },
    }
})

export default store;