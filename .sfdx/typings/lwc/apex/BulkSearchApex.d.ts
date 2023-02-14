declare module "@salesforce/apex/BulkSearchApex.getObject" {
  export default function getObject(param: {objectFileds: any}): Promise<any>;
}
declare module "@salesforce/apex/BulkSearchApex.getFields" {
  export default function getFields(param: {objName: any, fields: any}): Promise<any>;
}
declare module "@salesforce/apex/BulkSearchApex.getSearchRecords" {
  export default function getSearchRecords(param: {searchedValues: any, objFields: any, objName1: any}): Promise<any>;
}
