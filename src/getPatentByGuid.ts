import axios from 'axios'

import { PPubsPatentHighlightAPIResponse } from 'src/types'

/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/ 
 *  @param {string} patentGuid - the guid string obtainable with PPubs Search query
 *  @returns {Promise} - resolves to object with type PPubsPatentHighlightAPIResponse, or
 *    rejects promise if bad patent number or error on retrieval
 */
export async function getPatentByGuid(patentGuid: string): Promise<PPubsPatentHighlightAPIResponse> {
  const url = 'https://ppubs.uspto.gov/dirsearch-public/patents/' +
    patentGuid + '/highlight?queryId=0&source=USPAT&includeSections=true&uniqueId='

  const highlightResponse = await axios.get(url)
  return highlightResponse.data
}
