
<!-- 审批表单未写完 -->
<!-- <template>
  <div class="px-4">
    <NavBar title="审批" />
    <div class="mb-4"></div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本信息" name="1">
        <van-form ref="form1">
          <van-cell-group inset>
            <van-field
              v-model="Data.checkName"
              name="流程类型"
              label="流程类型："
              readonly
            />
            <van-field
              v-model="Data.checkName"
              name="项目名称"
              label="项目名称："
              readonly
            />
            <van-field
              v-model="Data.specialtyTypeName"
              name="所属公司"
              label="所属公司："
              readonly
            />
            <van-field
              v-model="Data.specialtyDetailName"
              name="设计书名称"
              label="设计书名称："
              readonly
            />
            <van-field
              v-model="Data.checkItemName"
              name="设计书编码"
              label="设计书编码："
              readonly
            />

            <van-field
              v-model="Data.rectificaSuggestion"
              name="编制人"
              label="编制人："
              readonly
            />
            <van-field
              v-model="Data.rectificaDeadline"
              name="备注"
              label="备注："
              readonly
            />
            <van-field
              v-model="Data.rectificaDeadline"
              name="发起人"
              label="发起人："
              readonly
            />
            <van-field
              v-model="Data.rectificaDeadline"
              name="发起时间"
              label="发起时间："
              readonly
            />
          </van-cell-group>
        </van-form>
      </van-collapse-item>
      <van-collapse-item title="审批确定" name="2">
        <van-form>
          <van-field name="radio" label="验收状态：">
            <template #input>
              <van-radio-group
                disabled
                v-model="Data.violationed"
                direction="horizontal"
              >
                <van-radio :name="1">已验收</van-radio>
                <van-radio :name="0">未验收</van-radio>
              </van-radio-group>
            </template>
          </van-field>
        </van-form>
      </van-collapse-item>
      <van-collapse-item title="分子公司审批人" name="3">
        <van-form>
            <van-field
              v-model="Data.checkItemName"
              name="管理部室负责人"
              label="管理部室负责人："
              readonly
            />
            <van-field
              v-model="Data.checkItemName"
              name="技术负责人"
              label="技术负责人："
              readonly
            />
        </van-form>
      </van-collapse-item>
      <van-collapse-item title="公司审批人" name="4">
        <van-form>
            <van-field
              v-model="Data.checkItemName"
              name="管理部门负责人"
              label="管理部门负责人："
              readonly
            />
        </van-form>
      </van-collapse-item>
    </van-collapse>
  </div>
</template> -->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted } from "vue";
const activeNames = ref([]);
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
</style>
