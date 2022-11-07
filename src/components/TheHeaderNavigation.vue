<script setup>
import BaseListItem from './common/BaseListItem.vue';
</script>

<template>
  <nav>
    <ul>
      <BaseListItem>
        <RouterLink :to="{ name: 'movies' }">Movies</RouterLink>
      </BaseListItem>
      <BaseListItem>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
      </BaseListItem>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
}

li {
  margin-right: .5rem;
}
</style>