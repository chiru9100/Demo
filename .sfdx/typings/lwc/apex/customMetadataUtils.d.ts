declare module "@salesforce/apex/customMetadataUtils.createUpdateMetadata" {
  export default function createUpdateMetadata(param: {fullName: any, mdtDevName: any, label: any, fieldWithValues: any}): Promise<any>;
}
declare module "@salesforce/apex/customMetadataUtils.checkMdtRecord" {
  export default function checkMdtRecord(param: {label: any}): Promise<any>;
}
declare module "@salesforce/apex/customMetadataUtils.checkDeploymentStatus" {
  export default function checkDeploymentStatus(param: {deployRequestId: any}): Promise<any>;
}
