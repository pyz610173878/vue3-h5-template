<script setup lang="ts" name="">
import { ref, reactive, onBeforeMount, onMounted, watch, computed } from "vue";
import { getCode } from "@/utils/validate";
import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
import { getUserCode } from "@/api/UserInfo";
const router = useRouter();
const store = useCachedViewStore();
const Data = reactive({});
const DataRef = ref();
const navigateToHomePage = () => {
  router.push({ path: "/homepage" });
};
onBeforeMount(() => {
  // 在这里执行挂载前的操作

  const GetUserCode = () => {
    const codes = window.location.href;
    const code = getCode(codes);
    getUserCode(code).then(res => {
      console.log(res, "res");
      const data = res.data;
      console.log(data, "data");

      store.User_info = data;
      // 要把这个 data 对象存储到 pinna 中。
      console.log(store.User_info.qywxToken, "Token123");
      console.log(store.User_info, "用户信息");
    });
  };
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
