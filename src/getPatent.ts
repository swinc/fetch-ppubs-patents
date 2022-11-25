import axios from 'axios'

import { fetchCaseId } from './helpers/fetchCaseId'
import { searchPatents } from './searchPatents'
import { getPatentByGuid } from './getPatentByGuid'

import { PPubsPatentHighlightAPIResponse } from '../types'

/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/ 
 *  @param {string} patentNum - the patent number to fetch
 *  @returns {Promise} - resolves to PPubsPatentHighlightAPIResponse type, or
 *      rejects promise if bad patent number or error on retrieval
 */
export async function getPatent(patentNum: string): Promise<PPubsPatentHighlightAPIResponse> {
    const caseId = await fetchCaseId()

    const searchQuery = patentNum + '.pn.'
    const searchResults = await searchPatents(searchQuery, caseId)
    if( !searchResults ) { throw new Error('Could not retrieve search results from ppubs search API.') }

    const patentGuid = searchResults.patents[0].guid
    const patentResult = await getPatentByGuid(patentGuid)
    if( !patentResult ) { throw new Error('Could not retrieve patent results from ppubs highlight API.') }

    return patentResult
}
