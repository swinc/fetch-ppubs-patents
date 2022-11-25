import axios from 'axios'

import { fetchCaseId } from './helpers'

import { PPubsSearchWithBeFamilyAPIResponse } from 'src/types'

/**
 *  Execute a search with the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  @param {string} query - the text query to use; see https://ppubs.uspto.gov/pubwebapp/static/pages/quick-reference-guides.html
 *  @param {(number|null)} [caseId=null] - optional case id for linking searches
 *  @returns {Promise} - resolves to object with PPubsSearchWithBeFamilyAPIRespons type, or
 *      rejects promise if bad patent number or error on retrieval
 */
export async function searchPatents (query: string, caseId: (number | null) = null): Promise<PPubsSearchWithBeFamilyAPIResponse> {
  const url = 'https://ppubs.uspto.gov/dirsearch-public/searches/searchWithBeFamily'

  if (caseId == null) caseId = await fetchCaseId()

  // minimum data for posting to searchWithBeFamily API
  const postData = {
    pageCount: 500,
    sort: 'date_publ desc',
    docFamilyFiltering: 'familyIdFiltering',
    showDocPerFamilyPref: 'showEnglish',
    query: {
      caseId,
      hl_snippets: '2',
      op: 'OR',
      q: query,
      queryName: query,
      highlights: '1',
      viewName: 'tile',
      databaseFilters: [
        { databaseName: 'US-PGPUB', countryCodes: [] },
        { databaseName: 'USPAT', countryCodes: [] },
        { databaseName: 'USOCR', countryCodes: [] }
      ],
      userEnteredQuery: query
    }
  }

  const searchResponse = await axios.post<PPubsSearchWithBeFamilyAPIResponse>(url, postData)
  return searchResponse.data
}
