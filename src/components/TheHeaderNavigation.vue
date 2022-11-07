<script setup>
import BaseListItem from './common/BaseListItem.vue';
</script>

<template>
  <nav>
    <ul>
      <BaseListItem>
        <RouterLink :to="{ name: 'home' }">Movieverse</RouterLink>
      </BaseListItem>
      <BaseListItem>
        <RouterLink :to="{ name: 'movies' }">Movies</RouterLink>
      </BaseListItem>
      <BaseListItem>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
      </BaseListItem>
    </ul>
  </nav>
</template>