'use client'
import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'

type Props = {}

const Navbar = (props: Props) => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <nav className="w-screen bg-[#8eb8d0] h-fit overflow-hidden">
      <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-[10vh] m-auto text-white flex items-center justify-between">
        <div>
          <h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">
            Image De-Rain
          </h1>
        </div>
        <div className="md:flex hidden lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center">
          <span className="group">
            Services
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
          <span className="group">
            About
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
          <span className="group">
            Contact
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
          </span>
        </div>
        <div className="md:hidden flex items-center text-xl">
          {isMenuOpen ? (
            <AiOutlineClose onClick={toggleMenu} />
          ) : (
            <RxHamburgerMenu onClick={toggleMenu} />
          )}
        </div>
        <div
          id="mobileNav"
          className={`fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-teal-500 h-full inset-0 top-16 w-[70%] ${
            isMenuOpen ? "left-0" : "left-[-70%]"
          } ease-in-out duration-500 cursor-pointer`}
        >
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar