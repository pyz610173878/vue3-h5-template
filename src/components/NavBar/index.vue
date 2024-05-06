<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { ref } from "vue";

const onClickRight = () => {
  useToggleDarkMode();
};

const onClickLeft = () => history.back();
</script>

<template>
  <van-config-provider>
    <van-nav-bar
      placeholder
      @click-right="onClickRight"
      title="质量管理系统"
      v-bind="$attrs"
      class="fixed sl-nav--bar"
      left-arrow
      @click-left="onClickLeft"
    >
      <span>
        <slot></slot>
      </span>
      <!-- 动态title如何实现的？ -->
      <template #right>
        <svg-icon class="text-[18px]" />
      </template>
    </van-nav-bar>
  </van-config-provider>
</template>

<style lang="less">
.sl-nav--bar {
  padding: 0px;
}
</style>
