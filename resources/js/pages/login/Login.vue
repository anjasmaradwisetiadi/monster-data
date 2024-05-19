<template>
    <div id="Login" class="">
            <!-- start slot navbar -->
            <FrameLogin>
                <template #content-form>
                    <!-- start content form -->
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm px-6 lg:px-8 pt-2">
                        <h4 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h4>
                        <p class="text-slate-400"> Enter your email and password to login to Monster Backup Dashboard</p>
                    </div>

                    <div class="flex-grow mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div class="space-y-6">
                            <div class="flex flex-row">
                                <div class="w-2/5">
                                    <!-- <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> -->
                                    <label for="email" class="block text-right text-sm font-medium leading-7 text-gray-900 px-4 py-1.5">Email </label>
                                </div> 
                                <div class="w-3/5">
                                    <input id="email" name="email" type="email" autocomplete="email" required 
                                        placeholder="Your Email Address"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                        v-model="email"
                                    >
                                    <p 
                                        v-if="responseError?.email"
                                        class="text-red-500 text-xs italic">{{responseError?.email[0]}}</p>
                                </div>
                            </div> 
                            <div class="flex flex-row">
                                <div class="w-2/5">
                                    <label for="password" class="block text-right text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >Password</label>
                                </div>
                                <div class="w-3/5">
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        autocomplete="current-password" 
                                        required 
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                        placeholder="Minimal 8 character"
                                        v-model="password"
                                    >
                                    <p 
                                        v-if="responseError?.password"
                                        class="text-red-500 text-xs italic">{{responseError?.password[0]}}</p>
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button type="submit" @click="submit()" class="flex w-2/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </div>
                    </div>
                    <!-- end content form -->
                </template>
            </FrameLogin>
            <LoadingAndAlert 
                :loading="loading" 
                :isOpenModal="isOpenModal"
                :confirmButton="nameModalButton"  
                :isConfirmModal="isConfirmModal"  
                @isOpenModelClose="isOpenModelClose"
                :responseModal="responseModal" 
            >
            </LoadingAndAlert>
            <!-- start footer footer -->
            <!-- <ExampleComponentTwo ></ExampleComponentTwo> -->
    </div>
</template>
<script setup >
import { ref, reactive, computed, onMounted, onBeforeMount, watch } from 'vue';
import  FrameLogin from '../../components/FrameLogin.vue';
import LoadingAndAlert from '../../components/LoadingAndAlert.vue';
import {authService} from '../../store/auth/authService';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

let email = ref('');
let password = ref('');
let confirmButton = ref('');
let denyButton = ref('');
let routeLogin = ref(null);
// let isOpenModal = ref(false);

const loading = computed(()=>{
    return store.getters.getterStateLoading;
})
const responseGeneral = computed (()=>{
    return store.getters.getterResponseGeneral;
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

const responseAuth = computed (()=>{
    return store.getters.getterResponseAuth;
})

const isOpenModal = computed(()=>{
    return store.getters.getterStateModal;
})

watch(responseAuth, async (newValue, oldValue)=>{
    routeLogin= newValue;
})



function submit(){
    const payload={
        'email': email.value,
        'password': password.value,
    };
    authService.login(payload);
}


function isOpenModelClose($event){
    store.commit('mutateModal', false)
    store.commit('mutateResponseModal', null)
    if(routeLogin?.email){
        router.push('/schedule')
    }

}

</script>

<style scoped>

</style>