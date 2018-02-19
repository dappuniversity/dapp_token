var DappToken = artifacts.require('./DappToken.sol');

contract('DappToken', function(accounts) {
  it('it has a token name', function() {
    return DappToken.deployed().then(function(instance) {
      return instance.name();
    }).then(function(name) {
      assert.equal(name, 'DApp Token');
    });
  });
});
