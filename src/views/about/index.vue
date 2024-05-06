<script setup lang="ts" name="About">
import {
  reactive,
  ref,
  onMounted,
  computed,
  onBeforeMount,
  getCurrentInstance
} from "vue";
import List from "@/components/List/index.vue";
import { useRouter } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
import ExamineDisplay from "@/components/Examine/ExamineDisplay.vue";
import { GetExamine } from "@/hooks/useCoustomGrid";
import Vnode from "@/components/Vnode.js";
import Vnodes from "@/components/Vnode/index.vue";
import UserContainer from "@/components/UserInfo/index.vue";
import Rate from "@/components/demo/index.vue";
import Abutton from "@/components/Button/BasicButton.vue";
import * as ww from "@wecom/jssdk";
import { getWxaccess_tokens } from "@/api/WX/index";
const UserRef = ref(null);
import { HanderTaskManage } from "@/hooks/useTaskManage";
const { List_Data, Examine_Data, handlerGetExamine, handlerGetTaskData } =
  GetExamine();

const {
  Data: Task_Total,
  TaskNoStart,
  TaskProcessing,
  TaskProcessed,
  handerTaskNoStart,
  handerTaskProcessing,
  handerTaskProcessed
} = HanderTaskManage();

// const JSAPI_TICKET =
//   "kgt8ON7yVITDhtdwci0qefeUsuSneTWbWauUftXAStn8jTmccsMzBXZvYIYhiCIV-J6nYkN29LYv7OPV5Fes3A";
// kgt8ON7yVITDhtdwci0qefeUsuSneTWbWauUftXAStn8jTmccsMzBXZvYIYhiCIV-J6nYkN29LYv7OPV5Fes3A
// x6ar/0JsDAh2mley+ROlZg==
// ww.register({
//   corpId: "ww85ce872989bdb5cb",
//   jsApiList: ["chooseImage"],
//   getConfigSignature() {
//     console.log(123);
//     return ww.getSignature(JSAPI_TICKET);
//   }
// });

// 调用 register 后可以立刻调用其他 JS 接口
// ww.chooseImage({
//   count: 1,
//   sizeType: ["original"],
//   sourceType: ["album", "camera"],
//   defaultCameraMode: "batch",
//   isSaveToAlbum: true
// });

const test = ref("审批管理");
const number = ref(5);
const store = useCachedViewStore();

const Task_management = ref("任务管理");

const Datass = ref({
  Examine_Data: [
    { total: 0, type: ["未完成", "处理中", "已处理"], name: "未完成" },
    { total: 0, type: ["未完成", "处理中", "已处理"], name: "处理中" },
    { total: 0, type: ["未完成", "处理中", "已处理"], name: "已处理" }
  ]
});
const test2 = () => {
  console.log("是否执行！");
  UserRef.value.testfuction();
};

onMounted(() => {
  // List_Data.value.Task_Datas = response1.Task_Datas
});

onBeforeMount(() => {
  const { List_Data } = GetExamine();
  handlerGetExamine();
  handlerGetTaskData();
  const { User_info } = store;
});

const test1 = ref("任务管理");
</script>

<template>
  <div class="pb-4 sl-user-container">
    <div
      class="flex items-center justify-between bg-white p-5 sl-user-car border-solid border--2 rounded-lg"
    >
      <!-- 1. 个人信息页面  -->
      <div class="flex">
        <img
          :src="store.User_info.avatar"
          alt=""
          class="rounded-full w-11 h-11 mr-4"
        />
        <div class="mt-1">
          <p class="font-normal text-black text-base leading-4">
            {{ store.User_info.userid }}
          </p>
          <p class="mt-2 sl--text-10">
            {{ store.User_info.userNo }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 审批管理 -->
  <div class="">
    <div class="mb-4 p-4 h-28 border-solid border--2 rounded-lg bg-white">
      <div>
        <p class="mb-2 font-bold text-base leading-4 text-black">
          {{ test }}
        </p>
      </div>
      <ExamineDisplay :Examine_Data="Examine_Data.Data" :column-num="5" />
    </div>
  </div>
  <!-- 任务管理 -->
  <div class="bg-white p-4 h-28 border-solid border--2 rounded-lg mb-4">
    <p class="mb-4 font-bold text-base leading-4 text-black">
      {{ Task_management }}
    </p>

    <ExamineDisplay
      v-model="number"
      :Examine_Data="Datass.Examine_Data"
      :column-num="3"
      :to="`/tasklist?name=`"
    >
    </ExamineDisplay>
  </div>
  <UserContainer ref="UserRef"> </UserContainer>
</template>

<style scoped>
.sl-user-car {
  height: 91px;
}

ul {
  display: flex;
}
</style>
