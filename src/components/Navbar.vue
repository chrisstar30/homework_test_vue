<script lang="ts" setup>
  import { useIndexState } from '../store/index'
  
  const indexState = useIndexState()
  const { resetData } = indexState
  </script>

<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">HOMEWORK</div>
      <div class="tools">
        <ul>
          <li @click="indexState.controlAddModal(true)">新增任務</li>
          <li @click="resetData()">清空所有任務</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.navbar
  width: 100%
.container
  padding: 20px 5vw
  display: flex
  justify-content: space-between
  align-items: center 
  box-shadow: 0 3px 10px rgba(#000, .4)
.logo
  font-size: 1.25rem
  font-weight: 600
ul
  display: inline-flex
  align-items: center
li
  font-size: 0.75rem
  display: block
  user-select: none
  cursor: pointer
  &:not(:first-child)
    margin-left: 15px
</style>