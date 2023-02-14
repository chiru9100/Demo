declare module "@salesforce/apex/ListBuilderController.createRelationTagItem" {
  export default function createRelationTagItem(param: {selectedRelationshipIds: any, tagId: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.getTagRelatedRelationships" {
  export default function getTagRelatedRelationships(param: {tagId: any, label: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.getRelationsByTagName" {
  export default function getRelationsByTagName(param: {tagName: any, label: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.unassignRelationship" {
  export default function unassignRelationship(param: {relList: any, tagId: any, label: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.createRelTagItem" {
  export default function createRelTagItem(param: {relaIds: any, tagId: any, label: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.getFieldsFromMdt" {
  export default function getFieldsFromMdt(param: {label: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.getDynamicQuery" {
  export default function getDynamicQuery(param: {label: any, whereClause: any, idList: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.getData" {
  export default function getData(param: {label: any, idList: any, tagId: any}): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.getCustomSettings" {
  export default function getCustomSettings(): Promise<any>;
}
declare module "@salesforce/apex/ListBuilderController.getDomain" {
  export default function getDomain(): Promise<any>;
}
