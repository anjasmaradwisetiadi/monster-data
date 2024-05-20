import {collectionUrl} from '../../urlCollection';
import store from '../index';
import axios from 'axios';
import router from '../../routes';
import {defaultWrongMessage} from '../../utilize/utilize'

const urlBase = `${collectionUrl.baseUrlApi}`;

const reuseFunction ={
    resetModal(){
        store.commit('mutateResponseModalGlobal', null);
        store.commit('mutateNameModalButtonGlobal', 'Ok');
        store.commit('mutateModalGlobal', false);
    },

    defaultHandlingError(error){
        store.commit('mutateResponseError', error.response.data.message); 
        store.commit('mutateResponseModalGlobal', defaultWrongMessage);
        store.commit('mutateModalGlobal', true)
    },
}
export const serverService = {

    async getListServer(){
        reuseFunction.resetModal();
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
            store.commit('mutateListServer',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            reuseFunction.defaultHandlingError(error)
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
    async detailServer(slug){
        reuseFunction.resetModal();
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: 'get',
            url: `${urlBase}/schedule/${slug}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            store.commit('mutateDetailServer',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            reuseFunction.defaultHandlingError(error)
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

    confirmDelete(){
        const messageDelete = {
            title: 'Delete confirm',
            message: 'Are you sure want delete ?'
        }
        store.commit('mutateResponseModalGlobal', messageDelete);
        store.commit('mutateModalGlobal', true);
    },

    async deleteServer(slug){
        reuseFunction.resetModal();

        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: 'delete',
            url: `${urlBase}/schedule/${slug}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            // store.commit('mutateListPlayStyle',response.data);
            router.push('/schedule');
            const messageDelete = {
                title: 'Delete Success',
                message: 'You will redirect to dashboard MonsterBackup'
            }
            store.commit('mutateResponseModalGlobal', messageDelete);
            store.commit('mutateNameModalButtonGlobal', 'Go to dashboard');
            store.commit('mutateModalGlobal', true);
            store.state.loading = false;
        })
        .catch(function(error) {
            // reuseFunction.defaultHandlingError(error);
            store.state.loading = false;
        })
    },

    async getListServerBackup(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        await axios({
            method: 'get',
            url: `${urlBase}/schedule-backup`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            store.commit('mutateListBackupServer',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            reuseFunction.defaultHandlingError(error);
            store.state.loading = false;
        })
    },
}