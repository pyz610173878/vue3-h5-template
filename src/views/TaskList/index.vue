
<!-- 任务管理 -->
<script setup lang="ts" name="">
import { defineProps, defineEmits } from "vue";
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import TaskCard from "@/components/TaskList/TaskCard.vue";
import { useCachedViewStore } from "@/store/modules/cachedView";
import FieldInput from "@/components/FieldInput/index.vue";
import { HanderTaskManage } from "@/hooks/useTaskManage";
const { User_info } = useCachedViewStore();
const DataRef = ref();
const active: any = ref("");

const {
  Data,
  TaskNoStart,
  TaskProcessing,
  TaskProcessed,
  handerTaskNoStart,
  handerTaskProcessing,
  handerTaskProcessed
} = HanderTaskManage();

onBeforeMount(() => {
  // 在这里执行挂载前的操作
  const route = useRoute(); //当前页面的路由信息比如 name path query等
  const { query } = route;
  active.value = query.name;

  const tset = () => {
    if (User_info.userNo != "") {
      handerTaskNoStart(TaskNoStart);
      handerTaskProcessing(TaskProcessing);
      handerTaskProcessed(TaskProcessed);
    }
  };
  tset();
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});

onMounted(() => {
  // 在这里执行挂载后的操作
});

const test = msg => {
  Data.value.TaskNoStart_Data = msg.filter(item => item.status === 0);

  Data.value.TaskProcessing_Data = msg.filter(item => item.status === 1);
  Data.value.TaskProcessed = msg.filter(item => item.status === 2);
  // Data.TaskNoStart_Data =msg
};
</script>

<template>
  <div>
    <NavBar title="任务管理" />
    <div>
      <van-tabs v-model:active="active" >
        <FieldInput @response="test">
          <!-- 可是我不仅仅只有一个值啊 -->
          <template #examine_totalCount>
            <span class="ml-1">
              <!-- <svg-icon name="List_"/> -->
              共有<span class="text-sky-400">{{ Data.title_name[active] }}</span
              >条任务数据</span
            >
          </template>
        </FieldInput>

        <van-tab title="未开始" name="未开始">
          <TaskCard :Task_Data="Data.TaskNoStart_Data" />
        </van-tab>
        <van-tab title="处理中" name="处理中">
          <!-- 处理中数据 -->
          <TaskCard :Task_Data="Data.TaskProcessing_Data" />
        </van-tab>
        <van-tab title="已处理" name="已处理">
          <TaskCard :Task_Data="Data.TaskProcessed" />
          <!-- 已完成数据 -->
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped></style>
