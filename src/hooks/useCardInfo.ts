import { ref, reactive } from "vue";
import { number } from "echarts";
import {
  GetTodoTask,
  GetDoneTask,
  GetReadingList,
  GetReadoneList,
  GetApplicationList
} from "@/api/ListInfo/index";

export const GetInfoCard = () => {
  const responses = {
    data: [
      {
        title: "炉顶烟气挡板门机械指针指示错误",
        text: "流程类型：重要会议任务工作流程",
        info: "填写信息",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      },
      {
        title: "炉顶烟气挡板门机械指针指示错误",
        text: "流程类型：重要会议任务工作流程",
        info: "填写信息",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      },
      {
        title: "炉顶烟气挡板门机械指针指示错误",
        text: "流程类型：重要会议任务工作流程",
        info: "填写信息",
        time: "2023-04-15 18:00:01",
        accomplish: "已完成"
      }
    ]
  };

  const examine_Data = ref({
    totalCount: undefined,
    card_Data: [],
    title_name: {
      待办: undefined,
      待阅: undefined,
      已办: undefined,
      已阅: undefined,
      申请: undefined
    },
    TaskDone_Data: []
  });

  // 把数据传递到这个对象里面。
  // 下一步呢？
  const Data = ref({
    Notice_Data: [
      {
        id: 1,
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "未读"
      },
      {
        id: 2,
        title: "最新公司“质量文件标准”",
        content: "最新公司“质量最新公司“质量最新...",
        datatime: "2023-04-15 18:00:01",
        type: "已读"
      }
    ]
  });

  /**
   * 处理待办事项列表
   * @returns
   */
  const handlerGetTodoList = (data?: object) => {
    return GetTodoTask(data).then(response => {
      examine_Data.value.card_Data = response.data;
      examine_Data.value.title_name["待办"] = response.totalCount;
    });
  };
  /**
   * 处理已办事项列表
   * @returns
   */
  const handlergetDoneTask = () => {
    return GetDoneTask().then(response => {
      examine_Data.value.TaskDone_Data = response.data;
      examine_Data.value.title_name["已办"] = response.totalCount;
    });
  };
  /**
   * 处理待阅事项列表
   * @returns
   */

  // const handlerGetReadingList = () => {
  //   return GetReadingList().then((response) => {
  //     infoData.category_options = response.data;
  //     //

  //     //
  //   });
  // };
  /**
   * 处理已阅事项列表
   * @returns
   */
  // const handlerGetReadoneList = () => {
  //   return GetReadoneList().then((response) => {
  //     infoData.category_options = response.data;
  //     //

  //     //
  //   });
  // };
  /**
   * 处理申请事项列表
   * @returns
   */
  // const handlerGetApplicationList = () => {
  //   return GetApplicationList().then((response) => {
  //     infoData.category_options = response.data;
  //     //

  //     //
  //   });
  // };

  // 定义一个函数，用来获取数据
  return {
    examine_Data,
    Data,
    handlerGetTodoList,
    handlergetDoneTask
  };
};
