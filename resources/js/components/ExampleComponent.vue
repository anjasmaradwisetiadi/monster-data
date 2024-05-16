<template>
    <div id="ServerDashboard">
        <FrameServer>
            <template #content-form>
                <div class="mt-6 flex sm:mx-auto sm:w-full sm:max-w-sm">
                    <Sidebar></Sidebar>
                    <main class="p-6 w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
                        <div class="grid grid-cols-4 gap-4 w-full">
                            <div>01</div>
                            <div>02</div>
                            <div>03</div>
                            <div>04</div>
                            <div>05</div>
                        </div>
                    </main>
                </div>
            </template>
        </FrameServer>
    </div>
</template>
<script setup>
// import  FrameServer from '../../components/FrameServer.vue';
// import  Sidebar from '../../components/Sidebar.vue';

</script>

<style scoped>
    .active{
        background-color: #a7f3d0;
        border-radius: 10px;
    }
</style>