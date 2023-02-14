declare module "@salesforce/apex/CustomDataTableController.getAccounts" {
  export default function getAccounts(): Promise<any>;
}
declare module "@salesforce/apex/CustomDataTableController.getFieldSet" {
  export default function getFieldSet(param: {objectName: any, fieldSetName: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomDataTableController.getDynamicQuery" {
  export default function getDynamicQuery(param: {objectName: any, fieldSetName: any}): Promise<any>;
}
