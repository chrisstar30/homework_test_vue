import { defineStore } from 'pinia'
import { IndexDataType } from '../model/indexDataType'

export const useIndexState = defineStore({
  id: 'IndexState',
  state: () => {
    return {
      allData: [] as IndexDataType[],
    }
  },
  getters: {
    queuedData: (state) => {
      return state.allData
        .filter(data => data.type === 'Pending' || data.type === 'Processing')
        .sort(function(a, b) {
          if (a.type === b.type) {
              return b.createdAt - a.createdAt
          }
          return b.type.localeCompare(a.type)
        })
    },
    resolvedData: (state) => {
      return state.allData
        .filter(data => data.type === 'Resolved')
        .sort((a, b) => b.createdAt - a.createdAt)
    },
    rejectedData: (state) => {
      return state.allData
        .filter(data => data.type === 'Rejected')
        .sort((a, b) => b.createdAt - a.createdAt)
    }
  },
  actions: {
    pushData: function(data: IndexDataType[]) {
      Object.assign(this.allData, data)
    },
    resetData: function() {
      this.$reset()
    },
    deleteData: function(n: number) {
      this.allData.splice(n , 1)
    }
  }
})