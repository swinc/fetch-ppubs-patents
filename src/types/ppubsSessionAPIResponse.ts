/**
 *  Object returned from https://ppubs.uspto.gov/dirsearch-public/users/me/session
*/
export type PPubsSessionAPIResponse = {
  userSessionId: number,
  displayName: string,
  userCase: {
    caseId: number,
    userId: number,
    caseName: string,
  }
  /* OTHER STUFF */
}