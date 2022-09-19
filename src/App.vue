<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import TicketsList from './components/TicketsList.vue'
import TimeLine from './components/TimeLine.vue'
</script>

<template>
  <Navbar />
  <div class="container">
    <TimeLine />
    <TicketsList />
  </div>
</template>

