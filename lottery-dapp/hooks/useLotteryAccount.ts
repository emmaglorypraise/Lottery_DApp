import { useAccount } from 'wagmi';

const useLotteryAccount = async () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  return { address, isConnecting, isDisconnected };
}

export default useLotteryAccount;
