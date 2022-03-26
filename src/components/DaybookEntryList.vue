<script lang="ts">
  import { defineComponent, defineAsyncComponent, ref } from 'vue'

  export default defineComponent({
    components: {
      Entry: defineAsyncComponent(() => import('./Entry.vue')),
    },
    setup() {
      const term = ref('')

      return {
        term,
      }
    },
  })
</script>

<template>
  <div class="border-r border-gray-500 border-solid entry-scroll-area">
    <div class="p-3 space-y-4">
      <input
        v-model="term"
        class="w-full p-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Buscar entradas"
      />
      <button
        class="w-full px-4 py-2 font-bold text-white transition-all rounded bg-secondary-700 hover:bg-primary-700"
      >
        <router-link
          class="flex items-center justify-center space-x-4"
          :to="{ name: 'entry', params: { id: 'new' } }"
        >
          <i class="fa-solid fa-circle-plus" />
          <p>Añadir una entrada</p>
        </router-link>
      </button>
    </div>
    <div class="p-3 overflow-y-scroll">
      <Entry v-for="(entry, idx) in 5" :key="idx" :entry="entry" />
    </div>
  </div>
</template>

<style scoped>
  .entry-scroll-area {
    height: calc(100vh - 64px);
  }
</style>
