import { getPage } from "@/api/BUSI_TASK_INFO";
import { ref ,computed } from "vue";
import { store } from "@/store/index";
import { useCachedViewStore } from "@/store/modules/cachedView";
import { showNotify, closeNotify } from "vant";
const Task_Datas = useCachedViewStore(store);

export const HanderTaskManage = () => {
  const Data = ref({
    TaskNoStart_Data: [],
    TaskProcessing_Data: [],
    TaskProcessed: [],
    TaskTotals: undefined,
    title_name: {
      未开始: undefined,
      处理中: undefined,
      已处理: undefined
    }
  });

  const TaskNoStart = {
    dealUserNo: Task_Datas.User_info.userNo,
    pageIndex: 1,
    pageSize: 5,
    // createdName:"申丽",
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
      const response = await getPage(data);

      Data.value.TaskNoStart_Data = response.data;
      console.log(Data.value.TaskNoStart_Data, "未开始");

      Data.value.title_name["未开始"] = response.totalCount;
    } catch (error) {
      console.error("Error handling task not started:", error);
    }
  };
  const handerTaskProcessing = async (data?: any) => {
    try {
      const response = await getPage(data);

      Data.value.TaskProcessing_Data = response.data;
      console.log(Data.value.TaskProcessing_Data, "处理中");

      Data.value.title_name["处理中"] = response.totalCount;
    } catch (error) {
      console.error("Error handling task not started:", error);
    }
  };

  const handerTaskProcessed = async (data?: any) => {
    try {
      const response = await getPage(data);

      Data.value.TaskProcessed = response.data;
      console.log(Data.value.TaskProcessed, "已处理");

      Data.value.title_name["已处理"] = response.totalCount;
    } catch (error) {
      showNotify("系统异常");
    }
  };

  /**
   * 获取所有类型的任务数量
   * @param data
   */
  const handerTaskTotals = async (data?: any) => {
    const response = await getPage(data);

    // const result = response.totalCount;
    Data.value.TaskTotals = response.totalCount
    // Data.value.TaskTotals = response.totalCount;
    // console.log(Data.value.TaskTotals,99999999999999);
    
    // return response.totalCount
    
  };
  // const test1 = computed(() => {
  //   return author.books.length > 0 ? 'Yes' : 'No'
  // })
  return {
    Data,
    TaskTotal,
    TaskNoStart,
    TaskProcessing,
    TaskProcessed,
    handerTaskNoStart,
    handerTaskProcessing,
    handerTaskProcessed,
    handerTaskTotals
  };
};
