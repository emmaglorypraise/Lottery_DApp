import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  // ----------------- DEPLOY SCRIPT HERE ----------------------

  // const Lottery = await ethers.getContractFactory("Lottery");
  // const lottery = await Lottery.deploy();

  // await lottery.deployed();

  // console.log("My Lottery contract deployed on Rinkeby at:", lottery.address);

  // Goerli address: 0x602D8cc8E78a555afbfe7BCe23c6219e6EfB29B5
  const CONTRACT_ADDRESS = "0x3BB0dA43e0a9e2efA9641650470482658D5F446f"; //rinkeby

  const MYDEPLOYEDLOTTERY = await ethers.getContractAt(
    "ILottery",
    CONTRACT_ADDRESS
  );
  const response = await MYDEPLOYEDLOTTERY.checkLotteryBalance();
  console.log(response);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
