import axios from 'axios'

import { PPubsSessionAPIResponse } from 'src/types'

/**
 *  Fetch a case id from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  This is used for later search, patent pull calls.
 */
export async function fetchPPubsCaseId(): Promise<number | null> {
  const host = 'https://ppubs.uspto.gov'
  const sessionPath = '/dirsearch-public/users/me/session'

  const data = '-1'
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }

  try {
    const sessionResponse = await axios.post<PPubsSessionAPIResponse>(host + sessionPath, data, config)
    const caseId = sessionResponse.data.userCase.caseId
    return caseId
  } catch (e) {
    // console.error(`Unable to retrieve case id with fetchPPubsCaseId(): ` + e)
    return null
  }
}
