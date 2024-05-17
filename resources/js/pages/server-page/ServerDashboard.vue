<template>
    <div id="ServerDashboard">
        <FrameServer>
            <template #content-form>
                <div class="flex flex-row">
                    <div class="relative">
                        <Sidebar></Sidebar>
                    </div>
                    <div class="relative flex-grow">
                        <div class="mt-8 py-2 px-8 flex flex-col overflow-auto h-full" style="height: calc(100vh - 14rem);">
                            <div class="flex flex-row flex-wrap justify-center gap-2">
                                <div class="w-64 height-card"> 
                                    <div class="flex justify-center mb-4">
                                        <img class="w-36" src="../../../assets/image/database.png" alt="database">
                                    </div>
                                    <h3 class="text-xl font-bold mb-1 text-center"> Postgres Backup</h3>
                                    <div class="flex justify-center">
                                        <p class="px-6 py-2 rounded-full bg-green-secondary text-sm"> Server: n1 (11.12.1.2) </p>
                                    </div>
                                    <div class="mt-6 block">
                                        <div class="flex"> <span class="w-2/5">Method </span> <span class="w-3/5">: postgresbackup </span></div>
                                        <div class="flex"> <span class="w-2/5">Last Excution</span> <span class="w-3/5">: last night </span></div>
                                        <div class="flex"> <span class="w-2/5">Schedule</span> <span class="w-3/5">: at 11:59 pm</span></div>
                                        <div class="flex"> <span class="w-2/5">Storage</span> <span class="w-3/5">: local storage</span></div>
                                    </div>
                                    <div class="mt-12 flex flex-row">
                                        <button type="submit" class="flex w-4/5 justify-center rounded-md bg-blue-primary text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Schedule Detail
                                        </button>
                                        <button type="submit" class="flex w-1/5 justify-center rounded-md bg-green-primary text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3">
                                            <span 
                                                class="material-icons text-white border-white rounded-full border-2 p-1 cursor-pointer" 
                                                style="font-size: 16px"
                                            >   
                                                pause_circle
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div class="w-64 height-card"> 
                                    <div class="flex justify-center mb-4">
                                        <img class="w-36" src="../../../assets/image/database.png" alt="database">
                                    </div>
                                    <h3 class="text-xl font-bold mb-1 text-center"> Postgres Backup</h3>
                                    <div class="flex justify-center">
                                        <p class="px-6 py-2 rounded-full bg-green-secondary text-sm"> Server: n1 (11.12.1.2) </p>
                                    </div>
                                    <div class="mt-6 block">
                                        <div class="flex"> <span class="w-2/5">Method </span> <span class="w-3/5">: postgresbackup </span></div>
                                        <div class="flex"> <span class="w-2/5">Last Excution</span> <span class="w-3/5">: last night </span></div>
                                        <div class="flex"> <span class="w-2/5">Schedule</span> <span class="w-3/5">: at 11:59 pm</span></div>
                                        <div class="flex"> <span class="w-2/5">Storage</span> <span class="w-3/5">: local storage</span></div>
                                    </div>
                                    <div class="mt-12 flex flex-row">
                                        <button type="submit" class="flex w-4/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Schedule Detail
                                        </button>
                                        <button type="submit" class="flex w-1/5 justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3">
                                            <span 
                                                class="material-icons text-white border-white rounded-full border-2 p-1 cursor-pointer" 
                                                style="font-size: 16px"
                                            >   
                                                pause_circle
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div class="w-64 height-card"> 
                                    <div class="flex justify-center mb-4">
                                        <img class="w-36" src="../../../assets/image/database.png" alt="database">
                                    </div>
                                    <h3 class="text-xl font-bold mb-1 text-center"> Postgres Backup</h3>
                                    <div class="flex justify-center">
                                        <p class="px-6 py-2 rounded-full bg-green-secondary text-sm"> Server: n1 (11.12.1.2) </p>
                                    </div>
                                    <div class="mt-6 block">
                                        <div class="flex"> <span class="w-2/5">Method </span> <span class="w-3/5">: postgresbackup </span></div>
                                        <div class="flex"> <span class="w-2/5">Last Excution</span> <span class="w-3/5">: last night </span></div>
                                        <div class="flex"> <span class="w-2/5">Schedule</span> <span class="w-3/5">: at 11:59 pm</span></div>
                                        <div class="flex"> <span class="w-2/5">Storage</span> <span class="w-3/5">: local storage</span></div>
                                    </div>
                                    <div class="mt-12 flex flex-row">
                                        <button type="submit" class="flex w-4/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Schedule Detail
                                        </button>
                                        <button type="submit" class="flex w-1/5 justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3">
                                            <span 
                                                class="material-icons text-white border-white rounded-full border-2 p-1 cursor-pointer" 
                                                style="font-size: 16px"
                                            >   
                                                pause_circle
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div class="w-64 height-card"> 
                                    <div class="flex justify-center mb-4">
                                        <img class="w-36" src="../../../assets/image/database.png" alt="database">
                                    </div>
                                    <h3 class="text-xl font-bold mb-1 text-center"> Postgres Backup</h3>
                                    <div class="flex justify-center">
                                        <p class="px-6 py-2 rounded-full bg-green-secondary text-sm"> Server: n1 (11.12.1.2) </p>
                                    </div>
                                    <div class="mt-6 block">
                                        <div class="flex"> <span class="w-2/5">Method </span> <span class="w-3/5">: postgresbackup </span></div>
                                        <div class="flex"> <span class="w-2/5">Last Excution</span> <span class="w-3/5">: last night </span></div>
                                        <div class="flex"> <span class="w-2/5">Schedule</span> <span class="w-3/5">: at 11:59 pm</span></div>
                                        <div class="flex"> <span class="w-2/5">Storage</span> <span class="w-3/5">: local storage</span></div>
                                    </div>
                                    <div class="mt-12 flex flex-row">
                                        <button type="submit" class="flex w-4/5 justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Schedule Detail
                                        </button>
                                        <button type="submit" class="flex w-1/5 justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3">
                                            <span 
                                                class="material-icons text-white border-white rounded-full border-2 p-1 cursor-pointer" 
                                                style="font-size: 16px"
                                            >   
                                                pause_circle
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div class="w-64 height-card ">
                                    <div class="flex flex-col justify-center content-center  height-card bg-teal-50">
                                        <div class="flex justify-center">
                                            <img class="w-32" src="../../../assets/image/database.png" alt="image">
                                        </div>
                                        <div class="flex justify-center">
                                            <button type="submit" class="flex w-4/5 justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Schedule Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- pagination -->
                            <Pagination></Pagination>
                        </div> 
                    </div>
                </div>
            </template>
        </FrameServer>
    </div>
</template>
<script setup>
import FrameServer from '../../components/FrameServer.vue';
import Sidebar from '../../components/Sidebar.vue';
import Pagination from '../../components/Pagination.vue';

</script>

<style scoped>
    .active{
        background-color: #a7f3d0;
        border-radius: 10px;
    }
    .margin-reset{
        margin: 0px !important;
    }
    .height-card{
        max-height: 27rem;
        min-height: 27rem;
    }
</style>