import {collectionUrl} from '../../urlCollection';
import store from '../index';
import axios from 'axios';
import router from '../../routes';
import {defaultWrongMessage} from '../../utilize/utilize'

const urlBase = `${collectionUrl.baseUrlApi}`;

export const serverService = {
    async getListServer(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: 'get',
            url: `${urlBase}/schedule`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            console.log("response.data.data = ")
            console.log(response.data.data.data)
            store.commit('mutateListServer',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponseError', error.response.data.message); 
            store.commit('mutateResponseModal', defaultWrongMessage);
            store.commit('mutateModal', true)
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
    async detailServer(id){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: '',
            url: `${urlBase}/schedule/${id}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            store.commit('mutateDetailServer',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponseError', error.response.data.message); 
            store.commit('mutateResponseModal', defaultWrongMessage);
            store.commit('mutateModal', true)
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