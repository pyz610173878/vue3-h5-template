<script setup lang="ts" name="BlankPage">
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { getCode } from "@/utils/validate";
import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
import { getUserCode } from "@/api/UserInfo";
import { error } from "console";
const router = useRouter();
const store = useCachedViewStore();
const Data = reactive({});
const DataRef = ref();
const navigateToHomePage = () => {
  router.push({ path: "/homepage" });
};

navigateToHomePage();
const GetUserCode = () => {
  console.log("是否生效");
  const codes = window.location.href;
  const code = getCode(codes);
  console.log("🚀 ~ GetUserCode ~ code:", code);
  return getUserCode(code).then(response => {
    console.log(response, "res");
    const data = response.data;
    console.log(data, "data");
    store.User_info = data;
    // 要把这个 data 对象存储到 pinna 中。
    console.log(store.User_info.qywxToken, "Token123");
    console.log(store.User_info, "用户信息");
  });
};
onBeforeMount(() => {
  // 在这里执行挂载前的操作

  GetUserCode();
});

watch(DataRef, (newVal, oldVal) => {
  // 在这里执行挂载前的操作
});
onMounted(() => {
  // 在这里执行挂载后的操作
  navigateToHomePage();
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
