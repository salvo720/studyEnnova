<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <div>
    <main> main </main>
  </div>
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
