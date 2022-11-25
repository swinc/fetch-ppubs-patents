import axios from 'axios'

import { PPubsSessionAPIResponse } from '../../types'

/**
 *  Fetch a case id from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  This is used for later search and patent fetch calls.
 *  @returns {Promise} resolves to caseId or rejects with error
 */
export async function fetchCaseId(): Promise<number> {
  const url = 'https://ppubs.uspto.gov/dirsearch-public/users/me/session'

  const data = '-1'
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }
  const sessionResponse = await axios.post<PPubsSessionAPIResponse>(url, data, config)

  const caseId = sessionResponse.data.userCase.caseId
  return caseId
}
