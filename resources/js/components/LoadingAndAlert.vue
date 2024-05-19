<template>
    <div id="LoadingAndAlert" class="">
        <div 
            v-if="props?.loading || props?.isOpenModal" 
            id="modal-bg" class="w-full h-full z-20 absolute top-0 absolute blur-background">
        </div>
        <!-- loading -->
        <div
            v-if="props?.loading" 
            class="sm:w-[385px] sm:min-w-[30vw] min-w-[60vw] min-h-[30vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 top-1/2 left-1/2 -translate-x-1/2 absolute z-20">
            <img src="../../assets/icon/spinner.svg" alt="spinner">
        </div>
        <transition v-if="props?.isOpenModal && !props?.loading"  name="fade">
            <div    
                id="modal-box" class="sm:w-[385px] sm:min-w-[30vw] min-w-[60vw] min-h-[30vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 shadow-md absolute z-20">
                <img class="w-40" src="../../assets/image/logo.png" alt="logo">
                <h2 class="text-xl text-blue-primary font-medium mt-9">{{props?.responseModal?.title}} </h2>
                <p class="text-center mt-4">{{props?.responseModal?.message}}</p>
                <template v-if="!props.isConfirmModal">
                    <div class="w-full flex justify-center">
                        <button id="modal-close" class="py-2 px-6 bg-blue-primary rounded-lg text-white mb-7"
                            @click="onToggle(false)"
                        > {{props.confirmButton}} </button>
                    </div>
                </template>
                <template v-if="props.isConfirmModal">
                    <div class="w-full flex justify-center">
                        <button id="modal-close" class="py-2 px-6 bg-blue-primary rounded-lg text-white mb-7"
                            @click="onToggle(true)"
                        >{{props.confirmButton}} </button>
                        <button id="modal-close" class="py-2 px-6 bg-red-primary rounded-lg text-white mb-7 ml-2"
                            @click="onToggle(false)"
                        >{{props.denyButton}} </button>
                    </div>
                </template>
            </div>
        </transition>
    </div>
</template>
<script setup>
        import { ref, reactive, computed, onMounted, defineProps, defineEmits, watch } from 'vue';
        import { useStore } from 'vuex';
        const store = useStore();

        const props = defineProps({
            loading:{
                default: false
            },
            responseModal:{
                type: Object,
                default() {
                    return {
                        title: 'Something Wrong',
                        message: 'Please contact your admin',
                    }
                }
            },
            confirmButton: {
                default: 'Ok'
            },  
            denyButton: {
                default: 'No'
            },
            // for add name modal unique
            nameModal: {
                default: ''
            },
            isConfirmModal: {
                default: false
            },
            isOpenModal: {
                default: false
            }
        })

        const emit = defineEmits([
            'confirm',
            'confirmDelete',
            'isOpenModelClose'
        ]);

        function onToggle(data) {
            props.isOpenModal = !props.isOpenModal;
            const payload = {
                name: props.nameModal,
                value: data
            }
            emit('isOpenModelClose', payload)
        }
</script>

<style scoped>
.blur-background{
    background-color: rgba(255,255,255, 0.8);
}
</style>