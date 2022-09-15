const About = () => {
  return (
    <>
      <p className="text-blue-500 text-2xl mt-8 mb-1 text-center">
        About STAR<span>Lottery</span>
      </p>
      <div className="py-7 w-4/5 md:w-3/5 mx-auto  px-3 my-7 bg-white shadow border-blue-500 sm:rounded-lg border rounded-2xl">
        <p className="text-gray-700 text-center text-2xl my-2">A lottery game</p>
        <p className="text-xl text-center text-gray-500 my-2">This project was built by Glory Praise with:</p>
        <div>
        <ul className="list-disc list-inside text-left mb-3">
          <li>NextJS</li>
          <li>TailwindCSS & PostCSS</li>
          <li>Wagmi & Connectkit</li>
          <li>React toastify</li>
          <li>Typescript/Typechain</li>
          <li>Solidity </li>
          <li>Hardhat</li>
        </ul>
        </div>
        <div>
           <span className="text-lg  text-left text-gray-700 my-2">Follow me on Twitter</span> <a className="text-blue-500 text-lg underline" href={"https://twitter.com/emmaglorypraise"}>here</a>
        </div>
        <div>
           <span className="text-lg  text-left text-gray-700 my-2">Follow me on Github</span> <a className="text-blue-500 text-lg underline" href={"https://github.com/emmaglorypraise"}>here</a>
        </div>
        <div>
           <span className="text-lg  text-left text-gray-700 my-2">Subscribe to my Youtube channel</span> <a className="text-blue-500 text-lg underline" href={"https://www.youtube.com/channel/UCPYSZMwlsGFjWGltTCYuEvg"}>here</a>
        </div>
      </div>
    </>
  );
};

export default About;
