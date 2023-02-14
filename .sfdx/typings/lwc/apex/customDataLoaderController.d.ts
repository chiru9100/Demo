declare module "@salesforce/apex/customDataLoaderController.getUploadApplicationRecords" {
  export default function getUploadApplicationRecords(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.getMappingFields" {
  export default function getMappingFields(param: {csvObjectLabel: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.getCSVFileUploadObject" {
  export default function getCSVFileUploadObject(param: {csvObjectLabel: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.insertRecords" {
  export default function insertRecords(param: {recordList: any, objectApiName: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.fetchAllRecords" {
  export default function fetchAllRecords(param: {csvObjectLabel: any, filterType: any, filterCondition: any, recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.uploadFile" {
  export default function uploadFile(param: {files: any, recordId: any, csvObjectLabel: any, contentDocumentType: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.getDocumentTypeList" {
  export default function getDocumentTypeList(param: {csvObjectLabel: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.getObjectType" {
  export default function getObjectType(param: {objId: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.fetchDropZoneMdtObject" {
  export default function fetchDropZoneMdtObject(param: {label: any}): Promise<any>;
}
declare module "@salesforce/apex/customDataLoaderController.getObjFields" {
  export default function getObjFields(param: {objName: any, parentObjName: any}): Promise<any>;
}
