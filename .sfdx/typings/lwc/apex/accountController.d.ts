declare module "@salesforce/apex/accountController.fetchAccounts" {
  export default function fetchAccounts(): Promise<any>;
}
declare module "@salesforce/apex/accountController.getAccounts" {
  export default function getAccounts(): Promise<any>;
}
declare module "@salesforce/apex/accountController.getAccountRecord" {
  export default function getAccountRecord(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/accountController.getAccountUpdate" {
  export default function getAccountUpdate(param: {accId: any}): Promise<any>;
}
