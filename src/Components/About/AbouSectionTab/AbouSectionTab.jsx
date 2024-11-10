import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";

const AbouSectionTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="">
        <div className="flex  gap-8 border-b-2 w-full border-[#BD1F17]">
          <button
            className={` ${
              activeTab === 0
                ? "border-2 border-b-0 bg-[#BD1F17] outline-none text-white text-sm  font-robotto font-medium px-6 py-[6px]"
                : "text-[#333333] text-sm  font-robotto font-medium"
            }`}
            onClick={() => setActiveTab(0)}
          >
            About
          </button>
          <button
            className={` ${
              activeTab === 1
                ? "border-2 border-b-0 bg-[#BD1F17] outline-none text-white text-sm  font-robotto font-medium px-6 py-[6px]"
                : "text-[#333333] text-sm  font-robotto font-medium"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Experience
          </button>
          <button
            className={` ${
              activeTab === 2
                ? "border-2 border-b-0 bg-primary outline-none text-white text-sm font-robotto font-medium px-6 py-[6px]"
                : "text-[#333333] text-sm  font-robotto font-medium"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Contact
          </button>
        </div>
        <div className="pt-8">
          {activeTab === 0 && (
            <div>
              <h1 className="text-[#181818] font-bebas font-bold text-[40px] lg:text-[60px] leading-[1.2]">
                Exceptional culinary <br /> experience and delicious food
              </h1>
              <p className="pt-[18px] text-base font-robotto font-normal text-[333] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex items-center gap-4 lg:gap-8 pt-8">
                <button className="bg-secondury px-4 lg:px-6 py-3 lg:py-4 text-black text-sm lg:text-lg font-bold ">
                  Explore Menu
                </button>
                <h2 className="flex items-center gap-2">
                  <span>
                    <FiPhoneCall className="w-6 h-6 text-primary"></FiPhoneCall>
                  </span>
                  <span className="text-lg font-robotto font-bold text-[#0A1425]">
                    +88 3426 739 485
                  </span>
                </h2>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h1 className="text-[#181818] font-bebas font-bold text-[40px] lg:text-[60px] leading-[1.2]">
                Exceptional culinary <br /> experience and delicious food
              </h1>
              <p className="pt-[18px] text-base font-robotto font-normal text-[333] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex items-center gap-4 lg:gap-8 pt-8">
                <button className="bg-secondury px-4 lg:px-6 py-3 lg:py-4 text-black text-sm lg:text-lg font-bold ">
                  Explore Menu
                </button>
                <h2 className="flex items-center gap-2">
                  <span>
                    <FiPhoneCall className="w-6 h-6 text-primary"></FiPhoneCall>
                  </span>
                  <span className="text-lg font-robotto font-bold text-[#0A1425]">
                    +88 3426 739 485
                  </span>
                </h2>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h1 className="text-[#181818] font-bebas font-bold text-[40px] lg:text-[60px] leading-[1.2]">
                Exceptional culinary <br /> experience and delicious food
              </h1>
              <p className="pt-[18px] text-base font-robotto font-normal text-[333] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex items-center gap-4 lg:gap-8 pt-8">
                <button className="bg-secondury px-4 lg:px-6 py-3 lg:py-4 text-black text-sm lg:text-lg font-bold ">
                  Explore Menu
                </button>
                <h2 className="flex items-center gap-2">
                  <span>
                    <FiPhoneCall className="w-6 h-6 text-primary"></FiPhoneCall>
                  </span>
                  <span className="text-lg font-robotto font-bold text-[#0A1425]">
                    +88 3426 739 485
                  </span>
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AbouSectionTab;
