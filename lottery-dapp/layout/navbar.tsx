import Link from 'next/link';
import { useState } from 'react';
import ConnectButton from '../components/ConnectBtn';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className="bg-gray-100 p-6">
      <div className="flex items-center justify-between flex-wrap">
        <div className="block">
          <Link href="/">
            <span className="font-semibold cursor-pointer text-xl tracking-tight text-gray-800">
              STAR<span>Lottery</span>
            </span>
          </Link>
        </div>
        <button className=' inline-flex p-3 hover:bg-black rounded lg:hidden text-black ml-auto hover:text-white outline-none' onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <nav className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            {/* <div> */}
            <Link href="/">
            <span className="lg:inline-flex lg:w-auto w-full pr-3 py-2 rounded font-bold items-center justify-center  cursor-pointer text-gray-800 hover:text-gray-600 lg:mr-4">
              Home
            </span>
          </Link>
          <Link href="/winner">
            <span className="lg:inline-flex lg:w-auto w-full pr-3 py-2 rounded font-bold items-center justify-center  cursor-pointer text-gray-800 hover:text-gray-600 lg:mr-4">
              Check Winner
            </span>
          </Link>
          <Link href="/about">
            <span className="lg:inline-flex lg:w-auto w-full pr-3 py-2 rounded font-bold items-center justify-center  cursor-pointer text-gray-800 hover:text-gray-600 lg:mr-4">
              About
            </span>
          </Link>
            {/* </div> */}
        <ConnectButton />

          </div>
          
        
        </nav>
      </div>
    </header>
  )
};
export default Navbar;