
export const authStore = {
    state:{
        responseAuth:null,
        payloadEx:null,
    },
    mutations: {
        //********** */ login, register, logout need explode file
        mutateResponsAuth(state, payload){
            state.responseAuth = payload;
        },
        mutateEx(state, payload){
            state.payloadEx = payload;
        }
    }, 
    getters:{
        getterResponseAuth(state){
            return state.responseAuth;
        },
    }
}