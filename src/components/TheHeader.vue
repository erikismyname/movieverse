<script setup>
import TheHeaderNavigation from './TheHeaderNavigation.vue';
</script>

<template>
  <header>
    <h1>
      <RouterLink :to="{ name: 'home' }">Movieverse</RouterLink>
    </h1>
    <TheHeaderNavigation />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
}
</style>