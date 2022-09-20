<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  import TicketsList from './components/TicketsList.vue'
  import TimeLine from './components/TimeLine.vue'
  import { indexData } from './model/indexData'
  import { useIndexState } from './store/index'

  const indexState = useIndexState()
  indexState.pushData(indexData)
</script>

<template>
  <Navbar />
  <div class="container">
    <TimeLine />
    <TicketsList />
  </div>
</template>

<style scoped lang="sass">
  .container 
    display: flex
    align-items: flex-start
    justify-content: center
    padding: 60px 5vw 150px
</style>

