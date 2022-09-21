<script lang="ts" setup>
  import Ticket from './Ticket.vue'
  import { computed, ref } from 'vue'
  import { useIndexState } from '../store/index'
  import { storeToRefs } from 'pinia'

  const indexState = useIndexState()
  const { allData, queuedData, resolvedData, rejectedData } = storeToRefs(indexState)
  const filterNow = ref('All')
  const tempData = computed(() => {
    switch (filterNow.value) {
      case 'Queued':
        return queuedData.value
        break
      case 'Resolved':
        return resolvedData.value
        break
      case 'Rejected':
        return rejectedData.value
        break
      default:
        return [
          ...queuedData.value,
          ...resolvedData.value,
          ...rejectedData.value
        ]
    }
  })
</script>

<template>
  <div class="tickets-list">
    <h4>Tickets</h4>
    <div class="filter-buttons">
      <div 
        class="button" 
        :class="{ 'active': filterNow === 'All' }"
        @click="filterNow = 'All'"
      >
        <span>All</span>
        <span>{{ allData.length ? allData.length : 0 }}</span>
      </div>
      <div 
        class="button" 
        :class="{ 'active': filterNow === 'Queued' }"
        @click="filterNow = 'Queued'"
      >
        <span>Queued</span>
        <span>{{ queuedData.length ? queuedData.length : 0 }}</span>
      </div>
      <div 
        class="button" 
        :class="{ 'active': filterNow === 'Resolved' }"
        @click="filterNow = 'Resolved'"
      >
        <span>Resolved</span>
        <span>{{ resolvedData.length ? resolvedData.length : 0 }}</span>
      </div>
      <div 
        class="button" 
        :class="{ 'active': filterNow === 'Rejected' }"
        @click="filterNow = 'Rejected'"
      >
        <span>Rejected</span>
        <span>{{ rejectedData.length ? rejectedData.length : 0 }}</span>
      </div>
    </div>
    <div class="contents">
      <ul>
        <Ticket 
          v-for="(data, index) in tempData"
          :key="`data-${index}`"
          :data="data"
          >
        </Ticket>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .tickets-list
    width: 800px
    margin-left: 60px
    padding: 30px 25px 50px
    background: #fff
    box-shadow: 0 3px 10px rgba(#000, .3)
    border-radius: 8px
  h4
    font-size: 1.125rem
  .filter-buttons
    display: flex
    align-items: center
    margin-top: 30px
  .button
    display: flex
    align-items: center
    justify-content: center
    position: relative
    padding: 8px
    cursor: pointer
    user-select: none
    &:not(:last-child)
      margin-right: 15px
    &::before
      content: ''
      width: 100%
      height: 2px
      background: #000
      opacity: 0
      position: absolute
      left: 0
      bottom: 0
      pointer-events: none
    span:nth-child(1)
      display: block
      margin-right: 8px
      color: #666
    span:nth-child(2)
      font-size: 0.75rem
      padding: 3px
      background: rgba(#000, .25)
      color: #666
      border-radius: 8px
    &.active
      &::before
        opacity: 1
      span:nth-child(1)
        color: #000
      span:nth-child(2)
        color: #000
  .contents
    margin-top: 20px
</style>