import { get } from "vant/es/utils";
import { ref } from "vue";
import { store } from "@/store/index";
import { useCachedViewStore } from "@/store/modules/cachedView";
const Task_Datas = useCachedViewStore(store);
const types = ref(["待办", "待阅", "已办", "已阅", "申请"]);
/**
 * 获取待办列表和任务列表数据
 * @returns
 */
export const GetExamine = () => {
  const response = {
    Examine_Data: [
      { total: 0, type: types.value, name: "待办" },
      { total: 0, type: types.value, name: "待阅" },
      { total: 0, type: types.value, name: "已办" },
      { total: 0, type: types.value, name: "已阅" },
      { total: 0, type: types.value, name: "申请" }
    ]
  };

  const Task_Type = ref(["未开始", "处理中", "已处理"]);
  const response1 = {
    Task_Datas: [
      {
        total: Task_Datas.Task_Total.TaskNoStart,
        type: Task_Type.value,
        name: "未开始"
      },
      {
        total: Task_Datas.Task_Total.TaskProcessing,
        type: Task_Type.value,
        name: "处理中"
      },
      {
        total: Task_Datas.Task_Total.TaskProcessed,
        type: Task_Type.value,
        name: "已处理"
      }
    ]
  };

  const List_Data = ref({
    Task_Datas: []
  });

  const Examine_Data = ref({
    Data: []
  });
  const handlerGetExamine = () => {
    // return GetExamine().then((response) => {
    //     List_Data.value.Examine_Data = response.data;
    // })
    Examine_Data.value.Data = response.Examine_Data;
  };
  const handlerGetTaskData = () => {
    // return GetTaskData().then((response) => {
    //     List_Data.value.Examine_Data = response.data;
    // })
    List_Data.value.Task_Datas = response1.Task_Datas;
  };

  return {
    List_Data,
    Examine_Data,
    handlerGetExamine,
    handlerGetTaskData
  };
};
