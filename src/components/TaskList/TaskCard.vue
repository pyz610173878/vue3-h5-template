<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults, computed } from "vue";
import { type Task_Props } from "@/components/TaskList/types";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
console.log("🚀 ~ router:", router);

const props = defineProps<{
  Task_Data: Task_Props[];
}>();
// 第一种方式定义了一个数组props，适用于接收多个相同类型props的组件

// const props = defineProps<CardProp>();

// const handerTaskType =  computed ((Status: number) => {
//   return {
//     "status-not-started": Status === 0,
//     "status-in-progress": Status === 1,
//     "status-completed": Status === 2
//   };
// };
const handerTaskColor = status => {
  const status_arr = [
    "status-not-started",
    "status-in-progress",
    "status-completed"
  ];
  return status_arr[status] || undefined;
};

const handerTaskType = status => {
  const status_arr = ["未开始", "处理中", "已处理"];
  return status_arr[status] || undefined;
};

const test1 = (busiId, status) => {
  if (status == 2) {
    router.push({
      path: `/processed`,
      query: { busiId: busiId, status: status }
    });
  } else {
    router.push({ path: `/form`, query: { busiId: busiId, status: status } });
  }
};
</script>
<template>
  <div id="app " class="p--top-20">
    <div
      class="pb-4 px-4"
      v-for="(item, index) in props.Task_Data"
      :key="index"
    >
      <div
        class="card-content rounded-xl h-20 relative"
        @click="test1(item.busiId, item.status)"
      >
        <div class="sl-positions--absolute notice">
          <!-- :class="{ [`sl-background--${item.color}`]: item.color }" -->
          <p
            class="sl-examine--text text-white"
            :class="handerTaskColor(item.status)"
          >
            {{ handerTaskType(item.status) }}
          </p>
        </div>
        <div class="pl-8">
          <div class="absolute sl-icon--circle">
            <span class="relative sl-icon--text">{{ index }}</span>
          </div>

          <!-- 任务名称 -->
          <div class="mb-1">
            <p class="text-sm sl-text--hidden">{{ item.taskName }}</p>
          </div>

          <div class="main-content">
            <p class="sl--text-13 sl-text--hidden">
              发起人：{{ item.createdName }}
            </p>
            <!-- <p>
              <span class="sl-text--green">
                <br>
                {{item.processInstanceStatusStr}}
              </span>
            </p> -->
            <div class="sl-text--datatime float-right mt-2">
              {{ item.createdTime }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-content {
  width: 343px;
  height: 85px;
  padding: 8px 16px 8px 16px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 8px 2px rgba(20, 20, 20, 0.08);
}

.sl-background--green {
  background: #00b58a;
}

.sl-background--blue {
  background: #00b58a;
}

.sl-background--red {
  background: #f56c6c;
}

.sl-background--gray {
  background: #909399;
}

#app {
  background-color: rgba(246, 246, 246, 1);
}

.sl-icon--grey {
  background-color: rgba(0, 181, 138, 1);
}

.sl-icon--blue {
  background-color: rgba(45, 128, 238, 1);
}

.sl-text--hidden {
  max-width: 240px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.notice {
  width: 48px;
  height: 48px;
}

/* 宽度不够会自动换行 */

.sl-examine--text {
  width: 65px;
  -webkit-transform: rotate(53deg);
  transform: rotate(50deg);
  font-size: 13px;
  font-weight: 400;
  line-height: 35px;
  text-align: center;
}

.status-not-started {
  background-color: rgba(0, 181, 138, 1);
}

.status-in-progress {
  background-color: rgba(205, 207, 208, 1);
}

.status-completed {
  background-color: rgba(45, 128, 238, 1);
}
</style>
