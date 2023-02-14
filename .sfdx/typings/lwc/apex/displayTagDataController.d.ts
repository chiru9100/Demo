declare module "@salesforce/apex/displayTagDataController.getAccounts" {
  export default function getAccounts(): Promise<any>;
}
declare module "@salesforce/apex/displayTagDataController.getAccountRecord" {
  export default function getAccountRecord(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/displayTagDataController.retrieveContacts" {
  export default function retrieveContacts(param: {accId: any}): Promise<any>;
}
declare module "@salesforce/apex/displayTagDataController.deleteMultipleContactRecord" {
  export default function deleteMultipleContactRecord(param: {conObj: any, accId: any}): Promise<any>;
}
declare module "@salesforce/apex/displayTagDataController.getContactUpdate" {
  export default function getContactUpdate(param: {contId: any, accntId: any}): Promise<any>;
}
