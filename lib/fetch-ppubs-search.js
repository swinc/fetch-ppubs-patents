"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPPubsSearch = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 *  Execute a search with the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  Returns the full API response with patent guids in an array at response.patents[].guid
 */
async function fetchPPubsSearch(caseId, query) {
    const host = 'https://ppubs.uspto.gov';
    const searchPath = '/dirsearch-public/searches/searchWithBeFamily';
    // this is minimum data for posting to searchWithBeFamily API
    const postData = {
        "pageCount": 500,
        "sort": "date_publ desc",
        "docFamilyFiltering": "familyIdFiltering",
        "showDocPerFamilyPref": "showEnglish",
        "query": {
            "caseId": caseId,
            "hl_snippets": "2",
            "op": "OR",
            "q": query,
            "queryName": query,
            "highlights": "1",
            "viewName": "tile",
            "databaseFilters": [
                { "databaseName": "US-PGPUB", "countryCodes": [] },
                { "databaseName": "USPAT", "countryCodes": [] },
                { "databaseName": "USOCR", "countryCodes": [] }
            ],
            "userEnteredQuery": query
        }
    };
    try {
        const searchResponse = await axios_1.default.post(host + searchPath, postData);
        return searchResponse.data;
    }
    catch (e) {
        // console.error(`Unable to retrieve query "${query}" with fetchPPubsSearch(): ` + e)
        return null;
    }
}
exports.fetchPPubsSearch = fetchPPubsSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2gtcHB1YnMtc2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZldGNoLXBwdWJzLXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFJekI7OztHQUdHO0FBQ0ksS0FBSyxVQUFVLGdCQUFnQixDQUFDLE1BQWMsRUFBRSxLQUFhO0lBQ2xFLE1BQU0sSUFBSSxHQUFHLHlCQUF5QixDQUFBO0lBQ3RDLE1BQU0sVUFBVSxHQUFHLCtDQUErQyxDQUFBO0lBRWxFLDZEQUE2RDtJQUM3RCxNQUFNLFFBQVEsR0FBRztRQUNmLFdBQVcsRUFBQyxHQUFHO1FBQ2YsTUFBTSxFQUFDLGdCQUFnQjtRQUN2QixvQkFBb0IsRUFBQyxtQkFBbUI7UUFDeEMsc0JBQXNCLEVBQUMsYUFBYTtRQUNwQyxPQUFPLEVBQUU7WUFDTCxRQUFRLEVBQUUsTUFBTTtZQUNoQixhQUFhLEVBQUMsR0FBRztZQUNqQixJQUFJLEVBQUMsSUFBSTtZQUNULEdBQUcsRUFBRSxLQUFLO1lBQ1YsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFDLEdBQUc7WUFDaEIsVUFBVSxFQUFDLE1BQU07WUFDakIsaUJBQWlCLEVBQUU7Z0JBQ2YsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxFQUFFLEVBQUM7Z0JBQzdDLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsRUFBRSxFQUFDO2dCQUMxQyxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLEVBQUUsRUFBQzthQUM3QztZQUNELGtCQUFrQixFQUFFLEtBQUs7U0FDNUI7S0FDRixDQUFBO0lBRUQsSUFBSTtRQUNGLE1BQU0sY0FBYyxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBK0IsSUFBSSxHQUFHLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNsRyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUE7S0FDM0I7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLHFGQUFxRjtRQUNyRixPQUFPLElBQUksQ0FBQTtLQUNaO0FBQ0gsQ0FBQztBQWxDRCw0Q0FrQ0MifQ==