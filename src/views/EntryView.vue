<script>
  import { defineComponent, watch, computed, ref, onBeforeMount } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from '../stores/entries'

  import useFullDate from '@/composables/useFullDate'

  export default defineComponent({
    props: {
      id: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const router = useRouter()
      const store = useStore()
      const emptyEntry = {
        title: '',
        text: '',
        publishedAt: new Date().toDateString(),
      }
      const entry = computed(() => {
        return store.getEntryById(props.id) || emptyEntry
      })
      const date = ref(useFullDate(new Date().toDateString()))

      watch(entry, (current) => {
        date.value = useFullDate(current.publishedAt)
      })

      onBeforeMount(() => {
        if (!entry.value.id && props.id !== 'new') {
          router.push({
            name: 'no-entry',
          })
        }
      })

      return {
        date,
        entry,
      }
    },
  })
</script>

<template>
  <div class="space-y-5">
    <div class="flex items-center justify-between p-2 border-b">
      <div>
        {{ date.weekDay }}, {{ date.day }} de {{ date.month }}, {{ date.year }}
      </div>
      <div class="space-x-2">
        <button
          v-if="entry.id"
          class="px-4 py-2 font-semibold text-white transition-all border rounded bg-danger border-danger hover:bg-danger-800 hover:text-white hover:border-transparent"
          @click="onDeleteEntry"
        >
          Borrar
          <i class="ml-2 fa-solid fa-trash"></i>
        </button>
        <button
          class="px-4 py-2 font-semibold text-white transition-all border rounded bg-secondary-700 border-secondary-700 hover:bg-primary hover:text-white hover:border-transparent"
        >
          Subir foto
          <i class="ml-2 fa-solid fa-upload"></i>
        </button>
      </div>
    </div>
    <div class="flex flex-col w-full px-5 space-y-4">
      <input
        v-model="entry.title"
        class="w-full p-2 overflow-hidden overflow-y-scroll text-black transition duration-300 ease-in-out border resize-none rounded-xl focus:border-secondary-700 ring-1 ring-transparent focus:ring-secondary-700 focus:outline-none"
        type="text"
        placeholder="Título"
      />
      <textarea
        v-model="entry.body"
        class="w-full p-2 overflow-hidden overflow-y-scroll text-black transition duration-300 ease-in-out border resize-none h-96 rounded-xl focus:border-secondary-700 ring-1 ring-transparent focus:ring-secondary-700 focus:outline-none"
        placeholder="¿Qué sucedio hoy?"
      />
    </div>
  </div>
</template>
