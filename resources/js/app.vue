<template>
    <!-- <Navbar></Navbar>
    <p class="blue-primary">Testing vue</p> -->
    <router-view></router-view>
    
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    data() {
        return {
            count: 0
        }
    },
    components: {
        Navbar,
        Sidebar
    },

}
</script>
<style>

</style>