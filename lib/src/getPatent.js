"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatent = void 0;
const fetchCaseId_1 = require("./helpers/fetchCaseId");
const searchPatents_1 = require("./searchPatents");
const getPatentByGuid_1 = require("./getPatentByGuid");
/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  @param {string} patentNum - the patent number to fetch
 *  @returns {Promise} - resolves to PPubsPatentHighlightAPIResponse type, or
 *      rejects promise if bad patent number or error on retrieval
 */
async function getPatent(patentNum) {
    const caseId = await (0, fetchCaseId_1.fetchCaseId)();
    const searchQuery = patentNum + '.pn.';
    const searchResults = await (0, searchPatents_1.searchPatents)(searchQuery, caseId);
    if (!searchResults) {
        throw new Error('Could not retrieve search results from ppubs search API.');
    }
    const patentGuid = searchResults.patents[0].guid;
    const patentResult = await (0, getPatentByGuid_1.getPatentByGuid)(patentGuid);
    if (!patentResult) {
        throw new Error('Could not retrieve patent results from ppubs highlight API.');
    }
    return patentResult;
}
exports.getPatent = getPatent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UGF0ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldFBhdGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx1REFBbUQ7QUFDbkQsbURBQStDO0FBQy9DLHVEQUFtRDtBQUluRDs7Ozs7R0FLRztBQUNJLEtBQUssVUFBVSxTQUFTLENBQUMsU0FBaUI7SUFDN0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLHlCQUFXLEdBQUUsQ0FBQTtJQUVsQyxNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFBO0lBQ3RDLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBQSw2QkFBYSxFQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFHO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFBO0tBQUU7SUFFcEcsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDaEQsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFBLGlDQUFlLEVBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEQsSUFBSSxDQUFDLFlBQVksRUFBRztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQTtLQUFFO0lBRXRHLE9BQU8sWUFBWSxDQUFBO0FBQ3ZCLENBQUM7QUFaRCw4QkFZQyJ9