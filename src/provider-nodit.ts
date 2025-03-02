import type { AbstractProvider, Networkish } from "ethers";
import {
  assertArgument,
  defineProperties,
  FetchRequest,
  JsonRpcProvider,
  Network,
  WebSocketProvider,
} from "ethers";

const supportedNetworkMap = Object.freeze(
  new Map([
    ["mainnet", "ethereum-mainnet"],
    ["sepolia", "ethereum-sepolia"],
    ["holesky", "ethereum-holesky"],
    ["arbitrum", "arbitrum-mainnet"],
    ["arbitrum-sepolia", "arbitrum-sepolia"],
    ["base", "base-mainnet"],
    ["base-sepolia", "base-sepolia"],
    ["matic", "polygon-mainnet"],
    ["matic-amoy", "polygon-amoy"],
    ["optimism", "optimism-mainnet"],
    ["optimism-sepolia", "optimism-sepolia"],
  ]),
);

function getHost(name: string): string {
  const network = supportedNetworkMap.get(name);

  if (!network) {
    assertArgument(false, "unsupported network", "network", name);
  }

  return `${network}.nodit.io`;
}

export class NoditWebSocketProvider extends WebSocketProvider {
  readonly apiKey!: string;

  constructor(network: Networkish, apiKey: string) {
    const provider = new NoditProvider(network, apiKey);

    const request = provider._getConnection();

    const url = request.url.replace(/^http/i, "ws");
    super(url, provider._network);

    defineProperties<NoditWebSocketProvider>(this, { apiKey: provider.apiKey });
  }
}

export class NoditProvider extends JsonRpcProvider {
  readonly apiKey!: string;

  constructor(_network: Networkish, apiKey: string) {
    const network = Network.from(_network);

    const request = NoditProvider.getRequest(network, apiKey);
    super(request, network, { staticNetwork: network });

    defineProperties<NoditProvider>(this, { apiKey });
  }

  _getProvider(chainId: number): AbstractProvider {
    try {
      return new NoditProvider(chainId, this.apiKey);
    } catch {
      // ignored
    }
    return super._getProvider(chainId);
  }

  static getWebSocketProvider(
    network: Networkish,
    apiKey: string,
  ): NoditWebSocketProvider {
    return new NoditWebSocketProvider(network, apiKey);
  }

  static getRequest(network: Network, apiKey: string): FetchRequest {
    const host = getHost(network.name);
    const request = new FetchRequest(`https://${host}/${apiKey}`);
    request.allowGzip = true;

    return request;
  }
}
