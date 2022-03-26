import { defineStore } from 'pinia'
import daybookApi from '../api/daybookApi'

export const useStore = defineStore('entryStore', {
  state: () => {
    return {
      isLoading: true,
      entries: new Array<{
        id: number
        author: string
        body: string
        bodyExcerpt: string
        publishedAt: string
        title: string
      }>(),
    }
  },
  getters: {
    getEntries(state) {
      return (term: string) =>
        state.entries.filter((entry) =>
          entry.title.toLowerCase().includes(term.toLowerCase())
        )
    },
    getEntryById(state) {
      return (id: string) => state.entries.find((entry) => entry.id === id)
    },
  },
  actions: {
    async fetchEntries() {
      try {
        const { data } = await daybookApi.get('/entries.json')
        for (const id of Object.keys(data)) {
          this.entries.push({
            id,
            ...data[id],
          })
        }
        this.isLoading = false
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})
