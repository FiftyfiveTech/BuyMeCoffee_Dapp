<img src="https://www.fiftyfivetech.io/wp-content/uploads/2021/05/logo.png">

# Buy me crypto coffee

This is Dapp where any user can donate and contribute to artist by buying coffee for them with any message they want to give.

# Prerequisite
You should have following installed on your system:
- `Node`
- `Ganche`
- `Truffle`
- `Metamask`
- `Solidity`

# How to use this package

To use this package, enter this simple command on your `Terminal` or any other tool that can run `npm` commands.

To install package dependencies
```sh
npm install
```

To compile the project
```sh
truffle compile
```

To migrate/deploy contract
```sh
truffle migrate
```

To start unit testing
```sh
truffle test
```

`Use Truffle Cli to intract with deployed contract` 

# Project structure

```
├───contracts/
│   ├───CoffeeToken.sol
│   └───Migrations.sol
├───migrations/
│   ├───1_initial_migration.js
│   └───2_deploy_migration.js
├───src/
│   └───abis/
│       ├───CoffeeToken.json
│       ├───Context.json
│       ├───ERC20.json
│       ├───IERC20.json
│       ├───IERC20Metadata.json
│       └───Migrations.json
├───test/
│   └───CoffeeToken.test.js
├───package.json
└───truffle-config.js
```
**contracts** - Contains the solidity contract for coffee token which holds up the Ether in exchange of CT .

**src/abis** - It contain json file generated on compiling contract which help us to intract with contract's methods.

**migrations** - Migration file is for deploying and migrating contract to configured web3 network.

**test** - Using `chai` as testing framework for writing test cases and run test suit for the contract that are generated in `contracts` directory with help of abis on the respective contracts.

**truffle-config.js** - It consist on network configration where we need to deploy out our contract.

## Author

Fiftyfive Technologies
