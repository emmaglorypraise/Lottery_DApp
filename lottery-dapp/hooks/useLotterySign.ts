import { ethers } from "ethers";
import { useContractWrite } from 'wagmi';
import contractInterface from "../abi/lottery.json"
import { LOTTERY_CONTRACT_ADDRESS } from "../config"

const useLotterySign = (functionName="", value=0) => {

  // @ts-ignore
  const { data, error, isError, isLoading, write, writeAsync } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: LOTTERY_CONTRACT_ADDRESS,
    contractInterface: contractInterface,
    functionName,})
  return { data, isLoading, write, writeAsync, error, isError }
}

export default useLotterySign;
