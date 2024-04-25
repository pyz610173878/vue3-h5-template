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
import MyModal from "./mymodal.vue";
import Abutton from "@/components/Button/BasicButton.vue";
import * as ww from '@wecom/jssdk'
const UserRef = ref(null);

const { List_Data, Examine_Data, handlerGetExamine, handlerGetTaskData } =
  GetExamine();
  // alert(ww)

  console.log(ww);
  
const test = ref("审批管理");
const number = ref(5);
const store = useCachedViewStore();

const Task_management = ref("任务管理");

const msg = ref("hello");
//   groceryList = ref([
//     { id: 1, text: "代办" },
//     { id: 2, text: "待阅" },
//     { id: 3, text: "已办" },
//     { id: 4, text: "已阅" },
//     { id: 5, text: "申请" }
//   ]),
//   test1 = ref("任务管理"),
const Task_Type = ref(["未开始", "处理中", "已处理"]);
const User_Data = reactive({
  user: [
    {
      errcode: 0 as number,
      userid: "" as string,
      mobile: "" as string,
      gender: "" as string,
      email: "" as string,
      avatar: "" as string,
      qr_code: "" as string,
      biz_mail: "" as string,
      address: "" as string,
      userNo: "" as string,
      qywxToken: "" as string
    }
  ]
});

//   groceryList3 = ref([
//     { id: 2, text: "我的提醒" },
//     { id: 2, text: "我的消息" }
//   ],
// )
// const Data = ref({
//   Examine_Data: [
//     { total: 5, type: ["待办", "待阅", "已办", "已阅"], name: "待办" },
//     { total: 6, type: ["待办", "待阅", "已办", "已阅"], name: "待阅" },
//     { total: 7, type: ["待办", "待阅", "已办", "已阅"], name: "已办" },
//     { total: 10, type: ["待办", "待阅", "已办", "已阅"], name: "已阅" }
//   ]
// });

const test2 = () => {
  console.log("是否执行！！！！！！！！！！！！！");

  UserRef.value.testfuction();
};

onMounted(() => {
  // const { Data } = GetNoticeInfo();
  // handlerGetNoticeList();
  // const result = getCode(code);
  // const store = useCachedViewStore();
  // store.Token = result;
});

onBeforeMount(() => {
  const { List_Data } = GetExamine();
  handlerGetExamine();
  handlerGetTaskData();
  const { User_info } = store;
  console.log("🚀 ~ onBeforeMount ~ User_info:", User_info);
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

      <div>
        <van-icon name="arrow" class="" />
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
      :Examine_Data="List_Data.Task_Datas"
      :column-num="3"
    />
  </div>
  <UserContainer ref="UserRef"> </UserContainer>

  <!-- 我的提醒 -->
  <!-- <div class="">
    <div
      class="bg-white px-4 p-4 sl-user-car border-solid border--2 rounded-lg"
    >
    <div class="mb-2 w-full bg-white flex justify-between items-center">
      <div class="flex  ">
        <img src="" alt="" class="w-5 h-5 mr-2">
    
    <p>  我的提醒</p>
      </div>
      <div>
         <span>22</span>
         <van-icon name="arrow" class="" />
      </div>
  
    </div>
    <van-divider :style="{ color: '#f5f5f5', borderColor: '#f5f5f5'}"/>
   

    <div class="mt-3 w-full bg-white flex justify-between items-center">
      <div class="flex">
        <img src="" alt="" class="w-5 h-5 mr-2">
    
    <p>  我的提醒</p>
      </div>
      <div>
         <span>22</span>
         <van-icon name="arrow" class="" />
      </div>
  
    </div>
    
  </div>
  </div> -->

  <!-- 尝试封装成一个组件。提供插槽
  图标
  文字
  箭头 可自定义
  -->
  <!-- <div class="px-4 bg-white w-full h-28 rounded-lg">
    <div class="h-1/2 py-4 bg-white flex justify-between items-center">
      <div class="flex">
        <img src="" alt="" class="w-5 h-5 mr-2" />

        <p>我的提醒</p>
      </div>
      <div>
        <span>22</span>
        <van-icon name="arrow" class="" />
      </div>
      
    </div>

    
    
    <div class="h-1/2 py-4 bg-white flex justify-between items-center">
      <div class="flex">
        <img src="" alt="" class="w-5 h-5 mr-2" />

        <p>我的消息</p>
      </div>
      <div>
        <span>22</span>
        <van-icon name="arrow" class="" />
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.sl-user-car {
  height: 91px;
}

ul {
  display: flex;
}
</style>
