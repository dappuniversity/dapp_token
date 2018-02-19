pragma solidity ^0.4.17;

contract DappToken {
    string public name = "DApp Token";
    string public symbol = "DAPP";
    string public standard = "DApp Token v1.0";
    uint8 public decimals = 18;

    address public admin;
    uint256 public totalSupply;

    mapping (address => uint256) public balanceOf;

    function DappToken (uint256 _initialSupply) public {
        admin = msg.sender;
        balanceOf[admin] = _initialSupply;
        totalSupply = _initialSupply;
    }
}
