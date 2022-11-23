# fetch-ppubs-patents

`fetch-ppubs-patents` is a pure Nodejs TypeScript/JavaScript library for pulling patents from the USPTO [Patent Public Search](https://ppubs.uspto.gov/pubwebapp/) API.

```
import * as fs from fetch-ppubs-patents



```

## Building from TypeScript

`tsc` (`npm run build`) will build the TypeScript files in `src` to the `lib` directory.

## Testing

`mocha --config mocharc.ts.src.yaml` (`npm test`) will run the *TypeScript* tests in the `test` directory. Use during development.

`mocha --config mocharc.js.lib.yaml` (`npm run test:js`) will run the *JavaScript* tests in the `test` directory. Use to verify correct build for deployment.