<script lang="ts" setup>
import { defineComponent, defineProps, withDefaults } from "vue";
import { type CardProp, CardTypecolor } from "@/components/InfoCard/type";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const props = defineProps<{
  card_Data: CardProp[];
}>();
// 第一种方式定义了一个数组props，适用于接收多个相同类型props的组件

// const props = defineProps<CardProp>();

const handerStringInArray = (str: string) => {
  const arr = ["COMMIT", "REVOKE", "START", "SUSPEND", "ACTIVE", "BACK"];
  const a = "已审批";
  const b = "审批中";
  const result = arr.includes(str);
  if (result === true) {
    return a;
  } else {
    return b;
  }
};

const test1 = () => {
  router.push({ path: "/approvalforms" });
};
</script>
<template>
  <div id="app " class="p--top-20" @click="test1">
    <div
      class="pb-4 px-4"
      v-for="(item, index) in props.card_Data"
      :key="index"
    >
      <div class="card-content rounded-xl h-20 relative">
        <div
          class="--SL-rectangles-rotate notice"
          :class="{ [`sl-background--${item.color}`]: item.color }"
        >
          <p
            class="sl-examine--text text-white"
            :class="
              handerStringInArray(item.processInstanceStatus) === '已审批'
                ? 'sl-icon--grey'
                : 'sl-notice--type-blue'
            "
          >
            {{ handerStringInArray(item.processInstanceStatus) }}
          </p>
        </div>
        <div class="pl-8">
          <!-- 圆圈索引值 -->
          <div class="absolute sl-icon--circle">
            <span class="relative sl-icon--text">{{ index }}</span>
          </div>

          <!-- 主题 -->
          <div class="mb-1">
            <p class="text-sm">{{ item.processDefinitionName }}</p>
          </div>

          <div class="main-content">
            <p class="sl--text-13 sl-text--hidden">
              流程类型：{{ item.processInstanceTitle }}
            </p>
            <!-- <p>
              <span class="sl-text--green">
                <br>
                {{item.processInstanceStatusStr}}
              </span>
            </p> -->
            <div class="sl-text--datatime float-right mt-2">
              {{ item.createTime }}
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
</style>
