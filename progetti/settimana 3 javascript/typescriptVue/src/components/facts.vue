<script setup lang="ts">
import { ref, watch } from "vue";

defineProps<{ msg: string }>();

type responsetype = {
  status: Status;
  _id: string;
  user: string;
  text: string;
  type: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

type Status = {
  verified: null;
  sentCount: number;
};

const initObecjt: responsetype = {
  status: {
    verified: null,
    sentCount: 0,
  },
  _id: "",
  user: "",
  text: "",
  type: "",
  deleted: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  __v: 0,
};

const count = ref(0);
let response: any = ref([]);
const names: Array<string> = [];

watch([count], async function (newCount, oldCount) {
  const url =
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=";
  console.log(
    "passing from oldCount :" + oldCount + " to newCount :" + newCount
  );
  response = await fetch(url + newCount)
    .then((res) => res.json())
    .catch((e) => e.message);

  // soluzione mia
  if (Number(newCount) == 1) response = [response, initObecjt];
  // soluzione 2
  // response = Array.isArray(response) ? response : [response];
  // soluzione 3
  // const response2 = [].concat(response);
  // return response2;

  console.log(response, response instanceof Array, response.length);
});
</script>

<template>
  <div class="card counter">
    <button type="button" @click="count--">-1</button>
    <div>count is {{ count }}</div>
    <button type="button" @click="count++">+1</button>
  </div>
  <hr />
  <div
    v-if="response instanceof Array"
    v-for="(value, index, array) in response"
  >
    <p v-bind:key="value.__id">{{ value.text }}</p>
  </div>

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