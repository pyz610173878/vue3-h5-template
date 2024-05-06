import { defineStore } from "pinia";
import { store } from "@/store";
import type { toRouteType } from "@/router";
import { number } from "echarts";

/**
 * pinia对象
 */
export const useCachedViewStore = defineStore({
  id: "cached-view",
  state: () => ({
    // 缓存页面 keepAlive
    cachedViewList: [] as string[],
    Code: "" as string,
    User_info: {
      errcode: 0 as number,
      userid: "" as string,
      mobile: "" as string,
      gender: "" as string,
      email: "" as string,
      avatar: "" as string,
      qr_code: "" as string,
      biz_mail: "" as string,
      address: "" as string,
      userNo: "3289" as string,
      qywxToken: "" as string
    },
    Wx_Info: {
      corpid: "",
      corpsecret: "",
      signature: "",
      timestamp: ""
    },
    Task_Total: {
      TaskNoStart: number,
      TaskProcessing: number,
      TaskProcessed: number
    },
    AgentId: 1000011,

    access_token: "" as string,
    jsapi_ticket:
      "kgt8ON7yVITDhtdwci0qefeUsuSneTWbWauUftXAStnRymeJH1HvOQRFC7Cf6WzYpBOxc6JZu1LJscV0xFqB0Q",
    jsapi_ticketApply: "yrXDQoKwRJCReg5h8uVe8A=="
  }),
  actions: {
    addCachedView(view: toRouteType) {
      // 不重复添加
      if (this.cachedViewList.includes(view.name as string)) return;
      if (!view?.meta?.noCache) {
        this.cachedViewList.push(view.name as string);
      }
    },
    delCachedView(view: toRouteType) {
      const index = this.cachedViewList.indexOf(view.name as string);
      index > -1 && this.cachedViewList.splice(index, 1);
    },
    delAllCachedViews() {
      this.cachedViewList = [] as string[];
    }
  }
});

export function useCachedViewStoreHook() {
  return useCachedViewStore(store);
}
