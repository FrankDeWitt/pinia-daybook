<script>
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    setup() {
      const router = useRouter()

      function createEntry() {
        router.push({ name: 'entry', params: { id: 'new' } })
      }

      return {
        createEntry,
      }
    },
  })
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <h1 class="text-4xl">Selecciona una entrada para comenzar</h1>
  </div>
</template>
