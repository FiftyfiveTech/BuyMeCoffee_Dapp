pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CoffeeToken is ERC20 {
    address public admin;

    event Coffee(
        address indexed from,
        string message,
        uint256 date,
        uint256 value
    );

    constructor() ERC20("Coffee Token", "CT") {
        _mint(msg.sender, 1000000000000000000000);
        admin = msg.sender;
    }

    function balance() public view returns (uint256) {
        return address(this).balance;
    }
    
    function buyCoffee(string memory message) public payable {
        // Amount must be greater than zero
        require(msg.value > 0, "amount cannot be 0");

        //mint coffee token for msg.sender
        _mint(msg.sender, msg.value);

        // entry in event
        emit Coffee(msg.sender, message, block.timestamp, msg.value);
    }

    function withdraw(uint256 _amount) public payable {
        // Burn CoffeeTokens from msg sender
        require(msg.sender == admin);
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(_amount);
    }
}
