require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/VS5Cvoawu6_C_SCjjTtLvGGuIcSdes8D",
      accounts: [
        "59b08640abe483eb4044b536284100c307038d9fd3a67c9e59e77b04f6a952d9",
      ],
    },
  },
};
