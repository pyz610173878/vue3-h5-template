export interface TaskInfo_Props {
  label: string;
  placeholder: string;
  checkName: string; //检查名称
  issueImagesId: string; //问题图片ids(多个逗号隔开)
  specialtyTypeName: string; //专业类型
  specialtyDetailName: string; //专业细项
  checkItemName: string; //检查项目
  violationed: number; // 是否违章（0：否；1：是）
  rectificaSuggestion: string; //整改建议
  rectificaDeadline: string; //整改期限
  // 操作
  rectificaUserName: string; //整改人
  rectificaImagesId: []; //问题图片ids(多个逗号隔开)
  rectificaStatus: string; //整改状态
  rectificaDesc: string; //整改说明
  acceptDate: string; //验收时间
  acceptUserName: string; //验收人
  acceptStatus: string; //验收状态
  acceptDesc: string; //验收说明
  status: number;
}

// 流程类型这些都是固定的。

export interface Welcome {
  data: Datum[];
  errCode: string;
  errMessage: string;
  success: boolean;
}

export interface Datum {
  acceptDate: string;
  acceptDesc: string;
  acceptStatus: number;
  acceptUserName: string;
  acceptUserNo: string;
  belongOrgCode: string;
  belongOrgName: string;
  checkCycle: string;
  checkCycleCode: string;
  checkDate: string;
  checkId: string;
  checkItemCode: string;
  checkItemName: string;
  checkLevel: string;
  checkName: string;
  checkNameCode: string;
  checkStatus: string;
  checkTypeCode: string;
  checkTypeName: string;
  checkUserName: string;
  checkUserNo: string;
  createdBy: string;
  createdName: string;
  createdTime: string;
  deleted: number;
  fileCount: number;
  fileNo: string;
  id: string;
  issueImagesId: string;
  mntCategoryCode: string;
  mntCategoryName: string;
  projectCode: string;
  projectName: string;
  rectificaDate: string;
  rectificaDeadline: string;
  rectificaDesc: string;
  rectificaImagesId: string;
  rectificaStatus: number;
  rectificaSuggestion: string;
  rectificaUserName: string;
  rectificaUserNo: string;
  refCount: number;
  remark: string;
  respOrgCode: string;
  respOrgName: string;
  respUserName: string;
  respUserNo: string;
  specialtyDetailCode: string;
  specialtyDetailName: string;
  specialtyTypeCode: string;
  specialtyTypeName: string;
  subCategoryCode: string;
  subCategoryName: string;
  updatedBy: string;
  updatedName: string;
  updatedTime: string;
  version: number;
  violationDesc: string;
  violationLevelCode: string;
  violationLevelName: string;
  violationed: number;
}

