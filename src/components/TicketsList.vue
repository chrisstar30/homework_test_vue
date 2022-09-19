<script lang="ts" setup>
  import { useIndexState } from '../store/index'
  import { storeToRefs } from 'pinia'
  
  const indexState = useIndexState()
  const { allData } = storeToRefs(indexState)
</script>

<template>
  <div class="tickets-list">
    
  </div>
</template>

<style lang="sass" scoped>

</style>