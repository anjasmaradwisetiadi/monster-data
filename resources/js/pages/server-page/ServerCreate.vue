<template>
    <div id="ServerCreate">
      <FrameServer>
        <template #content-form>
          <div class="flex flex-row">
            <div class="relative">
              <Sidebar></Sidebar>
            </div>
            <div class="relative flex-grow">
              <div class="mt-8 py-6 px-4 mx-4 flex flex-col bg-slate-50 rounded-md">
                <div class="flex justify-center mb-10">
                    <h2 class="text-3xl font-bold text-blue-primary">
                        Create Form Schedule
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
                      id="name"
                      name="name"
                      autocomplete="username"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                      placeholder="Schedule Name"
                    />
                  </div>
                  <div class="w-1/2 px-4">
                    <label
                      for="backup-server"
                      class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                    >
                      Backup Server</label
                    >
                    <input
                      id="backup-server"
                      name="backup-server"
                      autocomplete="username"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                      placeholder="Backup Server"
                    />
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
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a backup method</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div class="w-1/4 px-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Backup Type
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a backup type</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div class="w-1/4 px-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Retention Policy Typ</label
                    >
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a retention policy type</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div class="w-1/4 px-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Backup Schedule</label
                    >
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a backup schedule</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
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
                            id="storage-name"
                            name="storage-name"
                            autocomplete="storage-name"
                            type="text"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                            placeholder="Storage Name"
                        />
                    </div>
                    <div class="w-1/3 px-4">
                        <label
                            for="storage-directory"
                            class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                        >
                            Storage Directory
                        </label>
                        <input
                            id="storage-directory"
                            name="storage-directory"
                            autocomplete="storage-directory"
                            type="text"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                            placeholder="Storage Directory"
                        />
                    </div>
                    <div class="w-1/3 px-4">
                        <label
                            for="backup-name"
                            class="block text-left text-sm font-medium leading-6 text-gray-900 py-1.5"
                        >
                            Backup Name
                        </label>
                        <input
                            id="backup-name"
                            name="backup-name"
                            autocomplete="backup-name"
                            type="text"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-[8px]"
                            placeholder="Backup Name"
                        />
                    </div>
                </div>
                <div class="flex flex-row-reverse mt-6 px-4">
                    <div>
                        <button type="submit" class="flex justify-center rounded-md bg-blue-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>

                    <div>
                        <button type="submit" class="flex justify-center rounded-md mr-4 bg-red-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
                    </div>
                </div>
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
  .active {
    background-color: #a7f3d0;
    border-radius: 10px;
  }
  .margin-reset {
    margin: 0px !important;
  }
  </style>
  