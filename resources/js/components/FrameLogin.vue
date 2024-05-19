<template>
    <div id="FrameLogin" class="flex min-h-screen flex-col justify-center">
            <!-- start navbar -->
            <nav class="lg:px-16 px-6 bg-white shadow-lg flex flex-wrap items-center py-3">
                <div class="flex-1 flex justify-between items-center">

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
                    <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                        <li class="py-2 lg:py-0 ">
                            <button
                                v-if="paramsUrlSlug === 'login'"
                                @click="contactUs()"
                                type="submit" class="flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-md hover:bg-stone-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border">
                                Don’t have an Account ? <span class="text-blue-700 font-semibold pl-2"> Contact Us</span> 
                            </button>
                            <button 
                                v-if="paramsUrlSlug !== 'login'"
                                @click="login()"
                                type="submit" class="flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-md hover:bg-stone-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border">
                                Have an Account ? <span class="text-blue-700 font-semibold pl-2"> Login</span> 
                            </button>
                        </li>
                    </ul>
                </nav>
                </div>
            </nav>
            <!-- end navbar -->
            <slot name="content-form">

            </slot>
            <!-- start footer -->
            <footer class="background-footer">
                <div class="flex flex-row w-full px-6 lg:px-8">
                    <div class="w-1/2 flex-end">
                        <span class="text-slate-400 text-xs">
                            Powered by
                        </span>
                        <h5 class="text-slate-400 text-lg">
                            Monster Data
                        </h5>
                    </div>
                    <div class="w-1/2 text-right flex-end">
                        <span class="text-slate-400 text-xs">
                            V 1.3 Latest Update : August 17, 2023
                        </span>
                    </div>
                </div>
            </footer>
            <!-- end footer -->
    </div>
</template>
<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import {authService} from '../store/auth/authService';

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const dummySpesificLogin = 'login';
let paramsUrlSlug = ref('login');

const state = reactive({
    paramsUrlSlug
})

onMounted(()=>{
    const paramsRoute = router.currentRoute.value.path;
    state.paramsUrlSlug = paramsRoute.replace('/','');
    authService.autoLogin();
})

function contactUs(){
    console.log("contactUs")
}
function login(){
    router.push('/login')
}
</script>

<style scoped>
    .background-footer{
        background-image: url("../../assets/image/background.png");
        /* background-repeat: no-repeat; */
        background-position: right top;
        height: 16rem;
        width: auto;
        display: flex;
    }

    .flex-end{
        align-self: flex-end;
    }

</style>