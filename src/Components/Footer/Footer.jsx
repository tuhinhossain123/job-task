import footer from "../../assets/images/Footer.png";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="w-full mt-8 lg:mt-[120px] py-[30px] lg:py-[120px] px-6"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${footer})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1320px] mx-auto z-30">
        <h2 className="text-center text-[40px] text-white lg:text-[62px] font-bebas font-bold ">
          We ready to have you the best dining experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          <div className="">
            <h2>
              <MdOutlineWatchLater className="w-[30px] h-[30px] mx-auto text-secondury hover:text-primary"></MdOutlineWatchLater>
            </h2>
            <h3 className="text-2xl text-white text-center font-bebas font-bold pt-4 lg:pt-6">
              Opening hours
            </h3>
            <div>
              <h4 className="pt-3 text-[16px] text-white text-center  font-robotto font-normal leading-[1.7]">
                Monday - Sunday <br /> 9:00 AM to 11:30 PM
              </h4>
            </div>
          </div>
          <div className="">
            <h2>
              <FiPhoneCall className="w-[30px] h-[30px] mx-auto text-secondury hover:text-primary"></FiPhoneCall>
            </h2>
            <h3 className="text-2xl text-white text-center  font-bebas font-bold pt-4 lg:pt-6">
              LET'S TALK
            </h3>
            <h4 className="pt-3 text-[16px] text-white text-center  font-robotto font-normal leading-[1.7]">
              Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545
            </h4>
          </div>
          <div className="">
            <h2>
              <AiOutlineMail className="w-[30px] h-[30px] mx-auto text-secondury hover:text-primary"></AiOutlineMail>
            </h2>
            <h3 className="text-2xl text-white text-center font-bebas font-bold pt-4 lg:pt-6">
              BOOK A TABLE
            </h3>
            <h4 className="pt-3 text-[16px] text-white text-center  font-robotto font-normal leading-[1.7]">
              Email: demo@website.com <br /> Support: support@website.com
            </h4>
          </div>
          <div className="">
            <h2>
              <CiLocationOn className="w-[30px] h-[30px] mx-auto text-secondury hover:text-primary"></CiLocationOn>
            </h2>
            <h3 className="text-2xl text-center text-white font-bebas font-bold pt-4 lg:pt-6">
              Our Address
            </h3>
            <h4 className="pt-3 text-[16px] text-white text-center  font-robotto font-normal">
              123 Stree New York City , United <br /> States Of America.
            </h4>
          </div>
        </div>

        <div className="flex justify-center items-center gap-[18px] lg:gap-6 pt-[60px] lg:pt-[120px]">
          <div className="border hover:border-primary rounded-full p-[14px] hover:-translate-y-1 duration-300">
            <Link className="">
              <FaFacebook className="text-white hover:text-primary text-2xl"></FaFacebook>
            </Link>
          </div>
          <div className="border hover:border-primary rounded-full p-[14px] hover:-translate-y-1 duration-300">
            <Link className="">
              <FaSquareXTwitter className="text-white hover:text-primary text-2xl"></FaSquareXTwitter>
            </Link>
          </div>
          <div className="border hover:border-primary rounded-full p-[14px] hover:-translate-y-1 duration-300">
            <Link className="">
              <FaInstagramSquare className="text-white hover:text-primary text-2xl"></FaInstagramSquare>
            </Link>
          </div>
          <div className="border hover:border-primary rounded-full p-[14px] hover:-translate-y-1 duration-300">
            <Link className="">
              <FaLinkedin className="text-white hover:text-primary text-2xl"></FaLinkedin>
            </Link>
          </div>
        </div>
        <h2 className="text-[16px] lg:text-[21px] text-white text-center font-robotto font-normal pt-4 lg:pt-6">
          © 2023 All Rights Reserved{" "}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
