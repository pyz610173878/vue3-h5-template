<script setup lang="ts">
// 通知公告组件
import { reactive, ref, defineProps } from "vue";
import { type NoticeProps } from "./types";

const props = defineProps<{
  notice_data: NoticeProps[];
}>();
</script>
<template>
  <div class="mt-3">
    <div
      :class="{}"
      v-for="(item, index) in props.notice_data"
      :key="index"
      class="--Sl-notify-container"
    >
      <div class="--SL-notify-type-container --SL-rectangles-rotate">
        <p
          class="--SL-notify-text-rotate"
          :class="item.type === '未读' ? 'bg-gray-300' : 'sl-notice--type-blue'"
        >
          {{ item.type }}
        </p>
      </div>

      <div class="flex items-center sl-notice--title">
        <!-- 默认显示的东西 -->
        <slot name="icon" :type="item.type"> </slot>
        <p class="--SL-notify-text-title --SL-text--black">
          {{ item.title }}
        </p>
      </div>
      <div class="sl-text--gray">
        <span class="text-xs">
          <slot>
            {{ item.content }}
          </slot>
        </span>
        <span class="sl--text-10">
          {{ item.datatime }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sl-notice--type-white {
  background-color: #cdcfd0;
}

.sl-notice--type-blue {
  background-color: #2d80ee;
}
</style>
