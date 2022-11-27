# fetch-ppubs-patents

`fetch-ppubs-patents` is a TypeScript/JavaScript library for pulling patents from the USPTO [Patent Public Search](https://ppubs.uspto.gov/pubwebapp/) API.

It has only one dependency: [axios](https://axios-http.com/).

## Usage

Consistent with the Patent Public Search API, there are only three top-level methods:

* `fp.searchPatents(query)`
    * returns an object with search details, including an array with basic patent details (guid, title, classifications, etc. but no main text)
    * see type for fields on returned object
* `fp.getPatentByGuid(guid)`
    * returns an object with full patent details
* `fp.getPatent(patentNumber)`
    * a convienence function that returns an object with full patent details for the first search hit on the passed `patentNumber` parameter

For example:

```
import * as fp from 'fetch-ppubs-patents'

const results = fp.searchPatents("nvidia.as.")

const firstResult = results.patents[0].publicationReferenceDocumentNumber // "11508113"

const patent = fp.getPatent(firstResult)

console.log(patent)

{
  guid: 'US-11508113-B2',
  publicationReferenceDocumentNumber: '11508113',
  compositeId: '1000006700342!US-US-11508113',
  publicationReferenceDocumentNumber1: '11508113',
  datePublishedKwicHits: null,
  datePublished: '2022-11-22T00:00:00Z',
  inventionTitle: 'Denoising techniques suitable for recurrent blurs',
  type: 'USPAT',
  mainClassificationCode: '1/1',
  applicantName: [ 'NVIDIA Corporation' ],
  assigneeName: [ 'NVIDIA Corporation' ],
  /* LOTS OF OTHER STUFF */
}
```
### Properties of API Responses

Properties of the API responses are defined in the `src/types` directory.

The search API response is defined in [PPubsSearchAPIResponse.ts](./src/types/PPubsSearchAPIResponse.ts).

The patent API response is defined in [PPubsHighlightAPIResponse.ts](./src/types/PPubsHighlightAPIResponse.ts).

## USPTO Terms of Use

This library uses an undocumented API present in the USPTO Public Patent Search system.

Per the [USPTO Terms of Use](https://www.uspto.gov/terms-use-uspto-websites), this API is "not designed or intended to be a source for bulk downloads of USPTO data when accessed through the website’s interfaces."

Please respect USPTO systems and do not use this API for bulk downloads. Alternative [Electronic Bulk Data Products](https://www.uspto.gov/learning-and-resources/electronic-bulk-data-products) are available.

## Development

### Building from TypeScript

`npm run build` will build the TypeScript files in `src` and `tests` directories to the `dist` directory.

### Testing

`npm test` will run the *TypeScript* tests in the `tests` directory. Use during development.

`npm run test:js` will run the *JavaScript* tests in the `dist/tests` directory. Use to verify correct build for deployment.