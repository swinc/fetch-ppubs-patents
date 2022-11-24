import axios from 'axios'

import { fetchPPubsCaseId } from './helpers/fetch-ppubs-case-id'
import { fetchPPubsSearch } from './helpers/fetch-ppubs-search'
import { fetchPPubsPatent } from './helpers/fetch-ppubs-patent'

import { PPubsSearchFamilyAPIResponse } from 'src/types'
import { PPubsPatentHighlightAPIResponse } from 'src/types'

/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/ 
 *  @param {string} patentNum - the patent number to fetch
 *  @returns {Promise} - resolves to PPubsPatentHighlightAPIResponse type, or
 *      rejects promise if bad patent number or error on retrieval
 */
export async function getPatent(patentNum: string): Promise<PPubsPatentHighlightAPIResponse> {
    const newCaseId = await fetchPPubsCaseId()
    if( !newCaseId ) { throw new Error('Could not retrieve caseId from ppubs session API.') }

    // search for patent
    const query = patentNum + '.pn.'
    const queryResults = await fetchPPubsSearch(caseId, query)
    if(!queryResults) { throw new Error('cannot obtain query results') }

    // pull patent
    const guid = queryResults.patents[0].guid
    const patentResult = await fetchPPubsPatent(guid)
    if(!patentResult) { throw new Error('cannot get patent') }

    return patentResult
}
