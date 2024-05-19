
export const authStore = {
    state:{
        responseAuth:{},
    },
    mutations: {
        //********** */ login, register, logout need explode file
        mutateResponsAuth(state, payload){
            state.responseAuth = payload;
        },
    }, 
    getters:{

        getterResponseAuth(state){
            return state.responseAuth;
        }, 
      
    }
}