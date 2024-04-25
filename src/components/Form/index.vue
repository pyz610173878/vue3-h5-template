<template>
  <div class="px-4">
    <NavBar title="质量检查" />
    <div class="mb-4"></div>

    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本信息" name="1">
        <van-form ref="form1">
          <van-cell-group inset>
            <van-field
              v-model="Data.checkName"
              name="用户名"
              label="检查情况："
              placeholder="用户名"
              readonly
            />
            <van-field label="图片照片：" readonly>
              <template #input>
                <div class="sl-image">
                  <van-image
                    width="60"
                    height="50"
                    v-for="file in ImageArry"
                    :key="file.id"
                    :src="file.url"
                    :alt="file.name"
                  />
                </div>
              </template>
            </van-field>
            <van-field
              v-model="Data.specialtyTypeName"
              name="密码"
              label="专业类型："
              readonly
            />
            <van-field
              v-model="Data.specialtyDetailName"
              name="密码"
              label="专业细项："
              readonly
            />
            <van-field
              v-model="Data.checkItemName"
              name="密码"
              label="检查项目："
              readonly
            />
            <van-field name="radio" label="是否违章：">
              <template #input>
                <van-radio-group
                  disabled
                  v-model="Data.violationed"
                  direction="horizontal"
                >
                  <van-radio :name="1">是</van-radio>
                  <van-radio :name="0">否</van-radio>
                </van-radio-group>
              </template>
            </van-field>

            <van-field
              v-model="Data.rectificaSuggestion"
              name="密码"
              label="整改建议："
              readonly
            />
            <van-field
              v-model="Data.rectificaDeadline"
              name="密码"
              label="整改期限："
              readonly
            />
          </van-cell-group>
        </van-form>
      </van-collapse-item>
      <van-collapse-item title="操作" name="2">
        <van-form @failed="onFailed" @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="Data.rectificaUserName"
              :required="true"
              name="rectificaUserName"
              label="整改人：&nbsp;&nbsp;&nbsp;&nbsp;"
              readonly
            />

            <van-field
              autosize
              name="uploader"
              label="整改照片：&nbsp;&nbsp;"
              v-model="Data.rectificaImagesId"
            >
              <!-- 上传图片 -->
              <template #input >
                <div class="sl-uploader" >
                  <van-uploader
                    v-if="query.status != 2"
                    preview-size="60"
                    :after-read="UpdataImage"
                    v-model="fileList"
                    multiple
                  />
                  <div class="sl-image" else>
                  <van-image
                    width="60"
                    height="50"
                    v-for="file in ImageArrys"
                    :key="file.id"
                    :src="file.url"
                    :alt="file.name"
                  />
                </div>
                </div>
                
              </template>
            </van-field>
            <van-field
              autosize
              name="rectificaStatus"
              label="整改状态："
              :required="true"
            >
              <template #input>
                <van-radio-group
                  v-model="Data.rectificaStatus"
                  direction="horizontal"
                >
                  <van-radio :name="1">已整改</van-radio>
                  <van-radio :name="0">未整改</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field
              v-model="Data.rectificaDesc"
              :required="true"
              name="rectificaDesc"
              label="整改说明："
              :readonly="IsReadonly"
              :rules="[{ required: true, message: '请填写整改说明' }]"
            />
            
            <van-field
              v-model="Data.acceptUserName"
              name="验收人"
              disabled
              label="&nbsp;&nbsp;验收人：&nbsp;&nbsp;&nbsp;"
              :readonly="IsReadonly"
              :rules="[{ pattern, message: '请填写正确的验收人姓名' }]"
            />
            <van-field
              :required="true"
              is-link
              v-model="Data.acceptDate"
              name="验收时间"
              label="&nbsp;验收时间："
              placeholder="选择日期"
              @click="showPicker = true"
              :rules="[{ required: true, message: '请填写时间' }]"
            />
            <DataTime
              :values="startTime"
              @changeValue="showPicker = false"
              :showPicker="showPicker"
              @confirm="onConfirm"
            />
            <van-field name="验收状态" label="&nbsp;&nbsp;验收状态：">
              <template #input>
                <van-radio-group
                  v-model="Data.acceptStatus"
                  direction="horizontal"
                >
                  <van-radio :name="1">是</van-radio>
                  <van-radio :name="0">否</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field
              v-model="Data.acceptDesc"
              name="验收说明"
              label="&nbsp;&nbsp;验收说明："
              :readonly="IsReadonly"
              :rules="[{ required: true, message: '请填写验收说明' }]"
            />
          </van-cell-group>
          <div class="sl-button">
            <van-button type="primary" size="normal">取消</van-button>
            <van-button type="primary" size="normal" native-type="submit"
              >提交</van-button
            >
          </div>
          
        </van-form>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts" name="Form">
import { ref, reactive, onBeforeMount, onMounted } from "vue";

import { useRouter, useRoute } from "vue-router";
import { useCachedViewStore } from "@/store/modules/cachedView";
import { HandlerFormData } from "./Formutils";
import { getDate } from "@/utils/common";
import DataTime from "@/components/DataTime/index.vue";
import {
  getcommUploadFile,
  uploadFile,
  getProblemDetail,
  putProblem,
  getImg
} from "@/api/BUSI_TASK_INFO/index";
import {
  showSuccessToast,
  closeToast,
  showFailToast,
  showLoadingToast
} from "vant";
const route = useRoute(); //当前页面的路由信息比如 name path query等
const { query } = route;
const router = useRouter();
const { User_info } = useCachedViewStore();
const { Data } = HandlerFormData();

// 伸缩栏
const activeNames = ref([]);
// 质量任务唯一ID
const busiId = ref("");
// 图片列表
const fileList = ref([]);

// 图片照片
const ImageArry = ref([]);
const ImageArrys = ref([]);
// 表单实例ref
const form1 = ref("");

const pattern = /^[\u4e00-\u9fa5]{2,8}$/;

// 开始时间
const startTime = ref(""); //值定义

/**
 * 上传质量问题图片
 * @param 图片字符串
 */
const UpdataImage = async files => {
  let Form3;
  if (fileList.value.length == 1) {
    Form3 = new FormData();
    Form3.set("files", files.file);
  } else if (fileList.value.length > 1) {
    console.log(fileList.value.length);

    Form3 = new FormData();

    fileList.value.forEach((item, index) => {
      Form3.append("files", item.file);
    });
  }
  let res = "";
  if (fileList.value.length != 0) {
    res = await uploadFile(Form3);
    let arrs = [];
    arrs.push(res.data);
    Data.value.rectificaImagesId = arrs;
  }
};

const onFailed = errorInfo => {
  showSuccessToast("请输入对应信息");
};
// 验收时间函数

const showPicker = ref(false);
const onConfirm = selectedValues => {
  Data.value.acceptDate = selectedValues;
  showPicker.value = false;
};

const IsReadonly = ref(false);

const handlerGetImage = async (data?: any) => {
  try {
    
      const response = await ImgInit(data);
    console.log(Data.value,77777777777777777);
    
      ImageArry.value = response;
      // ImageArrys.value = response;

    
  } catch (error) {
    return false;
  }
};

const handlerGetImages = async (data?: any) => {
  try {
    
      const response = await ImgInit(data);
    
      ImageArrys.value = response;
      // ImageArrys.value = response;

    
  } catch (error) {
    return false;
  }
};


const handlergetProblemDetail = async (data: string) => {
  try {
    const response = await getProblemDetail(data);
    Data.value = response.data;
    handlerGetImage(Data.value.issueImagesId);
    handlerGetImages(Data.value.rectificaImagesId)
  } catch (error) {
    return false;
  }
};
const ImgInit = async (fileN: any) => {
  if (!fileN) return;
  const fileNo = fileN.split(",");
  // 数组字符串

  const getImgBolb = async arr => {
    let list = [];
    if (arr.length == 0) return list;
    const res = await getImg({ fileId: arr[0] });
    const url = URL.createObjectURL(res);

    list.push({
      url,
      name: arr[0],
      fileNo: arr[0],
      id: arr[0]
    });
    const getL = await getImgBolb(arr.slice(1));
    list = [...list, ...getL];
    return list;
  };
  const files = await getImgBolb(fileNo);
  return files;
};

const onSubmit = async values => {
  Data.value.status = 2;
  const res = await putProblem(Data.value);
  console.log("整改状态:::", Data.value.rectificaStatus);
  console.log("验收状态:::", Data.value.acceptStatus);

  if (res.success === true) {
    showLoadingToast({
      message: "提交成功",
      forbidClick: true
    });
    router.push({ path: `/tasklist` });
  }
};

const handerputProblem = async (data?: any) => {
  try {
    const response = await putProblem(data);
    // 提交成功
    // 重置表单
    // 跳转到 tasklist页面
  } catch (error) {
    return false;
  }
};

onBeforeMount(() => {
  // 在这里执行挂载前的操作
  busiId.value = query.busiId;
  handlergetProblemDetail(busiId.value);
});

onMounted(() => {
  // 在这里执行挂载后的操作
});
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
