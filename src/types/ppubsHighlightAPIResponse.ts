/**
 *  Object returned from https://ppubs.uspto.gov//dirsearch-public/patents/[patentGuid]/highlight
*/
export type PPubsPatentHighlightAPIResponse = {
    guid: string,
    datePublished: string,
    inventionTitle: string,
    mainClassificationCode: string,
    applicantName: string | null,
    assigneeName: Array<string>,
    uspcFullClassificationFlattened: string,
    ipcCodeFlattened: string,
    cpcInventiveFlattened: string,
    cpcAdditionalFlattened: string,
    applicationFilingDate: Array<string>,
    relatedApplFilingDate: Array<string>,
    primaryExaminer: string,
    applicationNumber: string,
    inventorsShort: string,
    assigneeCity: Array<string>,
    assigneeState: Array<string>,
    inventorCity: Array<string>,
    inventorState: Array<string>,
    continuityData: Array<string>,
    abstractHtml: string,
    descriptionHtml: string,
    claimsHtml: string,
    briefHtml: string,
    backgroundTextHtml: string,
    foreignRefGroup: Array<string>,
    otherRefPub: Array<string>,
    usRefGroup: Array<string>,
    inventorsName: Array<string>
    /* OTHER STUFF */
}