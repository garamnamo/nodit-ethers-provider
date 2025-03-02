import { NoditProvider, NoditWebSocketProvider } from "./provider-nodit.js";

describe("NoditWebSocketProvider", () => {
  describe("ethereum", () => {
    it("should be created ethereum mainnet websocket provider", () => {
      const provider = new NoditWebSocketProvider("mainnet", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("mainnet");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created ethereum sepolia websocket provider", () => {
      const provider = new NoditWebSocketProvider("sepolia", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("sepolia");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created ethereum holesky websocket provider", () => {
      const provider = new NoditWebSocketProvider("holesky", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("holesky");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("arbitrum", () => {
    it("should be created arbitrum mainnet websocket provider", () => {
      const provider = new NoditWebSocketProvider(
        "arbitrum",
        "ItIsDummyApiKey",
      );
      expect(provider._network.name).toBe("arbitrum");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created arbitrum sepolia websocket provider", () => {
      const provider = new NoditWebSocketProvider(
        "arbitrum-sepolia",
        "ItIsDummyApiKey",
      );
      expect(provider._network.name).toBe("arbitrum-sepolia");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("base", () => {
    it("should be created base mainnet websocket provider", () => {
      const provider = new NoditWebSocketProvider("base", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("base");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created base sepolia websocket provider", () => {
      const provider = new NoditWebSocketProvider(
        "base-sepolia",
        "ItIsDummyApiKey",
      );
      expect(provider._network.name).toBe("base-sepolia");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("polygon", () => {
    it("should be created polygon mainnet websocket provider", () => {
      const provider = new NoditWebSocketProvider("matic", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("matic");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created polygon amoy websocket provider", () => {
      const provider = new NoditWebSocketProvider(
        "matic-amoy",
        "ItIsDummyApiKey",
      );
      expect(provider._network.name).toBe("matic-amoy");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("optimism", () => {
    it("should be created optimism mainnet websocket provider", () => {
      const provider = new NoditWebSocketProvider(
        "optimism",
        "ItIsDummyApiKey",
      );
      expect(provider._network.name).toBe("optimism");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created optimism sepolia websocket provider", () => {
      const provider = new NoditWebSocketProvider(
        "optimism-sepolia",
        "ItIsDummyApiKey",
      );
      expect(provider._network.name).toBe("optimism-sepolia");
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
});

describe("NoditProvider", () => {
  describe("ethereum", () => {
    it("should be created ethereum mainnet provider", () => {
      const provider = new NoditProvider("mainnet", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("mainnet");
      expect(provider._getConnection().url).toBe(
        "https://ethereum-mainnet.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created ethereum sepolia provider", () => {
      const provider = new NoditProvider("sepolia", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("sepolia");
      expect(provider._getConnection().url).toBe(
        "https://ethereum-sepolia.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created ethereum holesky provider", () => {
      const provider = new NoditProvider("holesky", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("holesky");
      expect(provider._getConnection().url).toBe(
        "https://ethereum-holesky.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("arbitrum", () => {
    it("should be created arbitrum mainnet provider", () => {
      const provider = new NoditProvider("arbitrum", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("arbitrum");
      expect(provider._getConnection().url).toBe(
        "https://arbitrum-mainnet.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created arbitrum sepolia provider", () => {
      const provider = new NoditProvider("arbitrum-sepolia", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("arbitrum-sepolia");
      expect(provider._getConnection().url).toBe(
        "https://arbitrum-sepolia.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("base", () => {
    it("should be created base mainnet provider", () => {
      const provider = new NoditProvider("base", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("base");
      expect(provider._getConnection().url).toBe(
        "https://base-mainnet.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created base sepolia provider", () => {
      const provider = new NoditProvider("base-sepolia", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("base-sepolia");
      expect(provider._getConnection().url).toBe(
        "https://base-sepolia.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("polygon", () => {
    it("should be created polygon mainnet provider", () => {
      const provider = new NoditProvider("matic", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("matic");
      expect(provider._getConnection().url).toBe(
        "https://polygon-mainnet.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created polygon amoy provider", () => {
      const provider = new NoditProvider("matic-amoy", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("matic-amoy");
      expect(provider._getConnection().url).toBe(
        "https://polygon-amoy.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
  describe("optimism", () => {
    it("should be created optimism mainnet provider", () => {
      const provider = new NoditProvider("optimism", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("optimism");
      expect(provider._getConnection().url).toBe(
        "https://optimism-mainnet.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
    it("should be created optimism sepolia provider", () => {
      const provider = new NoditProvider("optimism-sepolia", "ItIsDummyApiKey");
      expect(provider._network.name).toBe("optimism-sepolia");
      expect(provider._getConnection().url).toBe(
        "https://optimism-sepolia.nodit.io/ItIsDummyApiKey",
      );
      expect(provider.apiKey).toBe("ItIsDummyApiKey");
    });
  });
});
