<script lang="ts" setup>
  import VueCountdown from '@chenfengyuan/vue-countdown'
  import { ref, onMounted , PropType } from 'vue'
  import moment from 'moment'
  import { secondsToHms } from '../utils/tools'
  import { IndexDataType } from '../model/indexDataType'
  import { useIndexState } from '../store/index'

  const indexState = useIndexState()
  const props = defineProps({
    data: {
      type: Object as PropType<IndexDataType>,
      required: true
    }
  })

  // time control
  const isEnd = ref(false)
  const isStart = ref(false)
  const endCountDown = () => {
    props.data.type = 'Resolved'
    props.data.completed = true
    isEnd.value = true
  }

  // type control
  const controlPane = ref(false)
  const pendingHandler = () => {
    props.data.type = 'Pending'
    isStart.value = false
    isEnd.value = false
  }
  const processingHandler = () => {
    props.data.type = 'Processing'
    isEnd.value = false
    setTimeout(() => {isStart.value = true}, 0)
  }
  const rejectedHandler = () => {
    props.data.type = 'Rejected'
    isStart.value = false
    isEnd.value = false
  }

  // close pane
  onMounted(() => {
    const body: HTMLElement = document.querySelector('body') as HTMLElement
    body.addEventListener('click', function() {
      controlPane.value = false
    })
  })
</script>

<template>
  <li
    :class="
    data.type === 'Pending' ? 'pending' : 
    data.type === 'Processing' ? 'processing' : 
    data.type === 'Resolved' ? 'resolved' : 
    data.type === 'Rejected' ? 'rejected': ''
    "
    >
    <div>
      <div class="type">
        <span>
          {{ data.type }}
        </span>
      </div>
      <div class="info">
        <div class="name">
          {{ data.name }}
        </div>
        <div class="tag">
          <span>{{ data.tag }}</span>
          <span class="score" v-if="data.type === 'Resolved'">
            + {{ data.score }}
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="count-down" 
        v-if="!isEnd && data.type !== 'Resolved'"
        :style="{ '--time': (data.time / 1000) + 's' }"
        :class="{ 'start': isStart }"
      >
        <div class="timer-bar"></div>
        <vue-countdown
          @end="endCountDown"
          :auto-start="isStart" 
          :time="data.time" 
          v-slot="{ minutes, seconds }"
        >
          {{ minutes }} : {{ seconds }} remain
        </vue-countdown>
      </div>
      <div class="time-info">
        <span v-if="data.type === 'Pending'">
          Start in {{ secondsToHms(data.time) }}
        </span>
        <span v-else-if="data.type === 'Processing'">
          Started in {{ moment( moment(data.updatedAt) ).fromNow() }}
        </span>
        <span v-else-if="data.type === 'Resolved'">
          Resolved {{ moment( moment(data.updatedAt) ).fromNow() }}
        </span>
        <span v-else-if="data.type === 'Rejected'">
          Rejected {{ moment( moment(data.updatedAt) ).fromNow() }}
        </span>
      </div>
      <div class="control-pane">
        <div class="index">
          #{{ data._id + 1 }}
        </div>
        <div class="control" v-if="data.type === 'Pending' || data.type === 'Rejected'" >
          <i class="fa-solid fa-bars" @click.stop="controlPane = !controlPane"></i>
          <div class="pane" v-if="controlPane">
            <ul>
              <li 
                @click="processingHandler()"
              >
                  Processing
              </li>
              <li 
                @click="pendingHandler()"
                v-if="data.type === 'Rejected'"
              >
                  Pending
              </li>
              <li 
                @click="rejectedHandler()"
                v-if="data.type === 'Pending'"
              >
                  Rejected
              </li>
              <li @click="indexState.deleteData(data._id)">Deleted</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="sass" scoped>
  @import '../assets/sass/_variable'
  li
    display: flex
    justify-content: space-between
    align-items: center
    padding: 8px 12px
    transition: background .3s
    &:hover
      background: rgba(#000, .15)
    > div
      display: flex
    &.pending
      .type span
        background: $blue
        color: #fff
    &.processing
      .type span
        background: $yellow
        color: #fff
    &.resolved
      .type span
        background: $green
        color: #fff
    &.rejected
      .type span
        background: $red
        color: #fff
  .type
    min-width: 80px
    font-size: 0.75rem
    align-self: center
    margin-right: 30px
    span
      display: inline-block
      padding: 8px
      border-radius: 8px
  .info
    margin-right: 20px
    .name
      font-weight: 600
    .tag
      font-size: 0.75rem
      color: #666
      margin-top: 8px
      .score
        color: $green
  .count-down
    font-size: 0.75rem
    text-align: center
    margin-right: 15px
    @keyframes run
      100%
        width: 100%
    &.start
      .timer-bar 
        &::before
          animation-name: run
          animation-duration: var(--time)
          animation-fill-mode: forwards
          animation-iteration-count: 1
    .timer-bar
      width: 100px
      height: 5px
      background: rgba(#000, .25)
      margin-bottom: 5px
      position: relative
      &::before
        content: ''
        width: 0%
        height: 100%
        position: absolute
        left: 0
        top: 0
        background: rgba(#000, .7)
  .time-info
    font-size: 0.75rem
    color: #666
    margin-right: 40px
  .control-pane
    display: flex
    align-items: center
    .index
      font-size: 0.75rem
      margin-right: 20px
      color: #666
    .control
      position: relative
      color: #666
      cursor: pointer
      user-select: none
    .pane
      width: 100px
      background: #fff
      box-shadow: 0 0 10px rgba(#000, .25)
      position: absolute
      right: 0
      top: 0
      z-index: 5
      ul
        width: 100%
      li
        font-size: 0.75rem
        padding: 12px 10px
        text-align: center
        cursor: pointer
        user-select: none
        transition: background .4s, color .3s
        &:not(:last-child)
          border-bottom: 1px solid #000
        &:hover
          background: #666
          color: #fff
</style>