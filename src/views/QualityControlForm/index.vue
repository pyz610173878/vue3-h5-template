<template>
  <div class="px-4">
    <NavBar title="质量控制" />
    <div class="mb-4"></div>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="基本信息" name="1">
        <van-form ref="form1">
          <van-cell-group inset>
            <van-field
              required
              name="用户名"
              label="所属公司："
              placeholder="请选择"
              readonly
            />
            <van-field
              required
              name="用户名"
              label="项目名称："
              placeholder="用户名"
              readonly
            />
            <van-field
              required
              name="用户名"
              label="图片类型："
              placeholder=""
              readonly
            /><van-field
              required
              name="用户名"
              label="专业类型："
              placeholder=""
              readonly
            />
            <van-field
              name="用户名"
              label="单位工程："
              placeholder=""
              readonly
            />
            <van-field name="用户名" label="分项：" placeholder="" readonly />
            <van-field name="用户名" label="分部：" placeholder="" readonly />
          </van-cell-group>
        </van-form>
      </van-collapse-item>
      <van-collapse-item title="工程亮点" name="2">
        技术无非就是那些开发它的人的共同灵魂。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const activeName = ref("1");
</script>

<style scoped>
.sl-button {
  margin-top: 1.5rem;
}

.sl-button :deep(.van-button) {
  width: 40%;
  height: 32px;
}

.van-collapse-item :deep(.van-cell) {
  margin-bottom: 10px;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: rgba(45, 128, 238, 1);
  border-radius: 10px;
  padding: 12px 17px;
}

.sl-uploader :deep(.van-uploader) {
  top: -17px;
}

/* 图片位置 */

.sl-image :deep(.van-image) {
  top: -15px;
}
</style>
