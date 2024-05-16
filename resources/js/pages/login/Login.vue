<template>
    <div id="Login" class="">
            <!-- start slot navbar -->
            <FrameLogin>
                <template #content-form>
                    <!-- start content form -->
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm px-6 lg:px-8 pt-2">
                        <h4 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h4>
                        <p class="text-slate-400"> Enter your email and password to login to Monster Backup Dashboard asjkcbgci</p>
                    </div>

                    <div class="flex-grow mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" action="#" method="POST">
                            <div class="flex flex-row">
                                <div class="w-2/5">
                                    <!-- <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> -->
                                    <label for="email" class="block text-right text-sm font-medium leading-7 text-gray-900 px-4 py-1.5">Email </label>
                                </div> 
                                <div class="w-3/5">
                                    <input id="email" name="email" type="email" autocomplete="email" required 
                                        placeholder="Your Email Address"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                    >
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
                                        placeholder="Minimal 8 character">
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button type="submit" class="flex w-2/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <!-- end content form -->
                </template>
            </FrameLogin>
            <!-- start footer footer -->
    </div>
</template>
<script setup >
import  FrameLogin from '../../components/FrameLogin.vue';

</script>

<style scoped>

</style>