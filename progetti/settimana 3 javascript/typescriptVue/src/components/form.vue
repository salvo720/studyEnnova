<script setup lang="ts">
import { ref, watch } from "vue";

defineProps<{ msg: string }>();

const inputUser = ref("");
const list = ref<string[]>([]);
function addName() {
  list.value = [...list.value, inputUser.value];
  console.log(list.value);
}

/*
propagazione degli eventi js : 
gli eventi su javascript si propagano dall'elemento che ha generato l'evento , passando dall'elemento padre  fino a quando non raggiungono il documento dove finisce la propazione ,
 questo tipo di propagazione e detta bubbling , ad esempio se abbiamo un elevento on click , lìevento si propaga dall'elemneto che ha generato l'evento , successivamente all'elemento padre ,
 fino a raggiungere il document 

se ad un elemento assegniamo event.stopPropagation , andiamo a fermare la propagazione degli eventi 

dentro un evento abbiamo sempre un target e un currentTarget : 
1) taget : elemento che ha generato l'evento 
2) currentTarget : e sempre chi sta ascoltando l'evento 
i tagert e i currentTarget possono coincidere 
*/
</script>

<template>
  <p>hi {{ inputUser }}</p>
  <form action="" @submit.prevent="addName()">
    <input type="text" v-model.trim="inputUser" />
    <button :disabled="inputUser == ''">Invia</button>
  </form>
  <hr />
  <ul v-if="list.lenght">
    <li v-for="item in list.value">{{ item }}</li>
  </ul>
  <hr />
</template>

<!-- lo scoped inserisce un indentificativo univoco nel componente  -->
<style scoped lang="scss">
.read-the-docs {
  color: #888;
}

.title {
  font-size: clamp(20px, 8vh, 80px);
  padding: clamp(10px, 8vh, 40px);
  text-align: center;
}

.counter {
  font-size: 2rem;
  text-align: center;
  display: inline-flex;
}

button {
  font-size: 2rem;
  text-align: center;
  padding: 20;

  &:hover {
    cursor: pointer;
  }
}
</style>
