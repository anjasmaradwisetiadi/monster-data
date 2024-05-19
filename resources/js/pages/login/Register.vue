<template>
    <div id="Register">
        <FrameLogin>
            <template #content-form>
                <!-- start content form -->
                <div class="flex flex-row sm:mx-auto sm:w-full sm:max-w-sm px-6 lg:px-8 pt-2 mt-6">
                    <div class="w-1/5 flex self-center">
                        <div class="flex flex-row">
                            <span 
                                class="material-icons border-black rounded-full border-2 p-1 cursor-pointer" 
                                style="font-size: 14px"
                            >   
                                arrow_back
                            </span>
                            <span class="pl-2 font-medium text-md">
                                Back
                            </span>
                        </div>
                    </div>
                    <div class="w-4/5 text-center">
                        <h2 class="text-3xl font-bold leading-9 tracking-tight text-blue-primary">Registration</h2>
                    </div>
                </div>

                <div class="flex-grow mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div class="flex w-full justify-center mb-5">
                        <h3 class="text-xl text-blue-primary">Tell us about you</h3>
                    </div>
                    <div class="space-y-6">
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="name" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >Name</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    v-model="name"
                                    id="name" 
                                    name="name" 
                                    autocomplete="username"
                                    type="text" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="John Doe">
                                <p class="text-red-500 text-xs italic">Please fill full name</p>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <!-- <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> -->
                                <label for="email" class="block text-left text-sm font-medium leading-7 text-gray-900 px-4 py-1.5">Email </label>
                            </div> 
                            <div class="w-9/12">
                                <input 
                                    v-model="email"
                                    id="email" name="email" type="email" autocomplete="email" required 
                                    placeholder="Your Email Address"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                >
                                <p class="text-red-500 text-xs italic">Please fill email</p>
                            </div>
                        </div> 
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="phone" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >Phone</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    v-model="phone"
                                    id="phone" 
                                    name="phone" 
                                    type="text" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="6573xxxx">
                                <p class="text-red-500 text-xs italic">Please fill phone number</p>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="password" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >Password</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    v-model="password"
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autocomplete="current-password" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="Minimal 8 character">
                                <p class="text-red-500 text-xs italic">Please fill password</p>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="confirm_password" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >confirm</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    v-model="confirm_password"
                                    id="confirm_password" 
                                    name="confirm_password" 
                                    type="password" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="Re-type password">
                                <p class="text-red-500 text-xs italic">Please fill confirm password</p>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button 
                                @click="register()"
                                type="button" class="flex w-1/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                            Register</button>
                            <button 
                                @click="payload()"
                                type="button" class="flex w-1/5 justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                Payload
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end content form -->
            </template>
        </FrameLogin>
        <LoadingAndAlert 
            :loading="loading" 
            :isOpenModal="isOpenModal"
            :confirmButton="confirmButton"  
            :isConfirmModal="isConfirmModal"  
            @isOpenModelClose="isOpenModelClose"
            :responseGeneral="responseGeneral" 
        >
        </LoadingAndAlert>

    </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted, onBeforeMount } from 'vue';
import  FrameLogin from '../../components/FrameLogin.vue';
import LoadingAndAlert from '../../components/LoadingAndAlert.vue';
import {authService} from '../../store/auth/authService';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

let name = ref('');
let email = ref('');
let phone = ref('');
let password = ref('');
let confirm_password = ref('');
let confirmButton = ref('');

const loading = computed(()=>{
    return store.getters.getterStateLoading
})
const responseGeneral = computed (()=>{
    return store.getters.getterResponseGeneral;
})
const isOpenModal = computed(()=>{
    return store.getters.getterStateModal;
})

function register(){
    const payload={
        'name': name.value,
        'email': email.value,
        'phone': phone.value,
        'password': password.value,
        'confirm_password': confirm_password.value
    };
    authService.register(payload);
    confirmButton.value = 'Go to Login'
}

function payload(){
    name.value ="enzoblackred",
    email.value = "enzoblackred@gmail.com",
    phone.value = "0812345239",
    password.value = "enzoblackred",
    confirm_password.value = "enzoblackred"
}

function isOpenModelClose($event){
    store.commit('mutateModal', false)
    store.commit('mutateResponseModal', null)
    router.push('/login')
}

</script>

<style scoped>

</style>