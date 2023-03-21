<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const inputUser = ref('');
const response :any = {};
watch([count],async function (newCount, oldCount) {
  const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=";
  console.log("passing from " + oldCount + " to " + newCount)
  response.value = await fetch(url + newCount)
    .then(res => res.json())
    .then(json => json)
    .catch(e => e.message)

    console.log(response , typeof response  )
});

</script>

<template>
  <h1>{{ msg }}</h1>

  <p> hi {{ inputUser }}</p>
  <form action="">

    <input type="text" v-model=inputUser>
  </form>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

    <!-- <div v-for="(value, name, index) in response"> 
      <p > {{ value  }}</p>
    </div> -->

    {{ JSON.stringify(response) }}
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>


<!-- lo scoped inserisce un indentificativo univoco nel componente  -->
<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>
