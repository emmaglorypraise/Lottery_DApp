import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
require("dotenv").config({ path: ".env" });
// @ts-ignore
// const { ETHEREUM_MAINNET_API_KEY_URL, ALCHEMY_RINKEBY_API_KEY_URL, GOERLI_API_KEY_URL, PRIVATE_KEY, API_TOKEN } = "./constants/index.js"

// const ETHEREUM_MAINNET_API_KEY_URL = process.env.ETHEREUM_MAINNET_API_KEY_URL;

// const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;

// const GOERLI_API_KEY_URL = process.env.GOERLI_API_KEY_URL;

// const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

// const API_TOKEN = process.env.API_TOKEN;

// ------------------- hardcoded --------------------------
const ETHEREUM_MAINNET_API_KEY_URL = "https://eth-mainnet.g.alchemy.com/v2/G16oj-XMgeAJqxNSKXhXzlBdWwEaSTCb";

const ALCHEMY_RINKEBY_API_KEY_URL = "https://eth-rinkeby.alchemyapi.io/v2/1PdVr8Hq7KYm4T0uZaWH1e1vfxA-R0_G";

const GOERLI_API_KEY_URL = "https://eth-goerli.g.alchemy.com/v2/FVhKzRogIAlI_zgqGdtgyVzZYTL9_yct";

const PRIVATE_KEY = "e550d9f280f76bbd7438cbeaf03453f899fd83588cf3f2312143c22b7dc025c0";

const API_TOKEN = "GMSKNX6XU6KESUH67CV5F6ZJIEEF2ZPVP8";

// console.log( ETHEREUM_MAINNET_API_KEY_URL, ALCHEMY_RINKEBY_API_KEY_URL, GOERLI_API_KEY_URL)

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      forking: {
        url: ETHEREUM_MAINNET_API_KEY_URL,
      },
    },
    goerli: {
      url: GOERLI_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: API_TOKEN
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};