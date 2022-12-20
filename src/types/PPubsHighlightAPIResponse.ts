/**
 *  Object returned from https://ppubs.uspto.gov//dirsearch-public/patents/[patentGuid]/highlight
*/
export interface PPubsPatentHighlightAPIResponse {
  guid: `${string}-${string}-${string}`
  publicationReferenceDocumentNumber: string
  compositeId: string | null
  publicationReferenceDocumentNumber1: string | null
  datePublishedKwicHits: unknown
  datePublished: string | null
  inventionTitle: string | null
  type: string | null
  mainClassificationCode: string | null
  applicantName: unknown
  assigneeName: string[] | null
  uspcFullClassificationFlattened: string | null
  ipcCodeFlattened: string | null
  cpcInventiveFlattened: string | null
  cpcAdditionalFlattened: unknown
  applicationFilingDate: string[] | null
  applicationFilingDateKwicHits: unknown
  relatedApplFilingDate: string[] | null
  primaryExaminer: string | null
  assistantExaminer: unknown
  applicationNumber: string | null
  frontPageStart: number | null
  frontPageEnd: number | null
  drawingsStart: number | null
  drawingsEnd: number | null
  specificationStart: number | null
  specificationEnd: number | null
  claimsStart: number | null
  claimsEnd: number | null
  abstractStart: number | null
  abstractEnd: number | null
  bibStart: number | null
  bibEnd: number | null
  certCorrectionStart: number | null
  certCorrectionEnd: number | null
  certReexaminationStart: number | null
  certReexaminationEnd: number | null
  supplementalStart: number | null
  supplementalEnd: number | null
  ptabStart: number | null
  ptabEnd: number | null
  amendStart: number | null
  amendEnd: number | null
  searchReportStart: number | null
  searchReportEnd: number | null
  pageCount: number | null
  pageCountDisplay: string | null
  previouslyViewed: boolean | null
  unused: boolean | null
  imageLocation: string | null
  imageFileName: string | null
  cpcCodes: unknown
  queryId: number | null
  tags: unknown
  inventorsShort: string | null
  familyIdentifierCur: number | null
  familyIdentifierCurStr: string | null
  languageIndicator: string | null
  databaseName: string | null
  dwImageDoctypeList: unknown
  dwImageLocList: unknown
  dwPageCountList: unknown
  dwImageDocidList: unknown
  patentFamilyMembers: unknown
  patentFamilyCountry: unknown
  patentFamilySerialNumber: unknown
  documentIdWithDashesDw: unknown
  pfPublDate: unknown
  pfPublDateKwicHits: unknown
  priorityClaimsDate: string[] | null
  priorityClaimsDateKwicHits: unknown
  pfApplicationSerialNumber: unknown
  pfApplicationDescriptor: unknown
  pfLanguage: unknown
  pfApplicationDate: unknown
  pfApplicationDateKwicHits: unknown
  clippedUri: unknown
  source: unknown
  documentId: string | null
  derwentAccessionNumber: unknown
  documentSize: number | null
  score: number | null
  governmentInterest: unknown
  kindCode: string[] | null
  urpn: string[] | null
  urpnCode: string[] | null
  abstractedPatentNumber: unknown
  assigneeCity: string[] | null
  assigneePostalCode: string[] | null
  assigneeState: string[] | null
  assigneeTypeCode: string[] | null
  curIntlPatentClassificationPrimary: string[] | null
  curIntlPatentClassificationPrimaryDateKwicHits: unknown
  designatedStates: unknown
  examinerGroup: string | null
  issuedUsCrossRefClassification: string[] | null
  jpoFtermCurrent: unknown
  languageOfSpecification: unknown
  chosenDrawingsReference: unknown
  derwentClass: unknown
  inventionTitleHighlights: unknown
  cpcOrigInventiveClassificationHighlights: unknown
  cpcInventiveDateKwicHits: unknown
  cpcOrigAdditionalClassification: unknown
  cpcAdditionalDateKwicHits: unknown
  curIntlPatentClssficationSecHighlights: unknown
  fieldOfSearchClassSubclassHighlights: string[] | null
  cpcCombinationSetsCurHighlights: unknown
  applicantCountry: unknown
  applicantCity: unknown
  applicantState: unknown
  applicantZipCode: unknown
  applicantAuthorityType: unknown
  applicantDescriptiveText: unknown
  applicationSerialNumber: string[] | null
  inventorCity: string[] | null
  inventorState: string[] | null
  inventorPostalCode: string[] | null
  standardTitleTermsHighlights: unknown
  primaryExaminerHighlights: string | null
  continuityData: string[] | null
  inventors: unknown
  uspcFullClassification: unknown
  uspcCodeFmtFlattened: unknown
  ipcCode: unknown
  applicationNumberHighlights: string[] | null
  dateProduced: string | null
  auxFamilyMembersGroupTempPlaceHolder: unknown
  priorityCountryCode: unknown
  cpcCurAdditionalClassification: unknown
  internationalClassificationMain: unknown
  internationalClassificationSecondary: unknown
  internationalClassificationInformational: unknown
  europeanClassification: unknown
  europeanClassificationMain: unknown
  europeanClassificationSecondary: unknown
  lanuageIndicator: unknown
  intlPubClassificationPrimary: string[] | null
  intlPubClassificationPrimaryDateKwicHits: unknown
  intlPubClassificationSecondary: string[] | null
  intlPubClassificationSecondaryDateKwicHits: unknown
  publicationDate: unknown
  derwentWeekInt: number
  derwentWeek: unknown
  currentUsOriginalClassification: string | null
  currentUsCrossReferenceClassification: string[] | null
  locarnoClassification: unknown
  equivalentAbstractText: unknown
  hagueIntlRegistrationNumber: unknown
  hagueIntlFilingDate: unknown
  hagueIntlFilingDateKwicHits: unknown
  hagueIntlRegistrationDate: unknown
  hagueIntlRegistrationDateKwicHits: unknown
  hagueIntlRegistrationPubDate: unknown
  hagueIntlRegistrationPubDateKwicHits: unknown
  curIntlPatentClassificationNoninvention: unknown
  curIntlPatentClassificationNoninventionDateKwicHits: unknown
  curIntlPatentClassificationSecondary: string[] | null
  curIntlPatentClassificationSecondaryDateKwicHits: unknown
  abstractHtml: string | null
  descriptionHtml: string | null
  claimsHtml: string | null
  briefHtml: string | null
  backgroundTextHtml: string | null
  subHeadingM0Html: unknown
  subHeadingM1Html: unknown
  subHeadingM2Html: unknown
  subHeadingM3Html: unknown
  subHeadingM4Html: unknown
  subHeadingM5Html: unknown
  subHeadingM6Html: unknown
  usClassIssued: string | null
  issuedUsDigestRefClassifi: unknown
  datePublYear: string | null
  applicationYear: string | null
  pfDerwentWeekYear: unknown
  pfApplicationYear: unknown
  pfPublYear: unknown
  reissueApplNumber: unknown
  abstractHeader: unknown
  abstractedPublicationDerwent: unknown
  affidavit130BFlag: unknown
  affidavit130BText: unknown
  applicantGroup: unknown
  applicantHeader: unknown
  applicationFilingDateInt: number | null
  applicationFilingDateIntKwicHits: unknown
  applicationRefFilingType: unknown
  applicationReferenceGroup: unknown
  applicationSeriesAndNumber: string | null
  applicationSeriesCode: string | null
  assignee1: unknown
  assigneeDescriptiveText: string[] | null
  patentAssigneeTerms: unknown
  associateAttorneyName: unknown
  attorneyName: unknown
  biologicalDepositInformation: unknown
  applicationType: unknown
  unlinkedDerwentRegistryNumber: unknown
  unlinkedRingIndexNumbersRarerFragments: unknown
  claimStatement: string | null
  claimsTextAmended: unknown
  continuedProsecutionAppl: unknown
  cpcAdditionalLong: unknown
  cpcCisClassificationOrig: unknown
  cpcCombinationClassificationOrig: unknown
  cpcInventive: string[] | null
  cpcInventiveCurrentDateKwicHits: unknown
  cpcAdditional: unknown
  cpcAdditionalCurrentDateKwicHits: unknown
  cpcOrigClassificationGroup: unknown
  curIntlPatentClassificationGroup: unknown
  curUsClassificationUsPrimaryClass: unknown
  curUsClassificationUsSecondaryClass: unknown
  customerNumber: unknown
  depositAccessionNumber: unknown
  depositDescription: unknown
  derwentClassAlpha: unknown
  designatedstatesRouteGroup: unknown
  docAccessionNumber: unknown
  drawingDescription: unknown
  editionField: unknown
  exchangeWeek: unknown
  exemplaryClaimNumber: string[] | null
  familyIdentifierOrig: unknown
  fieldOfSearchCpcClassification: unknown
  fieldOfSearchCpcMainClass: unknown
  fieldOfSearchIpcMainClass: unknown
  fieldOfSearchIpcMainClassSubclass: unknown
  fieldOfSearchSubclasses: string[] | null
  foreignRefGroup: string[] | null
  foreignRefPubDate: string[] | null
  foreignRefPubDateKwicHits: string[] | null
  foreignRefCitationClassification: string[] | null
  foreignRefPatentNumber: string[] | null
  foreignRefCitationCpc: unknown
  foreignRefCountryCode: string[] | null
  iceXmlIndicator: string | null
  internationalClassificationHeader: unknown
  internationalClassificationInformationalGroup: unknown
  intlPubClassificationGroup: string[] | null
  intlPubClassificationNonInvention: unknown
  inventorCitizenship: unknown
  inventorCorrection: unknown
  inventorDeceased: unknown
  inventorStreetAddress: string[] | null
  inventorText: string[] | null
  jpoFiClassification: unknown
  legalRepresentativeCity: unknown
  legalRepresentativeCountry: string | null
  legalRepresentativeName: unknown
  legalRepresentativePostcode: unknown
  legalRepresentativeState: unknown
  legalRepresentativeStreetAddress: unknown
  legalRepresentativeText: unknown
  messengerDocsFlag: unknown
  newRecordPatentDerwent: unknown
  numberOfClaims: string | null
  numberOfDrawingSheets: string | null
  numberOfFigures: string | null
  numberOfPagesInSpecification: unknown
  numberOfPagesOfSpecification: unknown
  objectContents: unknown
  objectDescription: unknown
  parentDocCountry: unknown
  parentGrantDocCountry: unknown
  patentBibliographicHeader: unknown
  pctOrRegionalPublishingSerial: unknown
  pfDerwentWeekNum: unknown
  principalAttorneyName: unknown
  priorityApplicationCountry: unknown
  priorityClaimsCountry: string[] | null
  priorityNumberDerived: string[] | null
  publicationIssueNumber: unknown
  refCitedPatentDocNumber: unknown
  refCitedPatentDocDate: unknown
  refCitedPatentDocKindCode: unknown
  referenceCitedCode: unknown
  referenceCitedGroup: unknown
  referenceCitedSearchPhase: unknown
  referenceCitedText: unknown
  registrationNumber: unknown
  reissueApplCountry: unknown
  reissueParentKind: unknown
  reissueParentNumber: unknown
  reissueParentPubCountry: unknown
  reissuePatentGroup: unknown
  reissuePatentParentStatus: unknown
  reissuedPatentApplCountry: unknown
  reissuedPatentApplKind: unknown
  reissuedPatentApplNumber: unknown
  relatedApplChildPatentCountry: string[] | null
  relatedApplChildPatentName: unknown
  relatedApplChildPatentNumber: string[] | null
  relatedApplCountryCode: unknown
  relatedApplParentGrantPatentKind: unknown
  relatedApplParentGrantPatentName: unknown
  relatedApplParentPatentKind: unknown
  relatedApplParentPatentName: unknown
  relatedApplParentPctDoc: unknown
  relatedApplParentStatusCode: unknown
  relatedApplPatentNumber: string[] | null
  relatedApplRelatedPub: unknown
  relatedApplTypeOfCorrection: unknown
  rule47Flag: unknown
  selectedDrawingCharacter: unknown
  selectedDrawingFigure: unknown
  statutoryInventionText: unknown
  termOfExtension: string | null
  termOfPatentGrant: unknown
  titleTermsData: unknown
  additionalIndexingTerm: unknown
  applicationYearSearch: string | null
  pfApplicationYearSearch: unknown
  assigneeCountry: string[] | null
  certOfCorrectionFlag: unknown
  citedPatentLiteratureAddressInformation: unknown
  citedPatentLiteratureClassificationIpc: unknown
  citedPatentLiteratureOrganizationName: unknown
  citedPatentLiteratureRefNumber: unknown
  crossReferenceNumber: unknown
  country: string | null
  cpiManualCodes: unknown
  cpiSecondaryAccessionNumber: unknown
  curIntlPatentAllClassificationLong: unknown
  currentUsOriginalClassificationLong: unknown
  datePublSearch: string | null
  datePublYearSearch: string | null
  epiManualCodes: unknown
  fieldOfSearchMainClassNational: string[] | null
  inventorCountry: string[] | null
  ipcAllMainClassification: string[] | null
  issuedUsClassificationFull: string[] | null
  issuedUsDigestRefClassification: string[] | null
  jpoFiCurrentAdditionalClassification: unknown
  jpoFiCurrentInventiveClassification: unknown
  legalFirmName: string[] | null
  locarnoMainClassification: unknown
  nonCpiSecondaryAccessionNumber: unknown
  objectId: unknown
  otherRefPub: string[] | null
  pageNumber: unknown
  patentAssigneeCode: unknown
  patentAssigneeNameTotal: unknown
  patentFamilyDate: unknown
  patentFamilyDocNumber: unknown
  patentFamilyKind: unknown
  patentFamilyKindCode: unknown
  patentFamilyLanguage: unknown
  patentFamilyName: unknown
  patentNumberOfLocalApplication: unknown
  pct102eDate: unknown
  pct371c124Date: unknown
  pct371c124DateKwicHits: unknown
  pctFilingDate: unknown
  pctFilingDateKwicHits: unknown
  pctFilingDocCountryCode: unknown
  pctFilingKind: unknown
  pctFilingNumber: unknown
  pctName: unknown
  pctOrRegionalPublishingCountry: unknown
  pctOrRegionalPublishingKind: unknown
  pctOrRegionalPublishingName: unknown
  pctOrRegionalPublishingText: unknown
  pctPubDate: unknown
  pctPubDateKwicHits: unknown
  pctPubDocIdentifier: unknown
  pctPubNumber: unknown
  pfApplicationDateSearch: unknown
  pfApplicationType: unknown
  pfDerwentWeekDate: unknown
  pfPublDateSearch: unknown
  pfPublDateSearchKwicHits: unknown
  pfPublYearSearch: unknown
  polymerIndexingCodes: unknown
  polymerMultipunchCodeRecordNumber: unknown
  polymerMultipunchCodes: unknown
  priorPublishedDocCountryCode: string[] | null
  priorPublishedDocDate: string[] | null
  priorPublishedDocDateKwicHits: unknown
  priorPublishedDocIdentifier: string[] | null
  priorPublishedDocKindCode: string[] | null
  priorPublishedDocNumber: string[] | null
  priorityApplYear: string[] | null
  priorityApplicationDate: unknown
  priorityClaimsDateSearch: unknown
  priorityClaimsDocNumber: string[] | null
  priorityPatentDid: unknown
  priorityPatentNumber: unknown
  ptabCertFlag: unknown
  pubRefCountryCode: unknown
  pubRefDocNumber: string | null
  pubRefDocNumber1: string | null
  publicationData: unknown
  recordPatentNumber: unknown
  reexaminationFlag: unknown
  refCitedOthers: unknown
  refCitedPatentDocCountryCode: unknown
  refCitedPatentDocName: unknown
  refCitedPatentRelevantPassage: unknown
  reissueParentIssueDate: unknown
  reissuedPatentApplFilingDate: unknown
  relatedAccessionNumbers: unknown
  relatedApplChildPatentDate: unknown
  relatedApplFilingDateKwicHits: unknown
  relatedApplNumber: string[] | null
  relatedApplPatentIssueDate: unknown
  relatedApplPatentIssueDateKwicHits: unknown
  relatedDocumentKindCode: unknown
  securityLegend: unknown
  sequenceCwu: unknown
  sequenceListNewRules: unknown
  sequenceListOldRules: unknown
  sequencesListText: unknown
  standardTitleTerms: unknown
  supplementalExaminationFlag: unknown
  usBotanicLatinName: unknown
  usBotanicVariety: unknown
  usRefClassification: string[] | null
  usRefCpcClassification: unknown
  usRefGroup: string[] | null
  usRefIssueDate: string[] | null
  usRefIssueDateKwicHits: string[] | null
  usRefPatenteeName: string[] | null
  volumeNumber: unknown
  correspondenceNameAddress: unknown
  correspondenceAddressCustomerNumber: unknown
  ibmtdbAccessionNumber: unknown
  inventorsName: string[] | null
  applicationKindCode: string | null
  inventorNameDerived: unknown
  intlPubClassificationClass: string[] | null
  issuedUsOrigClassification: string | null
  curCpcSubclassFull: string[] | null
  cpcCurAdditionalClass: unknown
  cpcCurInventiveClass: string[] | null
  cpcCurClassificationGroup: string[] | null
  curCpcClassificationFull: string[] | null
  cpcCombinationClassificationCur: unknown
  cpcCombinationTallyCur: unknown
  intlFurtherClassification: unknown
  currentUsPatentClass: string[] | null
  curIntlPatentClassifictionPrimaryDateKwicHits: unknown
  curIntlPatentClssifSecHlights: unknown
  internationalClassificationInfom: unknown
  cpcOrigInventvClssifHlghts: unknown
  idWithoutSolrPartition: string | null
  descriptionStart: number
  descriptionEnd: number
  publicationReferenceDocumentNumberOne: string | null
}
