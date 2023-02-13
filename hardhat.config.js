require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    Goerli:  {
      url: "https://goerli.infura.io/v3/1ee6c355e92f47f8b0248e5994961f53",
      accounts: []
    }
  }

};

