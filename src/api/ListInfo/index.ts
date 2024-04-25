import { http } from "@/utils/http";

type ListResult = {
  code: number;
  message: string;
  data: Array<any>;
  totalCount: number;
};

/**
 * 获取待办事项列表
 * @param data
 * @returns
 */
export function GetTodoTask(data?: object): Promise<ListResult> {
  return http.request({
    url: "/hpcc-qms/v1_0/module/workflow-v1/todoTask",
    method: "post",
    data
  });
}

/**
 * 获取已办事项列表
 * @param data
 * @returns
 */

export function GetDoneTask(data?: any): Promise<ListResult> {
  return http.request({
    url: "hpcc-qms/v1_0/module/workflow-v1/doneTask",
    method: "post",
    data
  });
}
/**
 * 获取待阅事项列表
 * @param data
 * @returns
 */

export function GetReadingList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}
/**
 * 获取已阅事项列表
 * @param data
 * @returns
 */
export function GetReadoneList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}

/**
 * 获取申请事项列表
 * @param data
 * @returns
 */

export function GetApplicationList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}

export function GetNoticeList(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "get",
    data
  });
}

/**
 *  获取质量表单数据
 * @param data 表单数据
 * @returns
 */
export function GetForm(data: string): Promise<ListResult> {
  return http.request({
    url: "/hpcc-qms/v1_0/module/workflow-v1/getFormByFlowId?flowId=" + data,
    method: "get",
    data
  });
}

export function GetProblemDetail(data?: object): Promise<ListResult> {
  return http.request({
    url: "/hpcc-qms/v1_0/module/qms-qua-check-issue-v1/detail?flowId=" + data,
    method: "get",
    data
  });
}
