import { ref, reactive } from "vue";
import { getProblemDetail, putProblem } from "@/api/BUSI_TASK_INFO/index";
export const GetForm_Datas = () => {
  const Form_Data = ref({
    Data: [
      { label: "检查情况：", placeholder: "" },
      { label: "问题照片：", placeholder: "" },
      { label: "专业类型：", placeholder: "" },
      { label: "专业细项：", placeholder: "" },
      { label: "是否违章：", placeholder: "" },
      { label: "检查项目：", placeholder: "" },
      { label: "整改建议：", placeholder: "" },
      { label: "整改期限：", placeholder: "" }
    ],
    operation: [
      { label: "整改人：", placeholder: "" },
      { label: "整改照片：", placeholder: "" },
      { label: "整改状态：", placeholder: "" },
      { label: "整改建议：", placeholder: "" },
      { label: "整改时间：", placeholder: "" },
      { label: "验收人：", placeholder: "" },
      { label: "验收状态：", placeholder: "" },
      { label: "验收说明：", placeholder: "" },
      { label: "验收说明：", placeholder: "" }
    ]
  });

  const handlergetProblemDetail = async (data: string) => {
    try {
      const response = await getProblemDetail(data);
    } catch (error) {
      return false;
    }
  };

  return {
    Form_Data
  };
};
