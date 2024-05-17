<template>
    <div id="LoadingAndAlert" class="">
        <div id="modal-bg" class="w-full h-full z-20 absolute top-0 absolute blur-background"></div>
        <div id="modal-box" class="sm:w-[385px] sm:min-w-[30vw] min-w-[60vw] min-h-[30vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 shadow-md absolute z-20">
            <img class="w-40" src="../../assets/image/logo.png" alt="logo">
            <h2 class="text-xl text-blue-primary font-medium mt-9">Registartion Success </h2>
            <p class="text-center mt-4">Please check you email to activated your MonsterBackup Account.</p>
            <div class="w-full flex justify-center">
                <button id="modal-close" class="py-2 px-6 bg-blue-primary rounded-lg text-white mb-7">Go to Login </button>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>
.blur-background{
    background-color: rgba(255,255,255, 0.8);
}
</style>