import {collectionUrl} from '../../utilize/urlCollection';
import store from '../index';
import axios from 'axios';
import router from '../../routes';

const urlBase = `${collectionUrl.baseUrlApi}`;

export const serverService = {
    async getListServer(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: '',
            url: `${urlBase}`,
            headers:{
              'Content-Type': "multipart/form-data",
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            // store.commit('mutateListPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            // store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },
    async createServer(payload){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: '',
            url: `${urlBase}`,
            headers:{
              'Content-Type': "multipart/form-data",
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            // store.commit('mutateListPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            // store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },
    async detailServer(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: '',
            url: `${urlBase}`,
            headers:{
              'Content-Type': "multipart/form-data",
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            // store.commit('mutateListPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            // store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },
    async getEditServer(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: '',
            url: `${urlBase}`,
            headers:{
              'Content-Type': "multipart/form-data",
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            // store.commit('mutateListPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            // store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },

    async deleteServer(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: '',
            url: `${urlBase}`,
            headers:{
              'Content-Type': "multipart/form-data",
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            // store.commit('mutateListPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            // store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },

    async getListServerBackup(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: '',
            url: `${urlBase}`,
            headers:{
              'Content-Type': "multipart/form-data",
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            // store.commit('mutateListPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            // store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },
}