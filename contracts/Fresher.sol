// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Fresher {
    address public message;
    string public name;
    string public dateOfBirth;
    
    constructor() {
        message = msg.sender;
        name = "Nguyen Cao Minh Duc";
        dateOfBirth = "21021999";

    }
    
    function getName () public view returns (string memory) {
        return name;
    }

    function getBirthDate() public view returns (string memory){
        return dateOfBirth;
    }

    function sayHello() public view returns (string memory) {
        return "Hello";
    }

    function setName (string memory newName) public {
        name = newName;
    }

    function setBirthDate (string memory newBirthDate) public {
        dateOfBirth = newBirthDate;
    }


}