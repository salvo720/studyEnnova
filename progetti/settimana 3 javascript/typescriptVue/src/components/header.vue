<script setup lang="ts">

const prop = defineProps<{ menu: string[] }>()

</script>

<template>
  <header>
    <nav>
      <ul >
        <li v-for="item in prop.menu"> <a href="" v-bind:key="item"> {{ item }} </a> </li>
      </ul>
    </nav>
  </header>
</template>


<!-- lo scoped inserisce un indentificativo univoco nel componente  -->
<style scoped lang="scss">
.read-the-docs {
  color: #888;
}



header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header>nav>ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}


header {
  border-bottom: 1px solid #666;
  /* la tecnica dell'orologia che parte da mezzogiorno quindi l'ordine dei valori sara top,right,bottom left  */
  padding: .5rem 1rem 1.5rem 0;
}


header>nav>ul>li {
  display: inline-flex;
  padding: 1em;
  background-clip: padding-box;
  background-color: aqua;
  border-radius: 20%;
  border: 1px solid black;
}

header>nav>ul>li :hover {
  color: white;
}
</style>
