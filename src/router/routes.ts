import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage/index.vue";
import shenpi from "@/views/shenpi/index.vue";
import planning from "@/views/QualityControl/planning/index.vue";
import control from "@/views/control/index.vue";
import check from "@/views/check/index.vue";
import statistics from "@/views/statistics/index.vue";
import active from "@/views/active/index.vue";
import equipment from "@/views/equipment/index.vue";
import approvalList from "@/views/ApprovalList/index.vue";
import BlankPage from "@/views/BlankPage/index.vue";
import Approvalform from "@/components/Approvalforms/index.vue";

// 路由配置 name 路径 component 组件 meta 元信息
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "BlankPage" },
    children: [
      {
        path: "homepage",
        name: "HomePage",
        component: HomePage,
        meta: {
          title: "主页"
        }
      },
      {
        path: "todo",
        name: "Todo",
        component: () => import("@/views/Todo/index.vue"),
        meta: {
          title: "待办"
        }
      },
      {
        path: "toRead",
        name: "ToRead",
        component: () => import("@/views/ToRead/index.vue"),
        meta: {
          title: "待阅"
        }
      },
      {
        path: "todone",
        name: "ToDone",
        component: () => import("@/views/ToDone/index.vue"),
        meta: {
          title: "已办"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工作台"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "我的"
        }
      },
      {
        path: "todo",
        name: "Todo",
        component: () => import("@/views/Todo/index.vue"),
        meta: {
          title: "待办"
        }
      }
    ]
  },
  // 审批管理
  {
    path: "/shenpi",
    name: "shenpi",
    component: shenpi,
    children: [
      {
        path: "shenpi1",
        name: "shenpi1",
        component: () => import("@/views/shenpi/shenpi1/index.vue"),
        meta: {
          title: "审批1"
        }
      },
      {
        path: "shenpi2",
        name: "shenpi2",
        component: () => import("@/views/shenpi/shenpi2/index.vue"),
        meta: {
          title: "审批2"
        }
      },
      {
        path: "shenpi3",
        name: "shenpi3",
        component: () => import("@/views/shenpi/shenpi3/index.vue"),
        meta: {
          title: "审批3"
        }
      }
    ]
  },
  {
    path: "/planning",
    name: "Planning",
    component: planning
  },
  {
    path: "/control",
    name: "Control",
    component: control
  },
  {
    path: "/active",
    name: "Active",
    component: active
  },
  {
    path: "/check",
    name: "Check",
    component: check
  },
  {
    path: "/approvalforms",
    name: "Approvalforms",
    component: Approvalform,
    meta: {
      title: "审批表单"
    }
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: statistics
  },
  {
    path: "/equipment",
    name: "Equipment",
    component: equipment
  },
  {
    path: "/approvalList",
    name: "ApprovalList",
    component: approvalList,
    meta: {
      title: "审批管理"
    }
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("@/components/Form/index.vue"),
    meta: {
      title: "质量检测"
    }
  },
  {
    path: "/qualitycontrolform",
    name: "QualityControlForm",
    component: () => import("@/views/QualityControlForm/index.vue"),
    meta: {
      title: "质量控制"
    }
  },
  {
    path: "/rectificationform",
    name: "RectificationForm.vue",
    component: () => import("@/components/Form/RectificationForm.vue"),
    meta: {
      title: "质量整改表单"
    }
  }, {
    path: "/processed",
    name: "Processed",
    component: () => import("@/views/QualityControlForm/ProcessedForm.vue"),
    meta: {
      title: "质量检查已处理表单"
    }
  },
  {
    path: "/tasklist",
    name: "TaskList",
    //  props: true, // 开启路由参数传参
    component: () => import("@/views/TaskList/index.vue"),
    meta: {
      title: "任务管理"
    }
  },
  {
    path: "/mynews",
    name: "NyNew",
    component: () => import("@/views/MyNew/index.vue"),
    meta: {
      title: "我的消息"
    }
  },
  {
    path: "/myreminder",
    name: "MyReminder",
    component: () => import("@/views/MyReminder/index.vue"),
    meta: {
      title: "我的提醒"
    }
  },
  {
    path: "/BlankPage",
    name: "BlankPage",
    component: () => import("@/views/BlankPage/index.vue"),
    meta: {
      title: "空白页"
    }
  }
];

export default routes;
