/* eslint-disable import/first */

import * as chai from 'chai'
import { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

import * as fp from '../src'
import { fetchCaseId } from '../src/helpers'

describe('fetch tests', function () {
  const patentNumber = '11508113'
  const patentNumbers = ['8139878', '11276648', '11275662']

  it('should correctly fetch a case id', async function () {
    const caseId = await fetchCaseId()
    expect(caseId).to.be.a('number')
  })

  it('should correctly return search results', async function () {
    const query = patentNumbers.map((num) => num + '.pn.').join(' OR ')
    const searchResults = await fp.searchPatents(query)
    expect(searchResults.numFound).to.equal(3)
    expect(searchResults.patents[0].guid).to.equal('US-11276648-B2')
    expect(searchResults.patents[1].guid).to.equal('US-11275662-B2')
    expect(searchResults.patents[2].guid).to.equal('US-8139878-B2')
  })

  it('should correctly fetch patent by guid', async function () {
    const guid = 'US-8139878-B2'
    const queryResult = await fp.getPatentByGuid(guid)
    expect(queryResult).to.be.an('object')
    expect(queryResult.guid).to.equal('US-8139878-B2')
    expect(queryResult.inventionTitle).to.equal('Picture coding method and picture decoding method')
  })

  it('should correctly fetch a patent with a patent number', async function () {
    const patent = await fp.getPatent(patentNumber)
    console.log(patent)
    expect(patent.guid).to.equal('US-8139878-B2')
  })

  it('should reject the promise if the patent is an error', async function () {
    const badPatentNum = ''
    await expect(fp.getPatent(badPatentNum)).to.be.rejectedWith(Error)
  })
})
