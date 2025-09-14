<template>
  <div class="app">
    <header class="header">
      <NuxtLink v-if="route.path !== '/'" to="/">На головну</NuxtLink>
      <span v-else>Ви на головній сторінці</span>
    </header>

    <main class="main">
      <NuxtPage />
    </main>

    <footer class="footer">
      <p>RISK test</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

useHead(() => {
  if (route.path === '/') {
    return { title: 'Головна сторінка' }
  } else if (route.path.startsWith('/posts/')) {
    return { title: 'Пост' }
  } else {
    return { title: 'RISK test' }
  }
})
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background: #27374d;
  padding: 1.5rem;
  color: white;

  a,
  span {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
  }
}

.main {
  flex: 1;
  padding: 1.5rem;
}

.footer {
  background: #526d82;
  padding: 1.5rem;
  text-align: center;
  font-size: 18px;
  color: #dde6ed;
}
</style>
