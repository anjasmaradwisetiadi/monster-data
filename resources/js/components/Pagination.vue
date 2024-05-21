<template>
  <div id="Pagination" class="flex justify-center mt-3">
    <!-- start pagination -->
    <div class="flex items-center gap-2 mt-2">
        <button
          @click="back()"
          :disabled="!(pageNumber > 1)"
          class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Previous
        </button>
        <div class="flex items-center gap-2">
          <button
              v-for="(n, index) in props?.data?.last_page"
              :key="index"
              @click="selectPage(n)"
              :class="pageNumber === n ? 'bg-blue-primary text-white' : 'bg-white text-gray-900' "
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            {{ n }}
          </button>
        </div>
        <button
          class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          :disabled="!(((pageNumber) < props?.data?.last_page) )"
          @click="next()"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    <!-- end pagination -->
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted, defineProps, defineEmits, watch } from 'vue';
import {serverService} from '../store/server/serverService';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();

let isNext=ref(false);
let isBack=ref(true);

const pageNumber = ref(1);

const props = defineProps({
  data:{
    default: null
  }
})
onMounted(()=>{

})

function selectPage(payload){
  pageNumber.value = payload;
  serverService.getListServerByPage(payload);
}

function next(){
  if( pageNumber.value < props?.data?.last_page){
    pageNumber.value += 1;
    serverService.getListServerByPage(pageNumber.value);
  } 
} 

function back(){
  if( pageNumber.value > 1){
    pageNumber.value -= 1;
    serverService.getListServerByPage(pageNumber.value);
  } 
}

</script>
<style scoped>
.page-not-found {
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
}
</style>
