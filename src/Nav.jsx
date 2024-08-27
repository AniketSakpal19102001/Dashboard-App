import { IoMdSearch } from "react-icons/io";
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdNotificationsActive } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  // console.log(isOpen);

  return (
    <>
      <nav className="flex justify-between bg-white lg:items-start py-2 w-full ">
        <div className="ml-5">
          <p className="text-blue-950 font-semibold text-xl">Dashboard</p>
        </div>
        <div>
          {isOpen ? (
            <span
              className="px-3 flex items-center md:hidden w-full  h-full"
              onClick={toggleMenu}
            >
              <IconContext.Provider value={{ color: "#475569", size: "25px" }}>
                <IoCloseSharp />
              </IconContext.Provider>
            </span>
          ) : (
            <span
              className="px-3 flex items-center md:hidden h-full"
              onClick={toggleMenu}
            >
              <IconContext.Provider value={{ color: "#475569", size: "20px" }}>
                <RxHamburgerMenu />
              </IconContext.Provider>
            </span>
          )}
          <ul className="list-none mr-5 text-xl hidden mt-2 md:mt-0 md:flex">
            <li className="px-3 ">
              <div className="absolute ml-2 flex justify-center items-center py-1">
                <IconContext.Provider value={{ color: "#475569" }}>
                  <IoMdSearch />
                </IconContext.Provider>
              </div>

              <input
                type="text"
                placeholder="Search anything"
                className="bg-slate-200 rounded-md text-slate-300 pl-9"
              ></input>
            </li>
            <li className="px-3 hidden md:block py-1">
              <IconContext.Provider value={{ color: "#475569" }}>
                <MdNotificationsActive />
              </IconContext.Provider>
            </li>
            <li className="px-3 ">
              <p>Admin</p>
            </li>

            <li className="px-3 ">Settings</li>
            <li className="px-3 ">Logout</li>
            {/* <li
              className="px-3 flex items-center md:hidden"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu />
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
