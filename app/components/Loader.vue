<template>
  <div :class="['loader-wrapper', { inline }]">
    <span class="spinner"></span>
    <span v-if="text" class="loader-text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
  inline?: boolean;
}>();
</script>

<style scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0;
}

.loader-wrapper.inline {
  padding: 0;
}

.spinner {
  width: 0.8rem;
  height: 0.8rem;
  border: 2px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

.loader-text {
  font-size: 0.95rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
