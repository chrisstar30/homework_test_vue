<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">HOMEWORK</div>
      <div class="tools">
        <ul>
          <li>新增任務</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
.navbar
  width: 100%
.container
  padding: 8px 50px
  display: flex
  justify-content: space-between
  align-items: center 
  box-shadow: 0 3px 10px rgba(#000, .4)
.logo
  font-size: 1.25rem
  font-weight: 600
li
  font-size: 1.125rem
  display: block
  user-select: none
  cursor: pointer
</style>