<template>
    <div id="ServerCreate">
      <FrameServer>
        <template #content-form>
          <div class="flex flex-row">
            <div class="relative">
              <Sidebar></Sidebar>
            </div>
            <div class="relative flex-grow">
              <div class="mt-8 py-6 px-4 mx-4 flex flex-col bg-slate-50 shadow-md rounded-md">
                <div class="flex justify-center mb-10">
                    <h2 class="text-3xl font-bold text-blue-primary">
                         {{isEdit ? 'Edit Form Schedule' : 'Create Form Schedule'}}
                    </h2>
                </div>
                <div class="flex flex-row">
                  <div class="w-1/2 px-4">
                    <label
                      for="name"
                      class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                    >
                      Schedule Name</label
                    >
                    <input
                      v-model="scheduleName"
                      id="name"
                      name="name"
                      autocomplete="username"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                      placeholder="Schedule Name"
                      :disabled="isEdit"
                    />
                    <p
                      v-if="responseError?.schedule_name" 
                      class="text-red-500 text-xs italic">{{responseError?.schedule_name[0]}}</p>
                  </div>
                  <div class="w-1/2 px-4">
                    <label
                      for="backup-server"
                      class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                    >
                      Backup Server</label
                    >
                    <input
                      v-model="backupServer"
                      id="backup-server"
                      name="backup-server"
                      autocomplete="username"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                      placeholder="Backup Server"
                    />
                    <p 
                      v-if="responseError?.backup_server" 
                      class="text-red-500 text-xs italic">{{responseError?.backup_server[0]}}</p>
                  </div>
                </div>
                <!-- form option dropdown -->
                <div class="flex flex-row mt-4">
                  <div class="w-1/4 px-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Backup Method</label
                    >
                    <select
                      v-model="backupMethod"
                      id="countries"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected disabled>Choose a backup method</option>
                      <option value="full">Full</option>
                      <option value="incremental">Incremental</option>
                      <option value="separate">Separate</option>
                    </select>
                    <p 
                      v-if="responseError?.backup_method" 
                      class="text-red-500 text-xs italic">{{ responseError?.backup_method[0] }}</p>
                  </div>
                  <div class="w-1/4 px-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Backup Type
                    </label>
                    <select
                      v-model="backupType"
                      id="countries"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected disabled>Choose a backup type</option>
                      <option value="file">File</option>
                      <option value="image">Image</option>
                      <option value="video">Video</option>
                    </select>
                    <p
                      v-if="responseError?.backup_type" 
                      class="text-red-500 text-xs italic">{{ responseError?.backup_type[0] }}</p>
                  </div>
                  <div class="w-1/4 px-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Retention Policy Type</label
                    >
                    <select
                      v-model="retentionPolicyType"
                      id="countries"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected disabled>Choose a retention policy type</option>
                      <option value="day"> 1 Day</option>
                      <option value="week">1 Week</option>
                      <option value="month">1 Month</option>
                    </select>
                    <p
                      v-if="responseError?.retention_policy_type" 
                      class="text-red-500 text-xs italic">{{ responseError?.retention_policy_type[0] }}</p>
                  </div>
                  <div class="w-1/4 px-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Backup Schedule</label
                    >
                    <select
                      v-model="backupSchedule"
                      id="countries"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected disabled>Choose a backup schedule</option>
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                    <p 
                      v-if="responseError?.backup_schedule" 
                      class="text-red-500 text-xs italic">{{ responseError?.backup_schedule[0] }}</p>
                  </div>
                </div>
                <!-- form checked -->
                <div class="flex flex-row px-1 mt-4">
                  <div class="w-48">
                    <div class="inline-flex items-center">
                        <label
                            class="relative flex cursor-pointer items-center rounded-full p-3"
                            for="ripple-on"
                            data-ripple-dark="true"
                        >
                            <input
                                v-model="enablePitr"
                                id="ripple-on"
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-primary checked:bg-blue-primary checked:before:bg-blue-primary hover:before:opacity-10"
                            />
                            <div
                            class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                        </label>
                        <label
                            class="mt-px cursor-pointer select-none font-light text-gray-700"
                            for="ripple-on"
                        >
                            Enable PITR
                        </label>
                    </div>
                  </div>
                  <div class="w-56">
                    <div class="inline-flex items-center">
                        <label
                            class="relative flex cursor-pointer items-center rounded-full p-3"
                            for="ripple-on"
                            data-ripple-dark="true"
                        >
                            <input
                                v-model="backupDatabasePerFile"
                                id="ripple-on"
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-primary checked:bg-blue-primary checked:before:bg-blue-primary hover:before:opacity-10"
                            />
                            <div
                            class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                        </label>
                        <label
                            class="mt-px cursor-pointer select-none font-light text-gray-700"
                            for="ripple-on"
                        >
                            Backup a database per file
                        </label>
                    </div>
                  </div>
                  <div class="w-48">
                    <div class="inline-flex items-center">
                        <label
                            class="relative flex cursor-pointer items-center rounded-full p-3"
                            for="ripple-on"
                            data-ripple-dark="true"
                        >
                            <input
                                v-model="useCompression"
                                id="ripple-on"
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-primary checked:bg-blue-primary checked:before:bg-blue-primary hover:before:opacity-10"
                            />
                            <div
                            class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                        </label>
                        <label
                            class="mt-px cursor-pointer select-none font-light text-gray-700"
                            for="ripple-on"
                        >
                            Use Compression
                        </label>
                    </div>
                  </div>
                  <div class="w-48">
                    <div class="inline-flex items-center">
                        <label
                            class="relative flex cursor-pointer items-center rounded-full p-3"
                            for="ripple-on"
                            data-ripple-dark="true"
                        >
                            <input
                                v-model="useEncryption"
                                id="ripple-on"
                                type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-primary checked:bg-blue-primary checked:before:bg-blue-primary hover:before:opacity-10"
                            />
                            <div
                            class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                        </label>
                        <label
                            class="mt-px cursor-pointer select-none font-light text-gray-700"
                            for="ripple-on"
                        >
                            Use Encryption
                        </label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row mt-4">
                    <div class="w-1/3 px-4">
                        <label
                            for="storage-name"
                            class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                        >
                            Storage Name
                        </label>
                        <input
                            v-model="storageName"
                            id="storage-name"
                            name="storage-name"
                            autocomplete="storage-name"
                            type="text"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                            placeholder="Storage Name"
                        />
                        <p 
                          v-if="responseError?.storage_name" 
                          class="text-red-500 text-xs italic">{{responseError?.storage_name[0]}}</p>
                    </div>
                    <div class="w-1/3 px-4">
                        <label
                            for="storage-directory"
                            class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                        >
                            Storage Directory
                        </label>
                        <input
                            v-model="storageDirectory"
                            id="storage-directory"
                            name="storage-directory"
                            autocomplete="storage-directory"
                            type="text"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                            placeholder="Storage Directory"
                        />
                        <p 
                          v-if="responseError?.storage_directory" 
                          class="text-red-500 text-xs italic">{{responseError?.storage_directory[0]}}</p>
                    </div>
                    <div class="w-1/3 px-4">
                        <label
                            for="backup-name"
                            class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                        >
                            Backup Name
                        </label>
                        <input
                            v-model="backupName"
                            id="backup-name"
                            name="backup-name"
                            autocomplete="backup-name"
                            type="text"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                            placeholder="Backup Name"
                        />
                        <p
                          v-if="responseError?.backup_name" 
                          class="text-red-500 text-xs italic">{{responseError?.backup_name[0]}}</p>
                    </div>
                </div>
                <div class="flex flex-row-reverse mt-6 px-4">
                    <div>
                        <button 
                          @click="submit()"
                          type="button" class="flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>

                    <div>
                        <button 
                          @click="cancel()"
                          type="button" class="flex justify-center rounded-md mr-4 bg-red-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
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
  import Pagination from '../../components/Pagination.vue';
  import {serverService} from '../../store/server/serverService';
  import LoadingAndAlertGlobal from '../../components/LoadingAndAlertGlobal.vue';

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

  const responseGeneral = computed (()=>{
    return store.getters.getterResponseGeneral;
  })

  const getEditServer = computed (()=>{
    return store.getters.getterEditServer;
  })


  let isEdit = ref(false);
  let paramsUrl = ref('');
  let responseGeneralCatch = ref(null);

  let scheduleName = ref('');
  let userId = ref('');
  let slug = ref('');
  let backupServer = ref('');
  let backupMethod = ref('');
  let backupType = ref('');
  let enablePitr = ref(false);
  let backupDatabasePerFile = ref(false);
  let storageName = ref('');
  let storageDirectory = ref('');
  let retentionPolicyType = ref('');
  let backupName = ref('');
  let useCompression = ref(false);
  let useEncryption = ref(false);
  let backupSchedule = ref('');

  watch(responseGeneral, async (newValue, oldValue)=>{
    responseGeneralCatch= newValue;
  })

  watch(getEditServer, async (newValue, oldValue)=>{
    const getData = newValue.data;
    scheduleName.value = getData.schedule_name;
    backupServer.value = getData.backup_server;
    backupMethod.value = getData.backup_method;
    backupType.value = getData.backup_type;
    enablePitr.value = getData.enable_pitr ? true: false;
    backupDatabasePerFile.value = getData.backup_database_per_file ? true: false;
    storageName.value = getData.storage_name;
    storageDirectory.value = getData.storage_directory;
    retentionPolicyType.value = getData.retention_policy_type;
    backupName.value = getData.backup_name;
    useCompression.value = getData.use_compression ? true: false;
    useEncryption.value = getData.use_encryption ? true: false;
    backupSchedule.value = getData.backup_schedule;
  })


  onMounted(()=>{
    decisionEditOrCreateRuler()
  })

  function decisionEditOrCreateRuler(){
    const payload = router.currentRoute.value.params.slug
    paramsUrl.value = payload;
    if(payload){
        isEdit.value = true;
        serverService.getEditServer(paramsUrl.value);
    } 
  }

  function submit(){
    let payload = {
      'backup_server':backupServer.value,
      'backup_method':backupMethod.value,
      'backup_type':backupType.value,
      'enable_pitr':enablePitr.value,
      'backup_database_per_file':backupDatabasePerFile.value,
      'storage_name':storageName.value,
      'storage_directory':storageDirectory.value,
      'retention_policy_type':retentionPolicyType.value,
      'backup_name':backupName.value,
      'use_compression':useCompression.value,
      'use_encryption':useEncryption.value,
      'backup_schedule':backupSchedule.value
    }

    store.commit('mutateConfirmModalGlobal', false);
    if(isEdit.value){
      const addedPayload = {
        '_method': 'PUT'
      }
      payload = {...payload, ...addedPayload}

      serverService.updateServer(payload, paramsUrl.value)
    } else {
      const slugConvert = scheduleName.value.toLowerCase().replaceAll(' ', '-');
      const addedPayload = {
        'schedule_name': scheduleName.value,
        'slug': slugConvert,
      }
      payload = {...payload, ...addedPayload}
      serverService.createServer(payload)
    }
  }
  
  function isOpenModelCloseServer($event){
    store.commit('mutateModalGlobal', false)
    store.commit('mutateResponseModalGlobal', null)

    if(responseGeneralCatch?.status){
        router.push('/schedule');
    }
  }

  function cancel(){
    router.go(-1);
  }

  function payload(){
    scheduleName.value = 'Postgres Backup 6';
    backupServer.value = 'Server: n1 (11.12.1.2)';
    backupMethod.value = 'full';
    backupType.value = 'file';
    enablePitr.value = true;
    backupDatabasePerFile.value  = true;
    storageName.value = 'local storage';
    storageDirectory.value = 'public';
    retentionPolicyType.value = 'week';
    backupName.value = 'PC - XXXX';
    useCompression.value = false;
    useEncryption.value = true;
    backupSchedule.value = 'daily';
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
  </style>
  