import type { NextPage } from 'next';
import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import useLotteryRead from '../hooks/useLotteryRead';

import truncateEthAddress from 'truncate-eth-address';
import useLotteryWrite from "../hooks/useLotteryWrite";
import {useWaitForTransaction} from "wagmi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {

  const [amount, setAmount] = useState(0.0001);
  const [lotteryBal, setLotteryBal] = useState(0);
  const [noOfPlayers, setNoOfPlayers] = useState(0);
  const [playerAddress, setPlayerAddress] = useState<string>();
  const {data:getLotteryBal, isError} = useLotteryRead("checkLotteryBalance");
  const {data:getNoOfPlayers} = useLotteryRead("checkNoOfPlayers");
  const {data:playersRecord} = useLotteryRead("playersRecord");
  
  // console.log(playersRecord);
  const { address } = useAccount();

  const {data, write, isError:playError,  } = useLotteryWrite("deposit", amount);
  // const { isLoading:playLoad, isSuccess:playSuccess } = useWaitForTransaction({
  //   hash: data?.hash,
  // })
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data: any) {
      toast.success(`Successfully entered the lottery ${isLoading}, ${isSuccess}, ${data}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    },
    onError(error: any) {
      toast.error(`${error?.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    },
  })
// }



  //type for input
  const handleAmount = (e:any) => {
    console.log(e.target.value);
    setAmount(e.target.value)
  }

  const cal = Number(getLotteryBal) / 10 ** 18
  const cal2 = cal.toFixed(4);

  useEffect(() => {
    setPlayerAddress(address)
    setLotteryBal(Number(cal2));
    setNoOfPlayers(Number(getNoOfPlayers));
  }, []);
  
 
  return (
    <>
      <div className="mx-auto text-center ">
        <h3 className="bg-blue-500 text-white py-3">
          Lottery is still ongoing!!! Add money to participate
        </h3>

        <div className="py-7 w-4/5 md:w-3/5 mx-auto text-left pl-5 my-7 border bg-white shadow sm:rounded-lg rounded-2xl">
          <p className="text-xl my-2">
            Lottery Balance: <span>{lotteryBal} ETH</span>
          </p>
          <p className="text-xl my-2">
            Current No of Players: <span>{noOfPlayers}</span>
          </p>
        </div>

        <div className="py-4 w-4/5 md:w-3/5 mx-auto text-left my-3">
          <p className="text-gray-700 text-2xl my-2">Play Lottery</p>
          <p className="text-gray-700 text-sm font-bold mb-2">
            Your address is: <span>{truncateEthAddress(String(playerAddress))}</span>
          </p>
          <div className="flex mt-3">
            <input
              className="shadow appearance-none border rounded-l-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Input lottery ticket fee - 0.0001 ETH"
              onChange={handleAmount} 
              type="number" 
              value={amount}
            ></input>
            <button className="bg-blue-500 p-2 text-white rounded-r-xl"
            onClick={() => write?.()}>
              Play
            </button>
          </div>
          <p className="mt-1 text-gray-500 text-sm">
            Note: ETH is the only accepted payment
          </p>
        </div>

        <div className="py-2 w-4/5 md:w-3/5 mx-auto text-left mt-2 ">
          <div className=" bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-3">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Lottery Players
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Player registered for this game
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">S/N</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex place-content-between">
                    Address
                    <span>Amount</span>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">1.</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex place-content-between">
                    0x0888ffff..... <span>1ETH</span>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">2.</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex place-content-between">
                    0x0888ffff..... <span>1ETH</span>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">3.</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex place-content-between">
                    0x0888ffff..... <span>1ETH</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
