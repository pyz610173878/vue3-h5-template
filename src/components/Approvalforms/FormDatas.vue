<template>
  <div class="px-2">
    <div
      class="sl-Form--container"
      v-for="(item, index) in props.Form_Data"
      :key="index"
    >
      <div class="title w-1/3 mr-6">
        <label class="">{{ item.label }}</label>
      </div>

      <div class="value">
        <p>{{ item.placeholder }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";

interface ExamineInfo {
  label: string;
  placeholder: string;
}

const props = defineProps<{
  Form_Data: ExamineInfo[];
}>();

onBeforeMount(() => {
  // 在这里执行挂载前的操作
});

onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<style scoped lang="less"></style>
