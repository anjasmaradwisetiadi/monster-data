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
                    <form class="space-y-6" action="#" method="POST">
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="name" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >Name</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    id="name" 
                                    name="name" 
                                    autocomplete="username"
                                    type="text" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="John Doe">
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <!-- <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> -->
                                <label for="email" class="block text-left text-sm font-medium leading-7 text-gray-900 px-4 py-1.5">Email </label>
                            </div> 
                            <div class="w-9/12">
                                <input id="email" name="email" type="email" autocomplete="email" required 
                                    placeholder="Your Email Address"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                >
                            </div>
                        </div> 
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="phone" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >Phone</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    id="phone" 
                                    name="phone" 
                                    type="text" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="Minimal 8 character">
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="password" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >Password</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autocomplete="current-password" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="Minimal 8 character">
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-3/12">
                                <label for="re-password" class="block text-left text-sm font-medium leading-6 text-gray-900 px-4 py-1.5 " >confirm</label>
                            </div>
                            <div class="w-9/12">
                                <input 
                                    id="re-password" 
                                    name="re-password" 
                                    type="password" 
                                    required 
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    placeholder="Re-type password">
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" class="flex w-1/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                    </form>
                </div>
                <!-- end content form -->
            </template>
        </FrameLogin>
    </div>
</template>
<script setup>
import  FrameLogin from '../../components/FrameLogin.vue';

</script>

<style scoped>

</style>