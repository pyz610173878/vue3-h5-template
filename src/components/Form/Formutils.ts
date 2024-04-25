import {
  getcommUploadFile,
  uploadFile,
  getProblemDetail,
  putProblem,
  getImg
} from "@/api/BUSI_TASK_INFO/index";

import { ref } from "vue";
import { type TaskInfo_Props } from "./types";
export function HandlerFormData() {
  const fileList = ref([]);

  // 表单数据
  const Data = ref<TaskInfo_Props>();
  async function UpdataImage(files) {
    let Forms;
    if (fileList.value.length == 1) {
      Forms = new FormData();
      Forms.set("files", files.file);
    } else if (fileList.value.length > 1) {
      Forms = new FormData();
      fileList.value.forEach((item, index) => {
        Forms.append("files", item.file);
      });
    }
    let res = "";
    if (fileList.value.length != 0) {
      res = await uploadFile(Forms);
      const arrs = [];
      arrs.push(res.data);
      Data.value.rectificaImagesId = arrs;
    }
  }
  return {
    fileList,
    Data,
    UpdataImage
  };
}
