import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import img from "../../../assets/images/Frame.png";
import { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed z-10 bg-opacity-30">
      <div className="max-w-[1320px] mx-auto">
        <div className="px-6 lg:px-0 py-8 flex justify-between items-center relative">
          <div className="">
            <div className="flex items-center lg:gap-[60px]">
              {/* logo and title here */}
              <div>
                <Link to="/" className="flex items-center gap-[6px]">
                  <div>
                    <img src={img} alt="" className="w-9" />
                  </div>
                  <div>
                    <h2 className="text-[28px] text-white">
                      <span className="font-bold">Restau</span>
                      <span className="font-semibold">rant</span>
                    </h2>
                  </div>
                </Link>
              </div>

              {/* navlink here here */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-10 ">
                  <Link className="text-[15px] font-medium text-white">
                    Home
                  </Link>
                  <Link className="text-[15px] font-medium text-white">
                    About
                  </Link>
                  <Link className="text-[15px] font-medium text-white">
                    Portfolio
                  </Link>
                  <Link className="text-[15px] font-medium text-white">
                    Clients
                  </Link>
                  <Link className="text-[15px] font-medium text-white">
                    Blog
                  </Link>
                  <Link className="text-[15px] font-medium text-white">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="text-5xl absolute right-6 top-8 cursor-pointer lg:hidden text-white"
            >
              {open ? <RxCross2 /> : <IoMenuOutline />}
            </div>
          </div>
          <div
            className={`lg:flex lg:items-center lg:gap-8 absolute lg:static left-0 w-full lg:w-auto z-50 bg-[#4a4a4a] lg:bg-transparent transition-all duration-500 ease-in ${
              open
                ? "top-24 opacity-100"
                : "top-[-400px] opacity-0 lg:opacity-100"
            }`}
          >
            <div className="lg:flex items-center lg:gap-8 text-white text-center py-10 lg:py-0">
              {/* small device navlink here */}
              <div className="lg:hidden md:block">
                <div className="flex flex-col items-center gap-5 md:gap-8">
                  <Link className="text-xl lg:text-[15px] font-medium text-white">
                    Home
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-medium text-white">
                    About
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-medium text-white">
                    Portfolio
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-medium text-white">
                    Clients
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-medium text-white">
                    Blog
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-medium text-white">
                    Contact
                  </Link>
                </div>
              </div>
              {/* book a table button here */}
              <div className="mt-10 lg:mt-0">
                <button className="bg-[#FEBF00] px-6 py-[10px] text-black text-[16px] font-bold ">
                  Book a table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
