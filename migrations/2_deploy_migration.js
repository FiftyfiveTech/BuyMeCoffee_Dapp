const CoffeeToken = artifacts.require("CoffeeToken");

module.exports = async function (deployer, network, accounts) {
  // Deploy Coffee Token
  await deployer.deploy(CoffeeToken)
  const coffeeToken = await CoffeeToken.deployed()
  console.log("Deployed contract addredded : ",coffeeToken.address)
}