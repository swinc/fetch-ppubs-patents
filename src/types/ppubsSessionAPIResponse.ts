export type PPubsSessionAPIResponse = {
  userSessionId: number,
  displayName: string,
  userCase: {
    caseId: number,
    userId: number,
    caseName: string,
  }
  /* LOTS OF OTHER STUFF */
}