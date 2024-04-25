<template>
  <div></div>
</template>

<script setup lang="ts" name="">
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";

import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
const Data = reactive({});
const DataRef = ref();
const store = useCachedViewStore();
onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<style scoped></style>
