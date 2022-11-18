//SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

import "hardhat/console.sol";

contract MyContract {

    uint256 num;

    function setValue(uint256 _num) external {
        num = _num;
        console.log("Value of Num: ", num);
    }

    function getNum() external view returns (uint256) {
        return num;
    }

}
