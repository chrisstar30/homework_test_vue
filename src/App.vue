<script setup lang="ts">
  import AddModal from './components/AddModel.vue'
  import EditModal from './components/EditModal.vue'
  import Navbar from './components/Navbar.vue'
  import TicketsList from './components/TicketsList.vue'
  import TimeLine from './components/TimeLine.vue'
  import { storeToRefs } from 'pinia' 
  import { indexData } from './model/indexData'
  import { useIndexState } from './store/index'

  const indexState = useIndexState()
  let { showEditModal, showAddModal } = storeToRefs(indexState)

  indexState.setData(indexData)
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="container-inner">
      <TimeLine />
      <TicketsList />
    </div>
  </div>
  <Transition name="fade">
    <AddModal v-if="showAddModal" />
  </Transition>
  <Transition name="fade">
    <EditModal v-if="showEditModal" />
  </Transition>
</template>

<style scoped lang="sass">
  .container 
    padding: 0 5vw
    overflow-x: auto
  .container-inner
    width: 1360px
    margin: 0 auto
    padding: 60px 0 150px
    display: flex
    align-items: flex-start
    justify-content: center
</style>

