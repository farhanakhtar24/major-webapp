import React from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import LinkButton from '../components/LinkButton';

type Props = {}

const HomePage = (props: Props) => {
    
  return (
    <div className="w-full h-[90vh] flex items-center justify-center bg-gradient-to-r from-white to-[#bcd5e3]">
      <div className="flex-1 flex flex-col items-start justify-center pl-40">
        <h1 className="text-black font-bold text-8xl">
          Remove rain
          <br />
          streaks.
        </h1>
        <p className="text-[#a6a6a6] text-lg mb-2">
          AI trained to de-rain any image with rain streaks.
        </p>
        <LinkButton />
      </div>
      <div className="flex-1 group relative">
        <img
          className="rounded-lg absolute -top-40 z-0 w-[500px] group-hover:z-20"
          src="rain.png"
          alt="rain"
        />
        <img
          className="rounded-lg absolute -top-20 left-20 w-[500px] z-10"
          src="deRained.png"
          alt="rain"
        />
      </div>
    </div>
  );
}

export default HomePage;