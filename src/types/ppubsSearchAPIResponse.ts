/**
 *  Object and types returned from https://ppubs.uspto.gov/dirsearch-public/searches/searchWithBeFamily
*/
export type PPubsSearchWithBeFamilyAPIResponse = {
  numFound: number,
  perPage: number,
  page: number,
  totalPages: number,
  totalResults: number,
  query: {
    id: number,
    caseId: number,
    numResults: number,
    q: string,
    queryName: string,
    userEnteredQuery: string
    /* OTHER STUFF */
  }
  /* OTHER STUFF */
  patents: Array<PPubsSearchWithBeFamilyPatentData>
}

type PPubsSearchWithBeFamilyPatentData = {
  guid: string,
  publicationReferenceDocumentNumber: string,
  compositeId: string,
  publicationReferenceDocumentNumber1: string,
  datePublishedKwicHits: unknown,
  datePublished: string,
  inventionTitle: string,
  type: string,
  mainClassificationCode: string,
  applicantName: string|null,
  assigneeName: Array<string>|null,
  uspcFullClassificationFlattened: string|null,
  ipcCodeFlattened: string|null,
  cpcInventiveFlattened: string|null,
  cpcAdditionalFlattened: string|null,
  applicationFilingDate: Array<string>,
  applicationFilingDateKwicHits: unknown,
  relatedApplFilingDate: Array<string>|null,
  primaryExaminer: string|null,
  assistantExaminer: string|null,
  applicationNumber: string|null,
  frontPageStart: number,
  frontPageEnd: number,
  drawingsStart: number,
  drawingsEnd: number,
  specificationStart: number,
  specificationEnd: number,
  claimsStart: number,
  claimsEnd: number,
  abstractStart: number,
  abstractEnd: number,
  bibStart: number,
  bibEnd: number,
  certCorrectionStart: number,
  certCorrectionEnd: number,
  certReexaminationStart: number,
  certReexaminationEnd: number,
  supplementalStart: number,
  supplementalEnd: number,
  ptabStart: number,
  ptabEnd: number,
  amendStart: number,
  amendEnd: number,
  searchReportStart: number,
  searchReportEnd: number,
  pageCount: number,
  pageCountDisplay: string,
  previouslyViewed: boolean,
  unused: boolean,
  imageLocation: string,
  imageFileName: string,
  cpcCodes: string|null,
  queryId: string|null,
  tags: string|null,
  inventorsShort: string,
  familyIdentifierCur: number,
  familyIdentifierCurStr: unknown,
  languageIndicator: string,
  databaseName: string,
  dwImageDoctypeList: unknown,
  dwImageLocList: unknown,
  dwPageCountList: unknown,
  dwImageDocidList: unknown,
  patentFamilyMembers: unknown,
  patentFamilyCountry: unknown,
  patentFamilySerialNumber: unknown,
  documentIdWithDashesDw: unknown,
  pfPublDate: unknown,
  pfPublDateKwicHits: unknown,
  priorityClaimsDate: Array<string>|null,
  priorityClaimsDateKwicHits: unknown,
  pfApplicationSerialNumber: unknown,
  pfApplicationDescriptor: unknown,
  pfLanguage: unknown,
  pfApplicationDate: unknown,
  pfApplicationDateKwicHits: unknown,
  clippedUri: unknown,
  source: unknown,
  documentId: string,
  derwentAccessionNumber: unknown,
  documentSize: number,
  score: number,
  governmentInterest: unknown,
  kindCode: unknown,
  urpn: unknown,
  urpnCode: unknown,
  descriptionStart: number,
  descriptionEnd: number, 
  publicationReferenceDocumentNumberOne: string
}