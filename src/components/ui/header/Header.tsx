import logo from '/icons/logo.png';
import phone from '/icons/phone.png';
import power from '/icons/power.png';
import cart from '/icons/cart.png';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import MobileHeader from './MobileHeader';
import { IoSearch } from 'react-icons/io5';
// import useMediaQuery from '../../hooks/useMediaQuery';
export default function Header() {
  const [hamburgerMenu, setHamburgeMenu] = useState(false);

  // const isDesktop = useMediaQuery('(min-width: 960px)');

  function handleHamburgerMenu() {
    setHamburgeMenu(!hamburgerMenu);
  }
  return (
    <>
      <header className=" bg-cyan-200">
        <div className="flex items-center max-h-16  justify-between px-5 relative">
          <div className="flex items-center justify-between gap-1">
            <div
              className="flex sm:hidden transition-opacity ease-in-out duration-300 "
              onClick={handleHamburgerMenu}
            >
              {hamburgerMenu ? <IoMdClose /> : <RxHamburgerMenu />}
            </div>
            {hamburgerMenu ? <MobileHeader /> : ''}
            <div>
              <figure>
                <img src={logo} alt="Logo of hoko" className="h-16 sm:h-auto" />
              </figure>
            </div>
          </div>
          <div className="flex sm:hidden items-center gap-2">
            <figure>
              <IoSearch className="h-5 w-5" />
            </figure>
            <figure>
              <img src={cart} alt="" className="h-5 w-5" />
            </figure>
          </div>

          <nav className="hidden sm:flex">
            <ul className="flex gap-12 items-center">
              <li className="center-items ">
                <img src={phone} alt="" />
                Phone accessories{' '}
              </li>
              <li className="center-items ">
                <img src={power} alt="" />
                Power
              </li>
              <li className="center-items ">
                <img src={cart} alt="" />
                Add to cart
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
