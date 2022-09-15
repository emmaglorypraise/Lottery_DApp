import { ethers } from "ethers";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import contractInterface from "../abi/lottery.json"
import { LOTTERY_CONTRACT_ADDRESS } from "../config"

const useLotteryWrite = (functionName="", value=0) => {

  // const { config, 
  //   error: prepareError,
  //   isError: isPrepareError } = usePrepareContractWrite({
  //   addressOrName: LOTTERY_CONTRACT_ADDRESS,
  //   contractInterface: contractInterface,
  //   functionName,
  //   overrides: {
  //     value: ethers.utils.parseEther(value ? value?.toString() : "0"),
  //   },
  // })

  // @ts-ignore
  const { data, isError, isLoading, write, writeAsync } = useContractWrite({
      mode: "recklesslyUnprepared",
      addressOrName: LOTTERY_CONTRACT_ADDRESS,
      contractInterface: contractInterface,
      functionName,
      overrides: {
        value: ethers.utils.parseEther(value ? value?.toString() : "0")}
      })
  // console.log(data, isError, isLoading, write, writeAsync , "line 18")
  return { data, isError, isLoading, write, writeAsync }
}


export default useLotteryWrite;
