require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: process.env.CMC_API,
  },
  networks: {
    goerli: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  }
};
