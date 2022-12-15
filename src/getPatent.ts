import { fetchCaseId } from './helpers/fetchCaseId'
import { searchPatents } from './searchPatents'
import { getPatentByGuid } from './getPatentByGuid'

import { PPubsPatentHighlightAPIResponse } from 'src/types'

/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  @param {string} patentNum - the patent number to fetch
 *  @returns {Promise} - resolves to PPubsPatentHighlightAPIResponse type, or
 *      rejects promise if bad patent number or error on retrieval
 */
export async function getPatent (patentNum: string): Promise<PPubsPatentHighlightAPIResponse> {
  const caseId = await fetchCaseId()

  const searchQuery = patentNum + '.pn.'
  const searchResults = await searchPatents(searchQuery, caseId)

  const patentGuid = searchResults.patents[0]?.guid
  if (typeof patentGuid !== 'string') {
    throw new Error(`Could not extract guid field from search API response for ${patentNum}. Attempt resulted in ${typeof patentGuid}.`)
  }
  const patentResult = await getPatentByGuid(patentGuid)

  return patentResult
}
