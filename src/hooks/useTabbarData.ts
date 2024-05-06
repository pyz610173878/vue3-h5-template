import { ref } from "vue";

/**
 * 主页 Tabbar 数据
 */

export const GetTabbarData = () => {
  const tabbarDatas = ref([
    {
      icon: `planning`,
      title: "质量策划",
      to: {
        name: "Planning"
      }
    },
    {
      icon: `control`,
      title: "质量控制",
      to: {
        name: "Control"
      }
    },
    {
      icon: `active`,
      title: "质量活动",
      to: {
        name: "Active"
      }
    },
    {
      icon: `magnifying_Glass`,
      title: "质量检查",
      to: {
        name: "Check"
      }
    },
    {
      icon: `statistics`,
      title: "质量统计",
      to: {
        name: "Statistics"
      }
    },
    {
      icon: `equipment`,
      title: "特种设备",
      to: {
        name: "Equipment"
      }
    }
  ]);
  const TabbarControl = ref([
    {
      icon: `QuantityPlanning`,
      title: "质量计划",
      to: {
        name: ""
      }
    },
    {
      icon: `QuantityPlanner`,
      title: "质量策划",
      to: {
        name: ""
      }
    },
    {
      icon: `Meritocracy`,
      title: "创优计划",
      to: {
        name: ""
      }
    },
    {
      icon: `PlanningExcellence`,
      title: "创优策划",
      to: {
        name: ""
      }
    }
  ]);
  const TabbarControls = ref([
    {
      icon: `WorkResponsibilityStatement`,
      title: "质量工作责任书",
      to: {
        name: ""
      }
    },
    {
      icon: `InstitutionalDocuments`,
      title: "质量制度文件",
      to: {
        name: ""
      }
    },
    {
      icon: `RiskIdentificationApproval`,
      title: "风险辨识审批",
      to: {
        name: ""
      }
    },
    {
      icon: `Approvalmeasuringinstruments`,
      title: "计量器具审批",
      to: {
        name: ""
      }
    }
  ]);
  const SpecialManagement = ref([
    {
      icon: `特种设备质量文件`,
      title: "特种设备质量文件",
      to: {
        name: ""
      }
    },
    {
      icon: `质量保证体系人员`,
      title: "质量保证体系人员",
      to: {
        name: ""
      }
    },
    {
      icon: `特种设备检查`,
      title: "特种设备检查",
      to: {
        name: ""
      }
    }
  ]);

  const quantityData = ref([
    {
      icon: `QC注册`,
      title: "QC注册",
      to: {
        name: ""
      }
    },
    {
      icon: `QC成果评审`,
      title: "QC成果评审",
      to: {
        name: ""
      },
      
    },
    {
      icon: `质量问题台账`,
      title: "质量问题台账",
      to: {
        name: ""
      },
      
    }
  ]);
  const StatisticsData = ref([
    {
      icon: `质量月报`,
      title: "质量月报",
      to: {
        name: ""
      }
    },
    {
      icon: `质量季报`,
      title: "质量季报",
      to: {
        name: ""
      }
    },
    {
      icon: `质量半年报`,
      title: "质量(半)年报",
      to: {
        name: ""
      }
    },
    {
      icon: `质量管理自评`,
      title: "质量管理自评",
      to: {
        name: ""
      }
    }
  ]);
  return {
    tabbarDatas,
    TabbarControl,
    TabbarControls,
    SpecialManagement,
    StatisticsData,
    quantityData
  };
};
