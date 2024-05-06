import { http } from "@/utils/http";
// import { httpes } from "@/utils/http";
type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
  totalCount: number;
};

/**
 *
 * @param data
 * @returns  获取企业微信 access_token
 */
export function getWxaccess_tokens(params) {
  return http.request({
    url: "/cgi-bin/gettoken",
    method: "get",
    params
  });
}

// /**
//  *
//  * @param 企业微信 access_token
//  * @returns  获取企业的 jsapi_ticket
//  */
// export function getWxjsapi_ticket(params){
//     return httpes.request({
//       url: "/cgi-bin/get_jsapi_ticket",
//       method: "get",
//       params
//     });
//   }

//   /**
//  *
//  * @param 企业微信 access_token
//  * @returns  获取企业的 jsapi_ticket
//  */
// export function getWxjsapi_ticketApply(params){
//     return https.request({
//       url: "/cgi-bin/ticket/get?type=agent_config",
//       method: "get",
//       params
//     });
//   }
