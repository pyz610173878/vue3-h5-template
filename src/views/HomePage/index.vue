<template>
  <div class="--SL-homepage--container">
    <div class="mb-3"></div>
    <Echart></Echart>
    <div class="mb-6"></div>
    <div>
      <Todoview :tabbarDatas="tabbarDatas" />
    </div>
    <div class="sl-gird--container">
      <!-- 待办列表 -->

      <div class="--SL-card--container">
        <ExamineDisplay :column-num="1" :to="'/approvalList?name=待办'">
          <template #total> 0 </template>
          <template #type> 待办 </template>
        </ExamineDisplay>
      </div>

      <div class="--SL-card--container">
        <ExamineDisplay :column-num="1" :to="'/approvalList?name=待阅'">
          <template #total>
            {{ 0 }}
          </template>
          <template #type> 待阅 </template>
        </ExamineDisplay>
      </div>

      <div class="--SL-card--container">
        <ExamineDisplay :column-num="1" :to="'/tasklist'">
          <template #total>
            {{ Task_Totals.TaskTotals }}
          </template>

          <template #type> 任务 </template>
        </ExamineDisplay>
      </div>

      <div class="--SL-card--container">
        <ExamineDisplay :column-num="1" :to="'/tasklist'">
          <template #total>
            {{ 0 }}
          </template>

          <template #type> 提醒 </template>
        </ExamineDisplay>
      </div>
    </div>

    <p class="--SL-caption-small">
      {{ HomePage.notice }}
    </p>

    <div>
      <van-skeleton :row="3" :loading="loading">
        <!-- 只渲染三条 -->
        <Notice :notice_data="Data.Notice_Data" class="px-0"> </Notice>
      </van-skeleton>
    </div>
    {{}}
  </div>
</template>
<script setup lang="ts" name="HomePage">
import {
  reactive,
  ref,
  onMounted,
  computed,
  onBeforeMount,
  getCurrentInstance
} from "vue";
import Todoview from "@/components/Todoview/index.vue";
import Notice from "@/components/Notice/index.vue";
import { GetNoticeInfo } from "@/hooks/useNoticeinfo";
import { GetTabbarData } from "@/hooks/useTabbarData";
import { HanderTaskManage } from "@/hooks/useTaskManage";
const {
  Data: Task_Totals,
  TaskNoStartTotal,
  handerTaskTotals
} = HanderTaskManage();
const { Data, handlerGetNoticeList } = GetNoticeInfo(); // 获取通知公告数据
const { tabbarDatas } = GetTabbarData(); // 获取tabbar数据

const loading = ref(true);

const HomePage = reactive({
  notice: "通知公告"
});

setTimeout(() => {
  loading.value = false;
  // false  不进行显示
}, 1500);

onBeforeMount(() => {
  handerTaskTotals(TaskNoStartTotal);
  handlerGetNoticeList();
});

onMounted(() => {});
</script>

<style scoped>
.van-cell ::v-deep.sl-field--content {
  border-radius: 50px;
  height: 32px;
}

.van-field ::v-deep.sl-field--content .van-field__left-icon {
  margin-left: 10px;
}
</style>
