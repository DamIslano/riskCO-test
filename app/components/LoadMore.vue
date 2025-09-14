<template>
  <div class="load-more">
    <button
      :disabled="disabled || loading"
      @click="$emit('load')"
      class="load-button"
    >
      <Loader v-if="loading" inline text="Завантаження..." />
      <slot v-else>Завантажити ще</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import Loader from "@/components/Loader.vue";

defineProps<{
  disabled?: boolean;
  loading?: boolean;
}>();

defineEmits<{
  (e: "load"): void;
}>();
</script>

<style scoped lang="scss">
.load-more {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.load-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: #27374d;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
  outline: none;
  font-size: 0.95rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #526d82;
  }
}
</style>
