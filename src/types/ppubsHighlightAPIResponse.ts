/**
 *  Object returned from https://ppubs.uspto.gov//dirsearch-public/patents/[patentGuid]/highlight
*/
export interface PPubsPatentHighlightAPIResponse {
  guid: string
  datePublished: string
  inventionTitle: string
  mainClassificationCode: string
  applicantName: string | null
  assigneeName: string[]
  uspcFullClassificationFlattened: string
  ipcCodeFlattened: string
  cpcInventiveFlattened: string
  cpcAdditionalFlattened: string
  applicationFilingDate: string[]
  relatedApplFilingDate: string[]
  primaryExaminer: string
  applicationNumber: string
  inventorsShort: string
  assigneeCity: string[]
  assigneeState: string[]
  inventorCity: string[]
  inventorState: string[]
  continuityData: string[]
  abstractHtml: string
  descriptionHtml: string
  claimsHtml: string
  briefHtml: string
  backgroundTextHtml: string
  foreignRefGroup: string[]
  otherRefPub: string[]
  usRefGroup: string[]
  inventorsName: string[]
  /* OTHER STUFF */
}
