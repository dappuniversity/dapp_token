var DappTokenSale = artifacts.require('./DappTokenSale.sol');

contract('DappTokenSale', function(accounts) {
  var tokenSaleInstance;

  it('initializes the contract with the correct config values', function() {
    return DappTokenSale.deployed().then(function(instance) {
      tokenSaleInstance = instance;
      return tokenSaleInstance.tokenContract();
    }).then(function(tokenContractAddress) {
      assert.notEqual(tokenContractAddress, 0x0, 'has token contract address');
    });
  });
});
