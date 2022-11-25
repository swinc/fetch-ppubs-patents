/**
 *  Object returned from https://ppubs.uspto.gov/dirsearch-public/users/me/session
*/
export interface PPubsSessionAPIResponse {
  userSessionId: number
  displayName: string
  userCase: {
    caseId: number
    userId: number
    caseName: string
  }
  /* OTHER STUFF */
}
