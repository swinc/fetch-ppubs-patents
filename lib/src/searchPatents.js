"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPatents = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("./helpers");
/**
 *  Execute a search with the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  @param {string} query - the text query to use; see https://ppubs.uspto.gov/pubwebapp/static/pages/quick-reference-guides.html
 *  @param {(number|null)} [caseId=null] - optional case id for linking searches
 *  @returns {Promise} - resolves to object with PPubsSearchWithBeFamilyAPIRespons type, or
 *      rejects promise if bad patent number or error on retrieval
 */
async function searchPatents(query, caseId = null) {
    const url = 'https://ppubs.uspto.gov/dirsearch-public/searches/searchWithBeFamily';
    if (!caseId)
        caseId = await (0, helpers_1.fetchCaseId)();
    // minimum data for posting to searchWithBeFamily API
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
    const searchResponse = await axios_1.default.post(url, postData);
    return searchResponse.data;
}
exports.searchPatents = searchPatents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUGF0ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hQYXRlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUF5QjtBQUV6Qix1Q0FBdUM7QUFJdkM7Ozs7OztHQU1HO0FBQ0ksS0FBSyxVQUFVLGFBQWEsQ0FBQyxLQUFhLEVBQUUsU0FBd0IsSUFBSTtJQUMzRSxNQUFNLEdBQUcsR0FBRyxzRUFBc0UsQ0FBQTtJQUVsRixJQUFJLENBQUMsTUFBTTtRQUFHLE1BQU0sR0FBRyxNQUFNLElBQUEscUJBQVcsR0FBRSxDQUFBO0lBRTFDLHFEQUFxRDtJQUNyRCxNQUFNLFFBQVEsR0FBRztRQUNqQixXQUFXLEVBQUMsR0FBRztRQUNmLE1BQU0sRUFBQyxnQkFBZ0I7UUFDdkIsb0JBQW9CLEVBQUMsbUJBQW1CO1FBQ3hDLHNCQUFzQixFQUFDLGFBQWE7UUFDcEMsT0FBTyxFQUFFO1lBQ0wsUUFBUSxFQUFFLE1BQU07WUFDaEIsYUFBYSxFQUFDLEdBQUc7WUFDakIsSUFBSSxFQUFDLElBQUk7WUFDVCxHQUFHLEVBQUUsS0FBSztZQUNWLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFlBQVksRUFBQyxHQUFHO1lBQ2hCLFVBQVUsRUFBQyxNQUFNO1lBQ2pCLGlCQUFpQixFQUFFO2dCQUNmLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsRUFBRSxFQUFDO2dCQUM3QyxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLEVBQUUsRUFBQztnQkFDMUMsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxFQUFFLEVBQUM7YUFDN0M7WUFDRCxrQkFBa0IsRUFBRSxLQUFLO1NBQzVCO0tBQ0EsQ0FBQTtJQUVELE1BQU0sY0FBYyxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBcUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzFGLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQTtBQUM5QixDQUFDO0FBOUJELHNDQThCQyJ9