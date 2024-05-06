import { http } from "@/utils/http";
import { store } from "@/store/index";
import { useCachedViewStore } from "@/store/modules/cachedView";
const { User_info } = useCachedViewStore(store);
type ListResult = {
  code: number;
  message: string;
  data: Array<any>;
  totalCount: number;
  id: string;
};

export function getPage(params?: object) {
  return http.request({
    url: `/hpcc-qms/v1_0/module/busi-task-info-v1/page`,
    method: "get",
    params
  });
}

//查询详情
export function getProblemDetail(data: string): Promise<ListResult> {
  return http.request({
    url: `/hpcc-qms/v1_0/module/qms-qua-check-issue-v1/detail?id=` + data,
    method: "get"
  });
}

//质量问题编辑修改接口
export const putProblem = data => {
  return http.request({
    url: `/hpcc-qms/v1_0/module/qms-qua-check-issue-v1/update`,
    method: "put",
    data
  });
};

export const getImg = (params?: object) => {
  return http.request({
    url: `/hpcc-qms/v1_0/module/file-info-v1/imgShow`,
    method: "get",
    params,
    responseType: "blob"
  });
};

// 通用文件上传接口

export const getcommUploadFile = (params?: object) => {
  return http.request({
    url: `/hpcc-qms/v1_0/module/file-info-v1/commUploadFile`,
    method: "post",
    params
  });
};

// 上传文件接口
export function uploadFile(data?: any) {
  data.append("userNo", "1950");
  return http.request({
    url: `/hpcc-qms/v1_0/module/file-info-v1/commUploadFile`,
    method: "post",
    data
    // hideLoading: true,
    // onUploadProgress: uploadProgressEvent
  });
}

export function getjsApi(data?: string) {
  return http.request({
    url: `/hpcc-tms/v1_0/module/qywx/getJsApiConfigParam?url=` + data,
    method: "get"
    // hideLoading: true,
    // onUploadProgress: uploadProgressEvent
  });
}
