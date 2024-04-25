<template>
  <Button type="primary">
    <template #names> </template>
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { Button } from "vant";
import { ComponentOptionsMixin, computed, unref } from "vue";

defineOptions({
  name: "AButton",
  extends: Button as ComponentOptionsMixin,
  inheritAttrs: false
});
</script>
<style scoped></style>
