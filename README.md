# Nodit Ethers Provider

This package provides a custom [Ethers.js](https://docs.ethers.org/v6) provider that interacts with the [Nodit API](https://developer.nodit.io).

## Installation

Use the package manager like [npm](https://www.npmjs.com) to install `nodit-ethers-provider`.

```shell
npm install nodit-ethers-provider
```

## Usage

```javascript
import { NoditProvider } from "nodit-ethers-provider";

const noditProvider = new NoditProvider("mainnet", "DummyApiKey");
const blockNumber = await provider.getBlockNumber();

console.log(`current block numer: ${blockNumber}`);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache License 2.0](https://github.com/garamnamo/nodit-ethers-provider/blob/main/LICENSE)
