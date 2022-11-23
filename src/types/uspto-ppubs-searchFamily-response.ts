export type PPubsSearchFamilyAPIResponse = {
  numFound: number,
  perPage: number,
  page: number,
  totalPages: number,
  totalResults: number,
  query: {
    id: number,
    caseId: number,
    numResults: number
  }
  /* LOTS OF OTHER STUFF */
  patents: Array<PPubsSearchFamilyPatentData>
}

type PPubsSearchFamilyPatentData = {
  guid: string,
  datePublished: string,
  inventionTitle: string,
  mainClassificationCode: string,
  assigneeName: string
  /* LOTS OF OTHER STUFF */
}