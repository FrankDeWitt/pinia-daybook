<script lang="ts">
  import { defineComponent, defineAsyncComponent } from 'vue'

  export default defineComponent({
    components: {
      DaybookNavbar: defineAsyncComponent(
        () => import('@/components/DaybookNavbar.vue')
      ),
    },
    setup() {
      return {}
    },
  })
</script>

<template>
  <DaybookNavbar />
  <div class="flex">
    <div class="w-1/3">
      <div
        class="overflow-y-scroll border-r border-gray-500 border-solid entry-scroll-area"
      >
        <div class="p-3 space-y-4">
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline animate-pulse"
            type="text"
            disabled
            placeholder="Buscar entradas"
          />
          <button
            class="flex items-center justify-center w-full px-4 py-2 space-x-4 font-bold text-white rounded opacity-50 cursor-not-allowed bg-secondary-700"
          >
            <i-fa-solid-plus-circle />
            <p>Añadir una entrada</p>
          </button>
        </div>
        <div class="p-3">
          <div
            v-for="item in 6"
            :key="item"
            class="w-full px-2 py-2 mb-4 border rounded-md shadow border-slate-300"
          >
            <div class="flex space-x-4 animate-pulse">
              <div class="flex-1 py-1 space-y-6">
                <div class="h-4 rounded bg-slate-700" />
                <div class="space-y-3">
                  <div class="h-2 rounded bg-slate-700" />
                  <div class="grid grid-cols-3 gap-2">
                    <div class="h-2 col-span-2 rounded bg-slate-700" />
                    <div class="h-2 col-span-1 rounded bg-slate-700" />
                    <div class="h-2 col-span-1 rounded bg-slate-700" />
                    <div class="h-2 col-span-1 rounded bg-slate-700" />
                    <div class="h-2 col-span-1 rounded bg-slate-700" />
                  </div>
                  <div class="h-2 rounded bg-slate-700" />
                </div>
                <div class="space-y-3">
                  <div class="w-12 h-2 rounded bg-slate-700" />
                  <div class="w-32 h-2 rounded bg-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-else>
        <EntryList />
      </div> -->
    </div>
    <div class="w-2/3">
      <!-- <div v-if="isLoading" class="flex items-center justify-center h-full"> -->
      <div class="flex items-center justify-center h-full">
        <svg
          role="status"
          class="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-700"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
      <!-- <router-view v-else /> -->
    </div>
  </div>
</template>

<style scoped>
  .entry-scroll-area {
    height: calc(100vh - 64px);
  }
</style>
