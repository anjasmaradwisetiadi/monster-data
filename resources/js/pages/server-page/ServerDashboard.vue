<template>
    <div id="ServerDashboard">
        <FrameServer>
            <template #content-form>
                <div class=" flex-grow mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div class="fixed left-8 top-20 w-56 p-4 z-50 sidebar-menu transition-transform border shadow-md rounded-md">
                        <ul class="mt-2">
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> dashboard </span>
                                    <span class="text-lg pl-2 text-blue-primary">Dashboard</span>
                                </a>
                            </li>
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md ">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> dns </span>
                                    <span class="text-lg pl-2 text-blue-primary">Servers</span>
                                </a>
                            </li>
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md active">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> timer </span>
                                    <span class="text-lg pl-2 text-blue-primary">Schedule</span>
                                </a>
                            </li>
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md ">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> history </span>
                                    <span class="text-lg pl-2 text-blue-primary">Backup</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="fixed left-8 top-80 mt-8 w-56 p-4 z-50 sidebar-menu transition-transform border shadow-md rounded-md">
                        <ul class="mt-2">
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md ">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> person </span>
                                    <span class="text-lg pl-2 text-blue-primary">Account</span>
                                </a>
                            </li>
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md ">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> settings </span>
                                    <span class="text-lg pl-2 text-blue-primary">Setting</span>
                                </a>
                            </li>
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md ">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> notifications_active </span>
                                    <span class="text-lg pl-2 text-blue-primary">Notification</span>
                                </a>
                            </li>
                            <li class="mb-1 group">
                                <a href="" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md ">
                                    <span class="material-icons text-blue-primary" style="font-size: 24px"> list </span>
                                    <span class="text-lg pl-2 text-blue-primary">Activity Log</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </FrameServer>
    </div>
</template>
<script setup>
import  FrameServer from '../../components/FrameServer.vue';

</script>

<style scoped>
    .active{
        background-color: #a7f3d0;
        border-radius: 10px;
    }
</style>