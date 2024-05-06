<!-- 工作台 -->
<template>
  <div>
    <van-collapse v-model="activeNames" ref="collapse">
      <van-collapse-item
        :border="false"
        :title="quality_Data.planning"
        name="1"
        class="sl-collapse--item"
      >
        <template #title>
          <div class="">{{ quality_Data.planning }}</div>
        </template>
        <Todoview :tabbarDatas="tabbarDatas" />
      </van-collapse-item>

      <van-collapse-item :title="quality_Data.control" name="2">
        <template #title>
          <div class="">{{ quality_Data.control }}</div>
        </template>
        <!-- 质量控制 -->
        <Todoview :tabbarDatas="TabbarControl" />
        <div class="mb-4"></div>
        <Todoview :tabbarDatas="TabbarControls" />
      </van-collapse-item>
      <!-- 质量活动 -->
      <van-collapse-item :title="quality_Data.active" name="3">
        <template #title>
          <div class="">{{ quality_Data.active }}</div>
        </template>
        <Todoview :tabbarDatas="quantityData" />
      </van-collapse-item>

      <!-- 质量检查 -->
      <van-collapse-item :title="quality_Data.check" name="4">
        <template #title>
          <div class="">{{ quality_Data.check }}</div>
        </template>
      </van-collapse-item>

      <!-- 质量统计 -->
      <van-collapse-item :title="quality_Data.statistics" name="5">
        <template #title>
          <div class="">{{ quality_Data.statistics }}</div>
        </template>
        <Todoview :tabbarDatas="StatisticsData" />
      </van-collapse-item>

      <!-- 特种设备管理 -->
      <van-collapse-item :title="quality_Data.equipment" name="6">
        <template #title>
          <div class="">{{ quality_Data.equipment }}</div>
        </template>
        <Todoview :tabbarDatas="SpecialManagement" />
      </van-collapse-item>
    </van-collapse>

    <div></div>
  </div>
</template>
<script setup lang="ts" name="tool">
import { defineProps, defineEmits } from "vue";
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { GetTabbarData } from "@/hooks/useTabbarData";
import { useRouter, useRoute } from "vue-router";
import Todoview from "@/components/Todoview/index.vue";
const {
  tabbarDatas,
  TabbarControl,
  TabbarControls,
  SpecialManagement,
  StatisticsData,
  quantityData
} = GetTabbarData(); // 获取tabbar数据
const quality_Data = reactive({
  planning: "质量策划",
  control: "质量控制",
  active: "质量活动",
  check: "质量检查",
  statistics: "质量统计",
  equipment: "特种设备管理"
});
const DataRef = ref();
const route = useRoute();
const activeNames = ref(["2"]);
const collapse = ref(null); //折叠实例ref
const openAll = () => {
  collapse.value.toggleAll(true);
};

onBeforeMount(() => {
  // 在这里执行挂载前的操作

  // console.log(activeNames.value);
  activeNames.value.unshift(route.query.name as string);

  // openAll()
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
});
</script>

<style scoped>
.van-collapse
  .van-collapse-item
  .sl-collapse--item
  .van-cell::v-deep.van-cell--clickable {
  background-color: wheat;
  border-radius: 8px;
  margin-bottom: 10px;
}
.van-collapse-item .van-cell--clickable ::v-deep.sl-collapse--item {
  background-color: wheat;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
