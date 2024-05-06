<script setup lang="ts" name="ExamineDisplay">
// 待办 待阅 已办 已阅列表组件
import { defineProps, defineEmits } from "vue";
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  watch,
  computed,
  provide,
  defineModel
} from "vue";
import { type ExamineProps } from "@/components/Examine/types";
const Data = reactive({});
const DataRef = ref();

const props = defineProps<{
  Examine_Data: ExamineProps[];
}>();

// 这个函数通用性不高。假设你要跳转 十几个页面呢？
// 难道你写 十几个if else？还要进行进行抽离。
const ToApprovalist = (item, index) => {
  if (item.type.length >= 3) {
    return "/approvalList?name=";
  } else {
    return "/tasklist?name=";
  }
};
onBeforeMount(() => {});

// 我通过控制展示组件，更改了子组件中定义的值。
watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<template>
  <div>
    <!-- <div @click="update">parent bound v-model is: {{ model }}</div> -->
    <van-grid :border="false" v-bind="$attrs">
      <van-grid-item v-bind="$attrs">
        <!-- v-for="(item, index) in props.Examine_Data"
        :key="index"
        :to="test1(item, index) + item.type[index]" -->
        <div class="">
          <p class="--Sl-number-large">
            <slot name="total"> </slot>
          </p>
          <slot name="type">
            <p></p>
          </slot>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

