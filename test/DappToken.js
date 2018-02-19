var DappToken = artifacts.require('./DappToken.sol');

contract('DappToken', function(accounts) {
  var tokenInstance;

  it('Initializes the contract with the correct config values', function() {
    return DappToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'DApp Token', 'has the correct name');
      return tokenInstance.symbol()
    }).then(function(symbol) {
      assert.equal(symbol, 'DAPP', 'has the correct symbol');
      return tokenInstance.standard();
    }).then(function(standard) {
      assert.equal(standard, 'DApp Token v1.0', 'has the correct standard');
      return tokenInstance.decimals();
    }).then(function(decimals) {
      assert.equal(decimals, 18, 'has the correct number of decimals');
    });
  });

  it('It allocates the initial token supply upon deployment', function() {
    return DappToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to the initial supply');
      return tokenInstance.admin()
    }).then(function(admin) {
      assert.notEqual(admin, 0x0, 'it stores the contract admin address');
      return tokenInstance.balanceOf(admin);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
    });
  });
});
