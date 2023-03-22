<script setup lang="ts">
import Main from './components/main.vue'
import Footer from './components/footer.vue'
import Header from './components/header.vue'

const menu = ["home","form","facts" , "/"];
</script>

<template>
  <div>
  <Header v-bind:menu=menu></Header>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
} */

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

/* fatto conil grid perche usiamo 2 assi  */
/* #root>div {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-gap: 1rem;
    min-height:100vh;
    font-size:20px;
} */

/* fatto con il flex per una sola direzione  */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 1rem;
}

#app   {
  /* la base sara lo 0% della sia grandezza  */
  flex: 1;
}

</style>
