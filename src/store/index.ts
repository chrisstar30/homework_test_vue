import { defineStore } from 'pinia'
import { IndexDataType } from '../model/indexDataType'

export const useIndexState = defineStore({
  id: 'IndexState',
  state: () => {
    return {
      allData: [] as IndexDataType[],
    }
  },
  actions: {
    pushData: function(data: IndexDataType[]) {
      Object.assign(this.allData, data)
    },
    resetData: function() {
      this.$reset()
    }
  }
})