<template>
  <div class="container">
    <h1>Список постів</h1>

    <div v-if="error">
      <p>{{ error }}</p>
      <button @click="fetchPosts">Спробувати ще</button>
    </div>

    <div v-else class="grid grid-container">
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
    </div>

    <LoadMore
      v-if="hasMore"
      :loading="isLoading"
      :disabled="!hasMore"
      @load="fetchPosts"
    />
  </div>
</template>

<script setup lang="ts">
import { usePosts } from "@/composables/usePosts";
import PostCard from "@/components/PostCard.vue";
import LoadMore from "@/components/LoadMore.vue";

const { posts, isLoading, error, hasMore, fetchPosts } = usePosts();

onMounted(() => {
  if (posts.value.length === 0) {
    fetchPosts();
  }
});
</script>
