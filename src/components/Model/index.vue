<script setup lang="ts">
import { ref, reacitve } from "vue";
const text = ref("整改建议");
const message = ref("");
const isopen = ref(false);

const submit = () => {
  isopen.value = !isopen.value;
};
</script>

<template>
<button @click="submit">确定</button>
  <div class=" w-10/12 rounded-lg  bg-black h-56 centered-div mx-3" v-if="isopen">
    <h3 class="text-center pt-1">{{ text }}</h3>
    <div class="sl-model--container">
      <div class="sl-model--content p-2 bg-slate-200">
        <!-- <textarea class="w-full h-28 rounded-lg p-2 pl-3" placeholder="请输入"> </textarea>
         -->
        <van-cell-group inset>
          <van-field
            v-model="message"
            class="rounded-lg"
            rows="4"
            autosize
            type="textarea"
            maxlength="1000"
            placeholder="请输入"
            show-word-limit
          />
        </van-cell-group>
      </div>
    </div>
    <div class="sl-model--button flex">
      <div class="sl-model--cancel w-1/2 justify-center">
        <van-button type="primary" size="large" @click="submit"
          >取消</van-button
        >
      </div>
      <div class="sl-model--confirm w-1/2">
        <van-button type="primary" size="large" @click="submit"
          >确定</van-button
        >
      </div>
    </div>
  </div>

</template>

<style scoped>
.centered-div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 其他样式，如宽度、高度、背景色等 */
}
</style>
