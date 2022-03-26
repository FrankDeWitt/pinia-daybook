<script lang="ts">
  import { defineComponent } from 'vue'
  import useFullDate from '../composables/useFullDate'

  export default defineComponent({
    props: {
      entry: {
        type: Object,
        required: true,
        default: () => ({}),
      },
    },
    setup(props) {
      const date = useFullDate(props.entry.publishedAt)
      return {
        date,
      }
    },
  })
</script>

<template>
  <div
    class="flex flex-col justify-between p-2 mb-4 leading-normal transition-all bg-white border border-gray-400 rounded-md cursor-pointer hover:bg-slate-100"
  >
    <router-link :to="{ name: 'entry', params: { id: entry.id } }">
      <div class="mb-8">
        <div class="mb-2 text-xl font-bold text-gray-900">
          {{ entry?.title }}
        </div>
        <p class="text-base text-gray-700">
          {{ entry.bodyExcerpt }}
        </p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="leading-none text-gray-900">{{ entry?.author }}</p>
          <p class="text-gray-600">
            {{ date.weekDay }}, {{ date.day }} de {{ date.month }},
            {{ date.year }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>
