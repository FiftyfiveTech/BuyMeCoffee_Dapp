const HDWalletProvider = require('truffle-hdwallet-provider')

var infuraProjectId = process.env.INFURA_PROJECT_ID;
var mnemonic = process.env.MNEMONIC;

// naive environment assertions, since these aren't present by default
if (infuraProjectId === undefined || infuraProjectId === '') {
  throw new Error('truffle-config.js needs the environment variable "INFURA_PROJECT_ID"');
} else if (mnemonic === undefined) {
  throw new Error('truffle-config.js needs the environment variable "MNEMONIC"');
} else if (mnemonic.split(' ').length != 12) {
  throw new Error('The environment variable "MNEMONIC" must be 12 words (space delineated)');
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraProjectId}`),
      network_id: 3, // Ropsten Id
      gas: 3000000,
      gasPrice: 100000000000
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
