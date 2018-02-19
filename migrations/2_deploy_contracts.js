var DappToken = artifacts.require("./DappToken.sol");

module.exports = function(deployer) {
  // Deploy contract with total token supply of 1,000,000 tokens
  deployer.deploy(DappToken, 1000000);
};
