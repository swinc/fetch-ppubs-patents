"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatentByGuid = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 *  Fetch a single patent from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  @param {string} patentGuid - the guid string obtainable with PPubs Search query
 *  @returns {Promise} - resolves to object with type PPubsPatentHighlightAPIResponse, or
 *    rejects promise if bad patent number or error on retrieval
 */
async function getPatentByGuid(patentGuid) {
    const url = 'https://ppubs.uspto.gov/dirsearch-public/patents/' +
        patentGuid + '/highlight?queryId=0&source=USPAT&includeSections=true&uniqueId=';
    const highlightResponse = await axios_1.default.get(url);
    return highlightResponse.data;
}
exports.getPatentByGuid = getPatentByGuid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UGF0ZW50QnlHdWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldFBhdGVudEJ5R3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFJekI7Ozs7O0dBS0c7QUFDSSxLQUFLLFVBQVUsZUFBZSxDQUFDLFVBQWtCO0lBQ3RELE1BQU0sR0FBRyxHQUFHLG1EQUFtRDtRQUM3RCxVQUFVLEdBQUcsa0VBQWtFLENBQUE7SUFFakYsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDOUMsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUE7QUFDL0IsQ0FBQztBQU5ELDBDQU1DIn0=