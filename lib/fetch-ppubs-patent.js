"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPPubsPatent = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  Requires official guid string obtainable with PPubs Search query.
 */
async function fetchPPubsPatent(patentGuid) {
    const host = 'https://ppubs.uspto.gov';
    const highlightPath = '/dirsearch-public/patents/' + patentGuid + '/highlight?queryId=0&source=USPAT&includeSections=true&uniqueId=';
    try {
        const highlightResponse = await axios_1.default.get(host + highlightPath);
        return highlightResponse.data;
    }
    catch (e) {
        // console.error(`Unable to retrieve ${patentGuid} with fetchPPubs(): ` + e)
        return null;
    }
}
exports.fetchPPubsPatent = fetchPPubsPatent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2gtcHB1YnMtcGF0ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZldGNoLXBwdWJzLXBhdGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFLekI7OztHQUdHO0FBQ0ksS0FBSyxVQUFVLGdCQUFnQixDQUFDLFVBQWtCO0lBQ3ZELE1BQU0sSUFBSSxHQUFHLHlCQUF5QixDQUFBO0lBQ3RDLE1BQU0sYUFBYSxHQUFHLDRCQUE0QixHQUFHLFVBQVUsR0FBRyxrRUFBa0UsQ0FBQTtJQUVwSSxJQUFJO1FBQ0YsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFBO1FBQy9ELE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFBO0tBQzlCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDViw0RUFBNEU7UUFDNUUsT0FBTyxJQUFJLENBQUE7S0FDWjtBQUNILENBQUM7QUFYRCw0Q0FXQyJ9