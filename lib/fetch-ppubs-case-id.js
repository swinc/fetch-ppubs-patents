"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPPubsCaseId = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 *  Fetch a case id from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  This is used for later search, patent pull calls.
 */
async function fetchPPubsCaseId() {
    const host = 'https://ppubs.uspto.gov';
    const sessionPath = '/dirsearch-public/users/me/session';
    const data = '-1';
    const config = {
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const sessionResponse = await axios_1.default.post(host + sessionPath, data, config);
        const caseId = sessionResponse.data.userCase.caseId;
        return caseId;
    }
    catch (e) {
        // console.error(`Unable to retrieve case id with fetchPPubsCaseId(): ` + e)
        return null;
    }
}
exports.fetchPPubsCaseId = fetchPPubsCaseId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2gtcHB1YnMtY2FzZS1pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mZXRjaC1wcHVicy1jYXNlLWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUF5QjtBQUl6Qjs7O0dBR0c7QUFDSSxLQUFLLFVBQVUsZ0JBQWdCO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLHlCQUF5QixDQUFBO0lBQ3RDLE1BQU0sV0FBVyxHQUFHLG9DQUFvQyxDQUFBO0lBRXhELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNqQixNQUFNLE1BQU0sR0FBRztRQUNiLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtLQUNoRCxDQUFBO0lBRUQsSUFBSTtRQUNGLE1BQU0sZUFBZSxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBMEIsSUFBSSxHQUFHLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDbkcsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBO1FBQ25ELE9BQU8sTUFBTSxDQUFBO0tBQ2Q7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLDRFQUE0RTtRQUM1RSxPQUFPLElBQUksQ0FBQTtLQUNaO0FBQ0gsQ0FBQztBQWpCRCw0Q0FpQkMifQ==