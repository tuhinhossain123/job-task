import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../../assets/images/hr.png";
import icon from "../../assets/images/“ (1).png";
import video from "../../assets/images/Video.png";
import img2 from "../../assets/images/Group.svg";
import play from "../../assets/images/Play.png";
import img3 from "../../assets/images/221.png";
import img4 from "../../assets/images/12.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./TestimonialSection.css";
import { Link } from "react-router-dom";
const TestimonialSection = () => {
  const items = [
    {
      id: 1,
      img: "https://i.ibb.co.com/0tmwjQF/Image.png",
      name: "Khalid Al Dawsry",
      title: "Jeddah, Saudi",
      description:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    },
  ];
  return (
    <div className="w-full py-8 lg:py-[120px] px-6  relative">
      <div className="max-w-[1320px] mx-auto ">
        <div className="">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-[10px]">
                <h1 className="w-[10px] h-[10px] bg-primary"></h1>
                <h2 className="text-primary font-robotto font-bold text-lg md:text-[20px]">
                  Crispy, Every Bite Taste
                </h2>
              </div>
              <h2 className="text-[40px] md:text-[62px] font-bebas font-medium text-[#181818] pt-4">
                What Some of my Customers Say
              </h2>
            </div>
            <div className="flex gap-8 justify-center items-center mov-btn">
              <div className="slider-btn slider-prev">
                <IoIosArrowBack className="text-3xl"></IoIosArrowBack>
              </div>
              <div className="slider-btn slider-next">
                <IoIosArrowForward className="text-3xl"></IoIosArrowForward>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop={true}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
          >
            {items.concat(items).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="mt-[30px] lg:mt-[50px] text-center flex flex-col-reverse lg:flex-row">
                  <div className="bg-[#FEBF00] p-6 lg:py-[19px] lg:px-16 w-full lg:w-[40%] ">
                    <div className="relative lg:pt-14">
                      <p className="text-[20px] font-robotto font-normal text-justify pt-2 pl-5">
                        {item.description}
                      </p>
                      <div className="absolute top-0 lg:top-14 left-0">
                        <img src={icon} alt="" className="" />
                      </div>
                    </div>
                    <div className="pt-16 lg:pt-40">
                      <div className="flex justify-between items-center">
                        <div>
                          <h2 className="text-lg font-bebas font-medium">
                            {item.name}
                          </h2>
                          <h3 className="text-[14px] font-robotto font-normal text-left">
                            {item.title}
                          </h3>
                        </div>
                        <div>
                          <img src={item.img} alt={item.title} className="" />
                        </div>
                      </div>
                      <h2 className="border border-black mt-4"></h2>
                    </div>

                    {/* content side bg img */}
                    <div>
                      <img
                        src={img2}
                        alt=""
                        className="absolute left-0 bottom-0 lg:top-[78%] w-6 lg:w-[39px] h-[39px] lg:h-[76px]"
                      />
                    </div>
                  </div>
                  {/* ride side video section */}
                  <div className="w-full lg:w-[60%] relative">
                    <img src={video} alt="" />
                    <Link to="https://www.youtube.com/watch?v=CWONtDyT16E">
                      <div className="absolute top-[50%] left-[45%]">
                        <img src={play} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* bg-img */}
          <div className="flex gap-[21px] justify-center items-center pt-4 mob-btn">
            <div className="slider-btn slider-prev">
              <IoIosArrowBack className="text-3xl"></IoIosArrowBack>
            </div>
            <div className="slider-btn slider-next">
              <IoIosArrowForward className="text-3xl"></IoIosArrowForward>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={img3}
          alt=""
          className="absolute left-0 top-[20%] hidden lg:block"
        />
        <img
          src={img4}
          alt=""
          className="absolute right-0 bottom-10 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;