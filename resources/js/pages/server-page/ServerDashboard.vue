<template>
    <div id="ServerDashboard">
        <FrameServer>
            <template #content-form>
                <div class="flex flex-row">
                    <div class="relative">
                        <Sidebar></Sidebar>
                    </div>
                    <div class="relative">
                        <div class="mt-8 py-2 px-8">
                            <p>djkabdc adhauhdabi</p>
                            <p>djkabdc adhauhdabi</p>
                            <p>djkabdc adhauhdabi</p>
                            <p>djkabdc adhauhdabi</p>
                            <p>djkabdc adhauhdabi</p>
                            <p>djkabdc adhauhdabi</p>
                            <p>djkabdc adhauhdabi</p>
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

</script>

<style scoped>
    .active{
        background-color: #a7f3d0;
        border-radius: 10px;
    }
    .margin-reset{
        margin: 0px !important;
    }
</style>