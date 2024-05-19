<template>
    <div id="FrameLogin" class="flex flex-col min-h-screen">
            <!-- start navbar -->
            <nav class="lg:px-16 px-6 bg-white z-10 shadow-lg flex flex-wrap items-center py-1 sticky top-0">
                <div class="flex-1 flex justify-between items-center">
                    <div v-if="paramsUrlSlug === 'schedule'">
                        <h2 class="text-3xl font-bold text-blue-primary py-2">Schedule</h2>
                    </div>
                    <div v-if="paramsUrlSlug !== 'schedule'">
                        <div class="flex">
                            <span 
                                @click="back()"
                                class="material-icons border-slate-300 rounded-full border p-3 cursor-pointer mr-4" style="font-size: 20px">
                                chevron_left
                            </span>
                            <div class="block">
                                <div class="text-xs">
                                    Schedule View
                                </div>
                                <div class="flex flex-end">
                                    <h2 class="text-2xl font-bold text-blue-primary"> Postgre SQL </h2>
                                    <span class="flex-end text-xs font-medium bg-emerald-200 py-1 px-3 rounded-full ml-3">Running...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <label for="menu-toggle" class="cursor-pointer lg:hidden block">
                    <svg
                        class="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />
                <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                        <li class="py-2 lg:py-0 pl-6 ">
                            <a
                                class="hover:pb-4 hover:border-b-4 hover:border-blue-primary"
                                href="#"
                                >
                                Support
                            </a>
                        </li>
                        <li class="py-2 lg:py-0 pl-6">
                            <a
                                class="hover:pb-4 hover:border-b-4 hover:border-blue-primary"
                                href="#"
                                >
                                Documentation
                            </a>
                        </li>
                        <li class="py-2 lg:py-0 pl-6">
                            <a  
                                class="hover:pb-4 hover:border-b-4 hover:border-blue-primary"
                                href="#"
                                @click="logout()"
                                >
                                Logout
                            </a>
                        </li>
                        <li class="flex py-2 lg:py-0 pl-12">
                            <div class="">
                                <img class="h-10 w-10 rounded-full" src="../../assets/image/user.png" alt="user" />
                            </div>
                            <div class="block text-left pl-4">
                                <div class="text-base">
                                    {{nameUser}}
                                </div>
                                <div class="text-xs text-slate-400">
                                    {{ emailUser }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                </div>
            </nav>
            <!-- end navbar -->
            <main class="flex-1 relative h-screen">
                <slot name="content-form">

                </slot>
            </main>
            <!-- start footer -->
            <footer class="background-footer">
                <div class="flex flex-row w-full px-6 lg:px-8">
                    <div class="w-full flex-end">
                        <span class="text-slate-400 text-sm ">
                            Version 1.3
                        </span>
                        <h5 class="text-slate-400 mt-4">
                            <span class="text-slate-400 text-xs block">
                                Last Update:
                            </span>
                            <span class="text-lg">
                                August 17, 2023
                            </span>
                        </h5>
                    </div>
                </div>
            </footer>
            <!-- end footer -->
            <LoadingAndAlert 
                :loading="loading" 
                :isOpenModal="isOpenModal"
                :confirmButton="nameModalButton"  
                :isConfirmModal="isConfirmModal"  
                @isOpenModelClose="isOpenModelClose"
                :responseModal="responseModal" 
            >
            </LoadingAndAlert>
    </div>
</template>
<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import {authService} from '../store/auth/authService';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import LoadingAndAlert from './LoadingAndAlert.vue';


const store = useStore();
const router = useRouter();
const dummySpesificHeader = 'dashboard/detail';
let paramsUrlSlug = ref('dashboard');
let nameUser = ref('');
let emailUser = ref('');
let isConfirmModal = ref('');

const state = reactive({
    paramsUrlSlug
})

const loading = computed(()=>{
    return store.getters.getterStateLoading;
})
const responseAuth = computed(()=>{
    return store?.getters?.getterResponseAuth;
})
const responseModal = computed (()=>{
    return store.getters.getterResponseModal;
})

const nameModalButton = computed(()=>{
    return store.getters.getterNameModalButton;
})

const responseError = computed (()=>{
    return store.getters.getterResponseError;
})

let isOpenModal = computed(()=>{
    return store.getters.getterStateModal;
})


onMounted(()=>{
    const paramsRoute = router.currentRoute.value.path;
    state.paramsUrlSlug = paramsRoute.replace('/','');

    authService.autoLogin();
    const getUser = JSON.parse(localStorage.getItem('user'));
    nameUser.value = getUser.name;
    emailUser.value = getUser.name

})

function logout(){
    authService.confirmLogout();
    isConfirmModal.value = true;
}

function isOpenModelClose($event){
    store.commit('mutateModal', false)
    store.commit('mutateResponseModal', null)
    if($event.value){
        const auth = JSON.parse(localStorage?.getItem('user'));
        const payload={
            email: auth.email
        }
        isConfirmModal.value = false;
        authService.logout(payload);
    }
}

function back(){
    this.router.go(-1)
}

</script>

<style scoped>

    .background-footer{
        background-image: url("../../assets/image/background_smooth.png");
        background-repeat: no-repeat;
        background-position: right top;
        height: 16rem;
        width: auto;
        display: flex;
    }

    .flex-end{
        align-self: flex-end;
    }
</style>