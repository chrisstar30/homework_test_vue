<script lang="ts" setup>
  import { defaultAction } from '../model/defaultAction'
  import { useIndexState } from '../store/index'
  import { ref, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { secondsToHms } from '../utils/tools'
  import { IndexDataType } from '../model/indexDataType'
  import { getTag } from '../utils/tools'

  const indexState = useIndexState()
  const { allData } = storeToRefs(indexState)

  const selectValue = ref(0)

  const selectData = computed<{
    name: string,
    score: number,
    time: number
  }>((): {
    name: string,
    score: number,
    time: number
  } => {
    return defaultAction[selectValue.value]
  })

  const submitHandler = () => {
    const fakeID: number = allData.value?.length
    const newData:IndexDataType = {
      _id: fakeID,
      tag: getTag(fakeID),
      name: selectData.value.name,
      score: selectData.value.score,
      time: selectData.value.time,
      type: 'Pending',
      completed: false,
      updatedAt: new Date().getTime(),
      createdAt: new Date().getTime()
    }
    indexState.pushData(newData)
    indexState.controlAddModal(false)
  }
</script>

<template>
  <div class="modal">
    <div class="modal-inner">
      <div class="modal-box">
        <div class="modal-content">
          <div class="top-title">
            Add Action
          </div>
          <select v-model="selectValue" name="actions" id="actions">
            <option 
              v-for="(action, index) in defaultAction"
              :key="`action-${index}`"
              :value="index"
            >
              {{ action.name }}
            </option>
          </select>
          <div class="action-title">
            {{ selectData.name }}
          </div>
          <div class="action-info">
            <div>
              <span>
                Duration:
              </span>
              <span>
                {{ secondsToHms(selectData.time) }}
              </span>
            </div>
            <div>
              <span>
                Score:
              </span>
              <span>
                {{ selectData.score }}
              </span>
            </div>
          </div>
          <div class="send" @click="submitHandler()">
            <div class="send-btn">
              Submit
            </div>
          </div>
          <div class="close-btn" @click="indexState.controlAddModal(false)">
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>