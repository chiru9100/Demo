declare module "@salesforce/apex/sendNewEmailApex.getFolders" {
  export default function getFolders(): Promise<any>;
}
declare module "@salesforce/apex/sendNewEmailApex.getEmailTemplate" {
  export default function getEmailTemplate(param: {selectedFolder: any}): Promise<any>;
}
declare module "@salesforce/apex/sendNewEmailApex.getObjectEmails" {
  export default function getObjectEmails(param: {selectedObj: any}): Promise<any>;
}
declare module "@salesforce/apex/sendNewEmailApex.getEmailTempSubject" {
  export default function getEmailTempSubject(param: {selectedEmailTemp: any}): Promise<any>;
}
declare module "@salesforce/apex/sendNewEmailApex.sendEmailToUser" {
  export default function sendEmailToUser(param: {subject: any, ccEmail: any, body: any, toAddress: any}): Promise<any>;
}
