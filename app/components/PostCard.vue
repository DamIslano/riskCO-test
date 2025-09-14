<template>
  <NuxtLink :to="`/posts/${post.id}`">
    <div class="post-card">
      <h2 class="post-card__title">{{ post.title }}</h2>
      <p>{{ post.body.substring(0, 100) }}...</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from "@/composables/usePosts";

defineProps<{
  post: Post;
}>();
</script>

<style scoped lang="scss">
.post-card {
  box-sizing: border-box;
  background: #dde6ed;
  padding: 0.7rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  height: 100%;

  &__title {
    color: #333;
  }
  &:hover {
    transform: translateY(-2px);
  }

  h2 {
    font-size: 22px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 16px;
    color: #555;
  }
}
</style>
