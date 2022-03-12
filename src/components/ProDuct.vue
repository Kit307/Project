<template>
  <div>
    <h1>product</h1>
    <div v-for="item in train" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
import json from "../assets/DataTrain.json";
export default {
  data() {
    return {
      train: json,
    };
  },
};
</script>

<style></style>
