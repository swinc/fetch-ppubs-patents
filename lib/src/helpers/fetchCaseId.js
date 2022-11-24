"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCaseId = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 *  Fetch a case id from the USPTO Patent Public Search: https://ppubs.uspto.gov/pubwebapp/
 *  This is used for later search and patent fetch calls.
 *  @returns {Promise} resolves to caseId or rejects with error
 */
async function fetchCaseId() {
    const url = 'https://ppubs.uspto.gov/dirsearch-public/users/me/session';
    const data = '-1';
    const config = {
        headers: { 'Content-Type': 'application/json' }
    };
    const sessionResponse = await axios_1.default.post(url, data, config);
    const caseId = sessionResponse.data.userCase.caseId;
    return caseId;
}
exports.fetchCaseId = fetchCaseId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hDYXNlSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy9mZXRjaENhc2VJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFJekI7Ozs7R0FJRztBQUNJLEtBQUssVUFBVSxXQUFXO0lBQy9CLE1BQU0sR0FBRyxHQUFHLDJEQUEyRCxDQUFBO0lBRXZFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNqQixNQUFNLE1BQU0sR0FBRztRQUNiLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtLQUNoRCxDQUFBO0lBQ0QsTUFBTSxlQUFlLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUEwQixHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBRXBGLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQTtJQUNuRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUM7QUFYRCxrQ0FXQyJ9