"use strict";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* globals describe, it */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = __importStar(require("chai"));
const chai_1 = require("chai");
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
chai.use(chai_as_promised_1.default);
const fp = __importStar(require("../src"));
const helpers_1 = require("../src/helpers");
describe('fetch tests', function () {
    const patentNumber = '8139878';
    const patentNumbers = ['8139878', '11276648', '11275662'];
    it('should correctly fetch ppub session case id', async function () {
        const caseId = await (0, helpers_1.fetchCaseId)();
        (0, chai_1.expect)(caseId).to.be.a('number');
    });
    it('should correctly fetch patent data with a guid', async function () {
        const guid = 'US-8139878-B2';
        const queryResult = await fp.getPatentByGuid(guid);
        (0, chai_1.expect)(queryResult).to.be.an('object');
        (0, chai_1.expect)(queryResult.guid).to.equal('US-8139878-B2');
        (0, chai_1.expect)(queryResult.inventionTitle).to.equal('Picture coding method and picture decoding method');
    });
    it('should correctly fetch a patent with a patent number', async function () {
        const patent = await fp.getPatent(patentNumber);
        (0, chai_1.expect)(patent.guid).to.equal('US-8139878-B2');
    });
    it('should reject the promise if the patent is an error', async function () {
        const badPatentNum = '';
        await (0, chai_1.expect)(fp.getPatent(badPatentNum)).to.be.rejectedWith(Error);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2gtdGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy9mZXRjaC10ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkRBQTZEO0FBQzdELDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQiwyQ0FBNEI7QUFDNUIsK0JBQTZCO0FBQzdCLHdFQUE2QztBQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUFjLENBQUMsQ0FBQTtBQUV4QiwyQ0FBNEI7QUFFNUIsNENBQTRDO0FBRTVDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFFdEIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFBO0lBQzlCLE1BQU0sYUFBYSxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUV6RCxFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSztRQUNyRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEscUJBQVcsR0FBRSxDQUFBO1FBQ2xDLElBQUEsYUFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLEtBQUs7UUFDeEQsTUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFBO1FBQzVCLE1BQU0sV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsRCxJQUFBLGFBQU0sRUFBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0QyxJQUFBLGFBQU0sRUFBQyxXQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNuRCxJQUFBLGFBQU0sRUFBQyxXQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFBO0lBQ25HLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNEQUFzRCxFQUFFLEtBQUs7UUFDOUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQy9DLElBQUEsYUFBTSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQy9DLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEtBQUs7UUFDN0QsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ3ZCLE1BQU0sSUFBQSxhQUFNLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BFLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFDLENBQUEifQ==