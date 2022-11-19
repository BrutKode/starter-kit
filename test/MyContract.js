const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("MyContract", function () {
  async function deployMyContract() {
    const [owner, otherAccount] = await ethers.getSigners();
    const MyContract = await ethers.getContractFactory("MyContract");
    const mm = await MyContract.deploy();
    return { mm, owner, otherAccount };
  }
  describe("Setting Value", function () {
    it("Should set the correct value", async function () {
      const { mm } = await loadFixture(deployMyContract);
      await mm.setValue(9440);
      expect(await mm.getNum()).to.equal(9440);
    });
  });
});
