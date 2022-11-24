import axios from 'axios'

import { PPubsSearchFamilyAPIResponse } from 'src/types'
import { PPubsPatentHighlightAPIResponse } from 'src/types'

/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/ 
 *  Requires official guid string obtainable with PPubs Search query.
 */
export async function fetchPPubsPatent(patentGuid: string): Promise<PPubsPatentHighlightAPIResponse | null> {
  const host = 'https://ppubs.uspto.gov'
  const highlightPath = '/dirsearch-public/patents/' + patentGuid + '/highlight?queryId=0&source=USPAT&includeSections=true&uniqueId='

  try {
    const highlightResponse = await axios.get(host + highlightPath)
    return highlightResponse.data
  } catch (e) {
    // console.error(`Unable to retrieve ${patentGuid} with fetchPPubs(): ` + e)
    return null
  }
}
