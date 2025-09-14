<template>
  <div class="container">
    <div v-if="error" class="error-block">
      <p>{{ error }}</p>
      <button @click="fetchPost" class="retry-button">Спробувати ще</button>
    </div>

    <Loader v-else-if="isLoading" text="Завантаження..." />

    <div v-else-if="post">
      <div class="post-details">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>

      <h2>Коментарі</h2>
      <ul class="comments">
        <li v-for="c in comments" :key="c.id" class="comment">
          <strong>{{ c.name }}</strong> ({{ c.email }})
          <p>{{ c.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { usePost } from "@/composables/usePost";
import Loader from "@/components/Loader.vue";

const route = useRoute();
const id = Number(route.params.id);

const { post, comments, isLoading, error, fetchPost } = usePost(id);

useHead({
  title: post.value ? post.value.title : "Пост",
  meta: [
    {
      name: "description",
      content: post.value ? post.value.body.substring(0, 140) : "Опис поста",
    },
  ],
});

onMounted(() => {
  fetchPost();
});
</script>

<style scoped>
h1 {
  margin-top: 0;
}
.post-details {
  background: #fafafa;
  padding: 1rem;
  border-radius: 8px;
}
.error-block {
  text-align: center;
  margin: 2rem 0;
}

.retry-button {
  background-color: #27374d;
  border: none;
  padding: 0.6rem 1.2rem;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.retry-button:hover {
  background-color: #0056b3;
}

.comments {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  max-height: 620px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.comment {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #dde6ed;
}
</style>
