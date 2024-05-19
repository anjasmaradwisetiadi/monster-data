
export const serverStore = {
    state:{
        listServer: {},
        detailServer: {},
        getEditServer: {},
        listServerBackup: {},
    },
    mutations: {
        mutateListServer(state, payload){
            state.listServer = payload;
        },
        mutateDetailServer(state, payload){
            state.detailServer = payload;
        },
        mutateGetEditServer(state,payload){
            state.getEditServer = payload;
        },
        mutateListBackupServer(state, payload){
            state.listServer = payload;
        },
    }, 
    getters:{
        getterListServer(state){
            return state.listServer;
        }, 

        getterDetailServer(state){
            return state.detailServer;
        }, 

        getterEditServer(state){
            return state.getEditServer;
        },

        getterListBackupServer(state){
            return state.listServerBackup;
        },
    }
}