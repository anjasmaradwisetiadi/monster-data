<template>
          <div class="ml-16 w-56 sticky">
            <div class="mt-8 p-4 sidebar-menu transition-transform border shadow-md rounded-md">
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
                          <span class="text
                          -lg pl-2 text-blue-primary">Servers</span>
                      </a>
                  </li>
                  <li class="mb-1 group">
                      <a href="/schedule" class="flex font-semibold px-4 items-center py-2 text-blue-primary hover:bg-gray-300 rounded-md active">
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
          <div class="mt-8 p-4 sidebar-menu transition-transform border shadow-md rounded-md">
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
<script setup>

</script>

<style scoped>
    .active{
        background-color: #a7f3d0;
        border-radius: 10px;
    }
</style>