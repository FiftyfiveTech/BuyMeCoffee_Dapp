<img src="https://www.fiftyfivetech.io/wp-content/uploads/2021/05/logo.png">

# Buy me crypto coffee

This is Dapp where any user can donate and contribute to artist by buying coffee for them with any message they want to give and only owner can pull out contract ether.

✨ This repository showing that how we are using clean code architecture, folder structure, and component reusability.✨

We at Fiftyfive Technologies follow the practices defined by SOLID principles and Clean Architecture.

## Features

- _**Functionality**_  : Work correctly, efficiently, and robustly.
- _**Readability**_    : The primary audience for our code is other developers.
- _**Extensibility**_  : Well-designed code should be extensible as a building block for solving new problems.
- _**Scalability**_    : The code that can scale along with the need of your business.

## Tech Stack

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Truffle](https://trufflesuite.com/) - Web3 development framework on top of node.
- [Ganache](https://trufflesuite.com/ganache/) - For local web3 environment to maintain dev/testing blockchain. 
- [Metamask](https://metamask.io/) - For decentralised crypto wallet.
- [Solidity](https://soliditylang.org/) - To generate smart contracts.

## Package manager - npm
This project is using `npm` as package manager, if you do not have this installed on your machine please start by looking at the [npm docuentation and tutorials](https://docs.npmjs.com/). After installing the package manager the following commands will be availible for you:
- `npm install` - Installing dev dependencies.
- `npm run start:local` - To start the sever.

If you seem to still have issues with these commands, try running `npm cache clean` and do `npm install` or `npm install --legacy-peer-deps`

## Linting
Project is using ESLint to make sure that we keep same coding style in the project. Currently the project is using default ruleset, but custom can be defined in `.eslintrc.json`.

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
├── truffle-config.js
└───.gitignore
```
**contracts** - Contains the solidity contract for coffee token which holds up the Ether in exchange of CT .

**src/abis** - It contain json file generated on compiling contract which help us to intract with contract's methods.

**migrations** - Migration file is for deploying and migrating contract to configured web3 network.

**test** - Using `chai` as testing framework for writing test cases and run test suit for the contract that are generated in `contracts` directory with help of abis on the respective contracts.

**truffle-config.js** - It consist on network configration where we need to deploy out our contract.

## License

Fiftyfive Technologies

**We are relentlessly focusing on digital transformation. Dive deep into the customer cases to know more about the project which we delivered.**
