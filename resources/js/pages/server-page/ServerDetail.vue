<template>
    <div id="ServerDetail">
      <FrameServer>
        <template #content-form>
          <div class="flex flex-row">
            <div class="relative">
              <Sidebar></Sidebar>
            </div>
            <div class="relative flex-grow">
              <div class="mt-8 py-2 px-8 mx-4 flex flex-col">
                <!-- information server -->
                <div class="flex flex-row mt-8 py-2 px-8 mx-4">
                  <div class="flex flex-row w-4/5">
                    <div class="w-1/5">
                      <img
                        class="w-36"
                        src="../../../assets/image/database.png"
                        alt="database"
                      />
                    </div>
                    <div class="w-4/5">
                      <div>
                        <h3 class="text-xl font-semibold">
                          {{ getDetailServers?.schedule_name}}
                        </h3>
                      </div>
                      <div class="flex flex-row mt-8">
                        <div class="w-1/2">
                          <div class="flex">
                            <span class="w-2/5">Method </span>
                            <span class="w-3/5">: {{ getDetailServers?.backup_method }} </span>
                          </div>
                          <div class="flex">
                            <span class="w-2/5">Last Excution</span>
                            <span class="w-3/5">: last night </span>
                          </div>
                          <div class="flex">
                            <span class="w-2/5">Schedule</span>
                            <span class="w-3/5">: at 11:59 pm</span>
                          </div>
                          <div class="flex">
                            <span class="w-2/5">Storage</span>
                            <span class="w-3/5">: {{ getDetailServers?.storage_name }}</span>
                          </div>
                        </div>
                        <div class="w-1/2">
                          <div class="flex">
                            <span class="w-2/5">Compression </span>
                            <span class="w-3/5">:  {{ getDetailServers?.use_compression ? 'Yes' : 'No'}} </span>
                          </div>
                          <div class="flex">
                            <span class="w-2/5">Encryption</span>
                            <span class="w-3/5">: {{ getDetailServers?.use_encryption ? 'Yes' : 'No'}} </span>
                          </div>
                          <div class="flex">
                            <span class="w-2/5">Backup Name Template</span>
                            <span class="w-3/5">: {{ getDetailServers?.backup_name }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-row mt-6">
                        <button
                          type="submit"
                          class="flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Schedule Detail
                        </button>
                        <button
                          type="submit"
                          class="flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
                        >
                          Duplicate This Schedule
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/5 flex">
                    <div class="flex items-end">
                      <button
                        type="button"
                        class="flex justify-center rounded-md bg-green-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
                      >
                        <span
                          class="material-icons text-white p-1 cursor-pointer"
                          style="font-size: 16px"
                        >
                          pause_circle
                        </span>
                      </button>
                    </div>
                    <div class="flex items-end ml-2">
                      <button
                        @click="editServer(getDetailServers?.slug)"
                        type="button"
                        class="flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
                      >
                        <span
                          class="material-icons text-white p-1 cursor-pointer"
                          style="font-size: 16px"
                        >
                          border_color
                        </span>
                      </button>
                    </div>
                    <div class="flex items-end ml-2">
                      <button
                        @click="deleteServer(getDetailServers?.slug)"
                        type="button"
                        class="flex justify-center rounded-md bg-red-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
                      >
                        <span
                          class="material-icons text-white p-1 cursor-pointer"
                          style="font-size: 16px"
                        >
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- table list server -->
                <div class="shadow-lg mt-8 py-2 px-8 mx-4 border">
                  <div class="mt-4 flex ">
                    <div class="w-1/2">
                        <div class="text-lg font-semibold">
                            Backup
                        </div>
                    </div>
                    <div class="w-1/2 flex justify-end">
                        <div class="w-48">
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autocomplete="current-password" 
                                required 
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]" 
                                placeholder="Search">
                        </div>
                    </div>
                  </div>
                  <div class="p-4 bg-slate-100 rounded-md mt-6">
                    <div class="w-full mb-12 xl:mb-0 px-4 mx-auto mt-5">
                      <div
                        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
                      >
                        <div class="block w-full">
                          <table
                            class="items-center bg-transparent w-full border-collapse"
                          >
                            <thead>
                              <tr class="rounded-t mb-0 border-0">
                                <th
                                  class="border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                  Name
                                </th>
                                <th
                                  class="border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                  Status
                                </th>
                                <th
                                  class="border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                  Started (Duration)
                                </th>
                                <th
                                  class="border-r-2 border-white px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                  Server
                                </th>
                                <th
                                  class=" border-r-0 px-6 text-blue-primary bg-slate-200 text-center align-middle border border-solid border-blueGray-100 py-4 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr 
                                v-for="(dataBackupListServer, index) of getListBackupServer "
                                :key="index"
                                class="odd:bg-white even:bg-slate-50">
                                <td
                                  class="border-b-2 border-l-0 text-center align-middle whitespace-nowrap p-4 text-left text-blueGray-700"
                                >
                                    {{dataBackupListServer.name}}
                                </td>
                                <td
                                  class="border-2 text-center text-green-primary align-middle whitespace-nowrap p-4 text-left text-blueGray-700"
                                >
                                    {{dataBackupListServer.status}}
                                </td>
                                <td
                                  class="border-2 text-center align-middle whitespace-nowrap p-4"
                                >
                                    {{dataBackupListServer.started}}
                                </td>
                                <td
                                  class="border-2 text-center align-center whitespace-nowrap p-4"
                                >
                                    {{dataBackupListServer.server}}
                                </td>
                                <td
                                  class="border-2 text-center px-6 align-middle border-r-0 whitespace-nowrap p-4"
                                >
                                    <div class="flex p-2 justify-center">
                                        <div class="flex text-blue-primary px-2">
                                            <span class="material-icons text-blue-primary text-base font-medium" style="font-size: 24px"> auto_delete </span>
                                            <span class="ml-2 text-base font-light"> Restore </span>
                                        </div>
                                        <div class="flex px-2 border-l-2 text-red-primary">
                                            <span class="material-icons text-red-primary" style="font-size: 24px"> delete </span>
                                            <span class="ml-2 text-base font-light"> Delete </span>
                                        </div>
                                    </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </FrameServer>
      <LoadingAndAlertGlobal 
        :loading="loading" 
        :isOpenModal="isOpenModalGlobal"
        :confirmButton="nameModalButtonGlobal" 
        :nameModal="nameModal" 
        :isConfirmModal="isConfirmModalGlobal"  
        @isOpenModelCloseGeneral="isOpenModelCloseServer"
        :responseModal="responseModalGlobal" 
    ></LoadingAndAlertGlobal>
    </div>
  </template>
  <script setup>
  import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';

  import FrameServer from '../../components/FrameServer.vue';
  import Sidebar from '../../components/Sidebar.vue';
  import LoadingAndAlertGlobal from '../../components/LoadingAndAlertGlobal.vue';
  import {serverService} from '../../store/server/serverService';
  import { dataDummyBackupListServer } from '../../../assets/data/dummyData'

  const store = useStore();
  const router = useRouter(); 

  const loading = computed(()=>{
    return store.getters.getterStateLoading
  })

  let isOpenModalGlobal = computed(()=>{
    return store.getters.getterStateModalGlobal;
  })

  const responseModalGlobal = computed (()=>{
    return store.getters.getterResponseModalGlobal;
  })

  const nameModalButtonGlobal = computed(()=>{
    return store.getters.getterNameModalButtonGlobal;
  })

  const isConfirmModalGlobal = computed(()=>{
    return store.state.confirmModalGlobal
  }) 

  const responseError = computed (()=>{
    return store.getters.getterResponseError;
  })

  const getDetailServers = computed(()=>{
    return store?.getters?.getterDetailServer?.data;
  })

  const getListBackupServer = computed(()=>{
    return store?.getters?.getterListBackupServer?.data?.data;
  })


  const paramsSlug = ref('');
  const nameModal = ref('modal_server');

  onMounted(()=>{
    const payloadSlug = router.currentRoute.value.params.slug;
    paramsSlug.value = payloadSlug;
    serverService.detailServer(payloadSlug);
    serverService.getListServerBackup();
  })


  const dataBackupListServers = dataDummyBackupListServer.data;

  function editServer(slug){
    router.push(`/schedule/${slug}/edit`);
  }

  function deleteServer(slug){
    store.commit('mutateConfirmModalGlobal', true)
    serverService.confirmDelete();
  }

  function isOpenModelCloseServer($event){
    store.commit('mutateModalGlobal', false)
    store.commit('mutateResponseModalGlobal', null)
    if($event.value){
        store.commit('mutateConfirmModalGlobal', false)
        serverService.deleteServer(paramsSlug.value);
  }
}



  </script>
  
  <style scoped>
  .active {
    background-color: #a7f3d0;
    border-radius: 10px;
  }
  .margin-reset {
    margin: 0px !important;
  }
  .height-card {
    max-height: 27rem;
    min-height: 27rem;
  }
  </style>
  