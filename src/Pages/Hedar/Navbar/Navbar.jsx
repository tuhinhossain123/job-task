import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import img from "../../../assets/images/Frame.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  let [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed z-10 lg:px-6 transition-colors duration-300 ${
        scrolled ? "bg-[#BD1F17]" : "bg-opacity-30"
      }`}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="py-[20px] flex justify-between items-center relative">
          <div className="">
            <div className="flex items-center lg:gap-[60px]">
              {/* logo and title */}
              <div>
                <Link
                  to="https://job-task-nu-two.vercel.app/"
  
                  className="flex items-center gap-[6px] pl-[24px] lg:pl-0"
                >
                  <div>
                    <img src={img} alt="" className="w-9" />
                  </div>
                  <div>
                    <h2 className="text-[28px] text-white font-poppins">
                      <span className="font-bold">Restau</span>
                      <span className="font-medium">rant</span>
                    </h2>
                  </div>
                </Link>
              </div>

              {/* Nav links for large screens */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-10 ">
                  <Link className="text-[15px] font-releway font-medium text-white">
                    Home
                  </Link>
                  <Link className="text-[15px] font-releway font-medium text-white">
                    About
                  </Link>
                  <Link className="text-[15px] font-releway font-medium text-white">
                    Portfolio
                  </Link>
                  <Link className="text-[15px] font-releway font-medium text-white">
                    Clients
                  </Link>
                  <Link className="text-[15px] font-releway font-medium text-white">
                    Blog
                  </Link>
                  <Link className="text-[15px] font-releway font-medium text-white">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu button for mobile */}
            <div
              onClick={() => setOpen(!open)}
              className="text-5xl absolute right-[24px] top-[20px] cursor-pointer lg:hidden text-white"
            >
              {open ? <RxCross2 /> : <IoMenuOutline />}
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:flex lg:items-center lg:gap-8 absolute lg:static left-0 w-full lg:w-auto z-50 bg-primary lg:bg-transparent transition-all duration-500 ease-in ${
              open
                ? "top-20 opacity-100"
                : "top-[-400px] opacity-0 lg:opacity-100"
            }`}
          >
            <div className="lg:flex items-center lg:gap-8 text-white text-center py-10 lg:py-0">
              {/* Mobile nav links */}
              <div className="lg:hidden md:block">
                <div className="flex flex-col items-center gap-5 md:gap-8">
                  <Link className="text-xl lg:text-[15px] font-releway font-medium text-white">
                    Home
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-releway font-medium text-white">
                    About
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-releway font-medium text-white">
                    Portfolio
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-releway font-medium text-white">
                    Clients
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-releway font-medium text-white">
                    Blog
                  </Link>
                  <Link className="text-xl lg:text-[15px] font-releway font-medium text-white">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Book a table button */}
              <div className="mt-10 lg:mt-0">
                <button className="bg-secondury px-6 py-[10px] text-black text-[16px] font-robotto font-bold">
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
