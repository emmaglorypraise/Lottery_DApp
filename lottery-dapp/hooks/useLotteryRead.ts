import { useContractRead } from 'wagmi';
import LOTTERY_ABI from "../abi/lottery.json";
import { LOTTERY_CONTRACT_ADDRESS } from "../config/index"


const useLotteryRead = (functionName="") => {
  const { data, isError, isLoading, status } = useContractRead({
    contractInterface: LOTTERY_ABI,
    addressOrName: LOTTERY_CONTRACT_ADDRESS,
    functionName,
  })
  return { data, isError, isLoading, status }
}

export default useLotteryRead