import axios from 'axios'

import { PPubsSearchWithBeFamilyAPIResponse } from 'src/types'

/**
 *  Execute a search with the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  Returns the full API response with patent guids in an array at response.patents[].guid
 */
export async function fetchPPubsSearch(caseId: number, query: string): Promise<PPubsSearchWithBeFamilyAPIResponse | null> {
  const host = 'https://ppubs.uspto.gov'
  const searchPath = '/dirsearch-public/searches/searchWithBeFamily'

  // this is minimum data for posting to searchWithBeFamily API
  const postData = {
    "pageCount":500,
    "sort":"date_publ desc",
    "docFamilyFiltering":"familyIdFiltering",
    "showDocPerFamilyPref":"showEnglish",
    "query": {
        "caseId": caseId, // must be pulled separately
        "hl_snippets":"2",
        "op":"OR",
        "q": query,
        "queryName": query,
        "highlights":"1",
        "viewName":"tile",
        "databaseFilters": [
            {"databaseName":"US-PGPUB","countryCodes":[]},
            {"databaseName":"USPAT","countryCodes":[]},
            {"databaseName":"USOCR","countryCodes":[]}
        ],
        "userEnteredQuery": query
    }
  }

  try {
    const searchResponse = await axios.post<PPubsSearchWithBeFamilyAPIResponse>(host + searchPath, postData)
    return searchResponse.data
  } catch (e) {
    // console.error(`Unable to retrieve query "${query}" with fetchPPubsSearch(): ` + e)
    return null
  }
}
