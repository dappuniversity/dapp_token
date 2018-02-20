var DappTokenSale = artifacts.require('./DappTokenSale.sol');

contract('DappTokenSale', function(accounts) {
  var tokenSaleInstance;

  it('initializes the contract with the correct values', function() {
    return DappTokenSale.deployed().then(function(instance) {
      tokenSaleInstance = instance;
      return tokenSaleInstance.tokenContract();
    }).then(function(tokenContractAddress) {
      assert.notEqual(tokenContractAddress, 0x0, 'has token contract address');
      return tokenSaleInstance.tokenPrice();
    }).then(function(tokenPrice) {
      assert.equal(tokenPrice, 1000000000000000, 'token price is correct')
    });
  });
});
