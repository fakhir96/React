import {React, useState} from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex w-full justify-between items-center py-6 navbar'>
      <img src={logo} alt="bank-logo" className="w-[124px] h-[28px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dim-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex justify-end items-center flex-1' >
        <img src={toggle ? close : menu} alt="menu" 
          className='object-contain h-[28px] w-[28px]' 
          onClick={() => setToggle((prev) => !prev)} 
        />

        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 
         right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} 
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dim-white"
                } ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar
