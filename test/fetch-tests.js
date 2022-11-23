const { expect } = require('chai');

const fs = require('../lib/')

describe('fetch tests', function () {

  const patentNumber = '8139878'
  const patentNumbers = ['8139878', '11276648', '11275662']

  it('should correctly fetch ppub session case id', async function() {
    const caseId = await fs.fetchPPubsCaseId()
    expect(caseId).to.be.a('number')
  })

  it('should correctly fetch ppub search data', async function() {
    const query = patentNumber + '.pn.'
    const caseId = await fs.fetchPPubsCaseId()
    const queryResult = await fs.fetchPPubsSearch(caseId ?? 0, query)
    expect(queryResult.query.numResults).to.be.equal(1)
    expect(queryResult.patents[0].guid).to.be.equal('US-8139878-B2')
  })

  it('should correctly fetch ppub patent data', async function() {
    const guid = 'US-8139878-B2'
    const queryResult = await fs.fetchPPubsPatent(guid)
    expect(queryResult).to.be.an('object')
    expect(queryResult.guid).to.equal('US-8139878-B2')
    expect(queryResult.inventionTitle).to.equal('Picture coding method and picture decoding method')
  })

})
