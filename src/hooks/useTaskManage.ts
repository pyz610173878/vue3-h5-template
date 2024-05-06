import { getPage } from "@/api/BUSI_TASK_INFO";
import { ref, computed } from "vue";
import { store } from "@/store/index";
import { useCachedViewStore } from "@/store/modules/cachedView";
import {
  showSuccessToast,
  closeToast,
  showFailToast,
  showLoadingToast
} from "vant";
import { number } from "echarts";
const Task_Datas = useCachedViewStore(store);

export const HanderTaskManage = () => {
  const Data = ref({
    TaskNoStart_Data: [],
    TaskProcessing_Data: [],
    TaskProcessed: [],
    TaskTotals: 0,
    title_name: {
      未开始: undefined,
      处理中: undefined,
      已处理: undefined
    },
    Task_Data:{
      Examine_Data: [{ total: undefined, type: ["任务"], name: "任务管理" }]
    }
  });

  const Task_Type = ref(["未开始", "处理中", "已处理"]);
  // const response1 = {
  //   Task_Datas: [
  //     { 未开始: undefined, type: Task_Type.value, name: "未开始" },
  //     { 处理中: undefined, type: Task_Type.value, name: "处理中" },
  //     { 已处理: undefined, type: Task_Type.value, name: "已处理" }
  //   ]
  // };

  const TaskNoStart = {
    dealUserNo: Task_Datas.User_info.userNo,
    pageIndex: 1,
    pageSize: 5,
    // createdName:"申丽",
    status: 0
  };

  const TaskNoStartTotal = {
    dealUserNo: Task_Datas.User_info.userNo,
    status: 0
  };



  const TaskTotal = {
    dealUserNo: Task_Datas.User_info.userNo
  };

  // 搜索信息的时候，

  const TaskProcessing = {
    dealUserNo: Task_Datas.User_info.userNo,
    pageIndex: 1,
    pageSize: 5,
    status: 1
  };

  const TaskProcessed = {
    dealUserNo: Task_Datas.User_info.userNo,
    pageIndex: 1,
    pageSize: 5,
    status: 2
  };
  const handerTaskNoStart = async (data: object) => {
    try {
      const response: any = await getPage(data);

      Data.value.TaskNoStart_Data = response.data;
      Data.value.title_name["未开始"] = response.totalCount;
      Data.value.Task_Data.Examine_Data[0].total = response.totalCount
      Task_Datas.Task_Total.TaskNoStart = response.totalCount;
    } catch (error) {
      console.log(error);
    }
  };
  const handerTaskProcessing = async (data?: any) => {
    try {
      const response: any = await getPage(data);

      Data.value.TaskProcessing_Data = response.data;

      Data.value.title_name["处理中"] = response.totalCount;
      Task_Datas.Task_Total.TaskProcessing = response.totalCount;
      // response1.Task_Datas["处理中"] = response.totalCount;
    } catch (error) {
      console.error("Error handling task not started:", error);
    }
  };

  const handerTaskProcessed = async (data?: any) => {
    try {
      const response: any = await getPage(data);

      Data.value.TaskProcessed = response.data;
      console.log(Data.value.TaskProcessed, "已处理");

      Data.value.title_name["已处理"] = response.totalCount;
      Task_Datas.Task_Total.TaskProcessed = response.totalCount;
      // response1.Task_Datas["已处理"] = response.totalCount;
    } catch (error) {
      showNotify("系统异常");
    }
  };

  /**
   * 获取所有类型的任务数量
   * @param data
   */
  const handerTaskTotals = async (data?: any) => {
    
    if (Task_Datas.User_info.userNo != "") {
      
      const response = await getPage(data);
      // const result = response.totalCount;
      Data.value.TaskTotals = response.totalCount;
    } 
  };
  // const test1 = computed(() => {
  //   return author.books.length > 0 ? 'Yes' : 'No'
  // })
  return {
    Data,
    TaskTotal,
    TaskNoStart,
    TaskNoStartTotal,
    TaskProcessing,
    TaskProcessed,
    handerTaskNoStart,
    handerTaskProcessing,
    handerTaskProcessed,
    handerTaskTotals
  };
};
