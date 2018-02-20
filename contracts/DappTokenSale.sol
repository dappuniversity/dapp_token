pragma solidity ^0.4.17;

import "./DappToken.sol";

contract DappTokenSale {
    address          admin;
    DappToken public tokenContract;
    uint256   public tokenPrice;
    // uint256   public tokensSold;


    // event Sell(address buyer, uint256 amount);

    function DappTokenSale(DappToken _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }
}
