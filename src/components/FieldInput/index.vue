<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeMount, computed } from "vue";
import { GetInfoCard } from "@/hooks/useCardInfo";
import { GetTodoTask } from "@/api/ListInfo/index";
import { getPage } from "@/api/BUSI_TASK_INFO";
import { useCachedViewStore } from "@/store/modules/cachedView";
import type { FormInstance } from "vant";
import { HanderTaskManage } from "@/hooks/useTaskManage";
const { User_info } = useCachedViewStore();
// 获取审批管理卡片数据

const {
  Data,
  TaskNoStart,
  TaskProcessing,
  TaskProcessed,
  handerTaskNoStart,
  handerTaskProcessing,
  handerTaskProcessed
} = HanderTaskManage();

const Notice_Datas = reactive({
  flowCode: "", //流程编码
  flowCurrTaskId: 0, //流程当前环节id
  flowId: "", //流程ID
  flowInstanceNo: "", //流程实例编号
  flowNo: "", //流程编号
  reason: "", // 操作原因
  title: "", // 流程标题
  userName: "", //用户名称
  userNo: "", //用户编号
  data: "",
  text: "共有条待办数据",
  createdName: ""
});

const emit = defineEmits(["response"]);
const formRef = ref<FormInstance>();

// const onSubmit = values => {
//   const {examine_Data.value.card_Data} = GetTodoTask(value)
//   console.log(examine_Data.value.card_Data,'测试测试');
//   // 数据拿到了，但是数据如何传递到父组件呢？
// };

const onSubmit = async values => {
  const request = {
    dealUserNo: User_info.userNo,
    createdName: Notice_Datas.createdName
  };

  let result = await getPage(request);

  
  // console.log("🚀 ~ onSubmit ~ r:", r)
  
  emit("response", result.data);

  // 我需要进行二次筛选。
  // 如果仅仅只是搜索名字，那么已处理的任务也会被渲染出来。
};

onMounted(() => {
  // 挂载之前的操作
});
onBeforeMount(() => {});
</script>

<template>
  <div>
    <van-form @submit="onSubmit" ref="formRef">
      <van-cell-group inset>
        <van-field
          @keyup.enter="onSubmit"
          center
          v-model="Notice_Datas.createdName"
          class="sl-field--content"
          name="问题描述"
          left-icon="search"
          :border="true"
          placeholder="请输入问题描述"
        >
          <template #button>
            <van-button
              class="sl-button--width"
              hairline
              size="small"
              type="primary"
              native-type="submit"
              round
              >搜索</van-button
            >
          </template>
        </van-field>
        <div class="mt-2 mb-2">
          <p class="text-center text-sm font-normal">
            <van-icon name="notes-o" size="1.25rem" />
            <slot name="examine_totalCount"> </slot>
          </p>
        </div>
        <van-divider
          :style="{
            color: '#FFFFFF',
            borderColor: '#E1E1E1',
            padding: '0 0',
            hairline: false
          }"
        />
      </van-cell-group>
    </van-form>
  </div>
</template>

<style scoped>
.van-cell ::v-deep.sl-field--content {
  height: 40px;
  margin-top: 15px;
  border-radius: 50px;
  background-color: #f7f8fa;
}

/* 深度选择器  */
.van-field :deep(.van-field__left-icon) {
  margin-left: 10px;
}

.van-field__body
  .van-field__button
  .van-button--hairline
  ::v-deep.sl-button--width {
  width: 50px;
  height: 30px;
}

/* 穿透的对象是要你自己定义的class属性。
   2. 穿透的前缀是 ::v-deep
    3. 穿透的对象是要你自己定义的class属性
*/
</style>
