declare module "@salesforce/apex/lwcSobjectLookupController.lookUp" {
  export default function lookUp(param: {searchTerm: any, objectName: any, filter: any, callingFromGridEditUtility: any, respectSRules: any, isUseSOSL: any, orderBy: any, recordLimit: any, isTypeListBuilder: any, fieldsToDisplay: any, whereClause: any}): Promise<any>;
}
declare module "@salesforce/apex/lwcSobjectLookupController.lookupSearchForGridEditUtility" {
  export default function lookupSearchForGridEditUtility(param: {searchString: any, sObjectAPIName: any, filterCondition: any, respectSharingRules: any, isUseSOSL: any, orderBy: any, recordLimit: any}): Promise<any>;
}
