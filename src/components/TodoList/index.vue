<template>
  <!-- 主页tabbar -->
  <van-tabbar
    v-model="active"
    :placeholder="true"
    :route="true"
    class="--SL-tabbar"
    v-bind="$attrs"
  >
    <van-tabbar-item
      v-for="(item, index) in props.tabbarDatas"
      :key="item.id"
      :to="'/tools?name=' + item.title"
      v-bind="$attrs"
    >
      <!-- 待解决问题1 [Vue warn]: Property "index" was accessed during render but is not defined on instance -->
      <template #icon="">
        <svg-icon :name="item.icon" class="--icon-size"></svg-icon>
      </template>
      <span class="--SL-text--mini">{{ item.title }}</span>

      <!-- 这里在添加一个图标方式 -->
      <span>
        <slot></slot>
      </span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { type TabbarData } from "./types";

const props = defineProps<{
  tabbarDatas?: TabbarData[];
}>();

const active = ref(0);
</script>

<style scoped>
.--icon-size {
  width: 45px;
  height: 45px;
}

.--SL-tabbar :deep(.van-tabbar--fixed) {
  position: static;
  height: 60px;
}
</style>
