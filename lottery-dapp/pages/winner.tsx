import React, { useState, useEffect } from "react";
import useLotteryRead from '../hooks/useLotteryRead';
import useLotterySign from "../hooks/useLotterySign";
import truncateEthAddress from 'truncate-eth-address';
import {useWaitForTransaction} from "wagmi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Winner = () => {

  const [winnerAddress, setWinnerAddress] = useState<string>("No winner yet");
  const [winnerBalance, checkWinnerBalance] = useState(10);
  // @ts-ignore
  const {data:getWinnerAddress, status} = useLotteryRead("winner");
  // @ts-ignore
  const {data:getWinnerBal} = useLotteryRead("checkWinnerBalance");
  const {data, writeAsync, error, isError } = useLotterySign("pickWinner");
  
  console.log(isError, "line 16");
  console.log(error);
  console.log(status);
  
  // const picker = () => {
    const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,
      onSuccess(data: any) {
        toast.success(`Successfully picked winner, refresh page! ${data}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      },
      onError(data: any) {
        toast.error(`${data.data}`, {
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
  



  const cal = Number(getWinnerBal) / 10 ** 18
  const cal2 = cal.toFixed(4);

  useEffect(() => {
    // @ts-ignore
    if(getWinnerAddress === "0x0000000000000000000000000000000000000000"){
      setWinnerAddress("No winner yet")
      checkWinnerBalance(0);
    } else {
      setWinnerAddress(truncateEthAddress(String(getWinnerAddress)));
      checkWinnerBalance(Number(cal2))
    }

  }, []);
  

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      {/* Same as */}
    <ToastContainer />
      <div className="py-7  w-4/5 md:w-3/5 mx-auto text-center my-7 text-gray-700 bg-white shadow sm:rounded-lg border rounded-2xl">
        <p className="text-blue-500 text-2xl font-bold my-2">Latest Winner</p>
        <p className="text-xl my-2">
          Address: <span>{winnerAddress}</span>
        </p>
        <p className="text-xl my-2">
          Amount won: <span>{winnerBalance} ETH</span>
        </p>
      </div>

      <div className="py-7 w-4/5 md:w-3/5 mx-auto justify-between text-center my-7 bg-white shadow border-blue-500 sm:rounded-lg border rounded-2xl">
        <p className="text-gray-700 text-2xl my-2">Pick Random Winner</p>
        <p className="text-xl text-gray-500 my-2">
          This can only be done by staff member
        </p>
        <button className="bg-blue-500 p-3 mt-4 rounded text-white" disabled={!writeAsync} onClick={() => writeAsync?.()}>
        {isLoading ? 'Picking...' : 'Pick Winner'}
        </button>

      </div>
    </>
  );
};

export default Winner;
