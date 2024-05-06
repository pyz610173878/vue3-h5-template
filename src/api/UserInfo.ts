import { http } from "@/utils/http";

type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
  totalCount: number;
  data: any;
};

/**
 * 获取微信用户数据权限密钥
 * @param data 后端返回的 Code(Token)
 * @returns  微信用户的个人信息：图片 用户名 手机号...
 */
export function getUserCode(data?: string): Promise<ListResult> {
  return http.request({
    url: `/hpcc-qms/v1_0/module/qywx/getUserInfo?code=` + data,
    method: "get"
  });
}

export function getDatail(data?: number): Promise<ListResult> {
  return http.request({
    url: "/hpcc-qms/v1_0/module/workflow-v1/detail",
    method: "get",
    data
  });
}

export function getNotice(data?: number): Promise<ListResult> {
  return http.request({
    url: "/hpcc-qms/v1_0/module/workflow-v1/detail",
    method: "post",
    data
  });
}
