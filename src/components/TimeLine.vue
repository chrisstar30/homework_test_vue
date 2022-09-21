 <script lang="ts" setup>
  import { useIndexState } from '../store/index'
  import { storeToRefs } from 'pinia'
  import { secondsToHms } from '../utils/tools'
  import moment from 'moment'
  
  const indexState = useIndexState()
  const { allData } = storeToRefs(indexState)
</script>

<template>
  <div class="time-line" v-if="allData?.length">
    <h3>ACTION TIMELINE</h3>
    <div>
      <ul>
        <li 
          v-for="(data, index) in allData" 
          :key="`data-${index}`"
          :class="data.type === 'Rejected' ? 'rejected' : data.type === 'Resolved' ? 'resolved': 'processing'"
        >
          <div class="circle">
            <i v-if="data.type === 'Rejected'" class="fa-solid fa-xmark"></i>
            <i v-else-if="data.type === 'Resolved'" class="fa-solid fa-check"></i>
            <i v-else="data.type === 'Resolved'" class="fa-sharp fa-solid fa-clock"></i>
          </div>
          <div class="content">
            <div class="top-info">
              {{ data.name }}
            </div>
            <div 
              v-if="!data.completed" 
              class="completed"
            >
              {{ moment(data.updatedAt).format('YYYY-MM-DD h:mm:ss') }}
            </div>
            <div 
              v-else
              class="bottom-info"
            >
              <div class="show-info">
                <div class="time">
                  {{ secondsToHms(data.time) }}
                </div>
                <div class="score">
                  Score: {{ data.score }}
                </div>
              </div>
              <div class="read-more">
                <span>
                  Read More
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '../assets/sass/_variable'
  .time-line 
    width: 500px
  h3
    width: 100%
    font-size: 1.25rem
    font-weight: 600
    line-height: 1.4
    text-align: center
    margin-bottom: 35px
  ul
    width: 100%
    display: flex
    flex-direction: column
  li
    width: 100%
    display: flex
    align-items: flex-start
    position: relative
    z-index: 1
    &:not(:last-child)
      padding-bottom: 40px
      position: relative
      &::before
        content: ''
        width: 2px
        height: 100%
        background: rgba(#000, .3)
        position: absolute
        left: 14px
        top: 15px
        z-index: 0
    &:last-child
      background: #efefef
    &.resolved
      .circle
        background-color: $green
      .content
        padding: 0
        background: rgba(#000, 0)
        border-radius: 0
        box-shadow: none
      .top-info
        padding: 12px 15px
        margin-top: -3px
        background-color: $green
        border-radius: 8px
        box-shadow: 0 3px 10px rgba(#000, .3)
        color: #fff
        position: relative
        &::before
          content: ''
          width: 0
          height: 0
          border-style: solid
          border-width: 8px 16px 8px 0
          border-color: transparent $green transparent transparent
          position: absolute
          left: 0
          top: 50%
          transform: translate(-50%, -50%)
          z-index: -1
      .bottom-info
        display: none
    &.rejected
      .circle
        background-color: $red
      .bottom-info
        border-top: 2px solid $red
    &.processing
      .circle
        background-color: $yellow
      .bottom-info
        border-top: 2px solid $yellow
  .circle
    width: 30px
    height: 30px
    font-size: 14px
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0
    margin-right: 30px
    color: #fff
    border-radius: 50%
    position: relative
    z-index: 1
  .content
    width: 100%
    padding: 0 8px
    background: #fff
    border-radius: 8px
    box-shadow: 0 3px 10px rgba(#000, .3)
  .top-info
    display: flex
    align-items: center
    padding: 12px 15px 10px
  .completed
    font-size: 0.875rem
    margin-top: 10px
    color: #666
  .bottom-info
    padding: 10px 20px 12px
  .show-info
    display: flex
    justify-content: space-between
    color: #666
  .time
    font-size: 0.75rem
  .score
    font-size: 0.875rem
  .read-more
    width: 100%
    font-size: 0.875rem
    margin-top: 15px
    margin-left: auto
    color: #666
    text-align: right
    span
      display: inline-block
      user-select: none
      cursor: pointer
</style>