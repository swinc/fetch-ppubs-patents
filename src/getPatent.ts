import axios from 'axios'

import { fetchPPubsCaseId } from './helpers/fetch-ppubs-case-id'
import { fetchPPubsSearch } from './helpers/fetch-ppubs-search'
import { fetchPPubsPatent } from './helpers/fetch-ppubs-patent'

import { PPubsSearchWithBeFamilyAPIResponse } from 'src/types'
import { PPubsPatentHighlightAPIResponse } from 'src/types'

/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/ 
 *  @param {string} patentNum - the patent number to fetch
 *  @returns {Promise} - resolves to PPubsPatentHighlightAPIResponse type, or
 *      rejects promise if bad patent number or error on retrieval
 */
export async function getPatent(patentNum: string): Promise<PPubsPatentHighlightAPIResponse> {
    const caseId = await fetchPPubsCaseId()
    if( !caseId ) { throw new Error('Could not retrieve caseId from ppubs session API.') }

    const searchQuery = patentNum + '.pn.'
    const searchResults = await fetchPPubsSearch(caseId, searchQuery)
    if( !searchResults ) { throw new Error('Could not retrieve search results from ppubs search API.') }

    const patentGuid = searchResults.patents[0].guid
    const patentResult = await fetchPPubsPatent(patentGuid)
    if( !patentResult ) { throw new Error('Could not retrieve patent results from ppubs highlight API.') }

    return patentResult
}
