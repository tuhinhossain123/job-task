import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../../assets/images/hr.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./FoodItemSection.css";

const FoodItemSection = () => {
  const items = [
    {
      id: 1,
      img: "https://i.ibb.co.com/GMB62sr/burger.png",
      title: "vegetables burger",
      description: "Barbecue Italian cuisine pizza",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/8K2Qr1G/pizza-1.png",
      title: "Spacial Pizza",
      description: "Barbecue Italian cuisine pizza",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/dmL2PDz/pasta.png",
      title: "Special French Fries",
      description: "Barbecue Italian cuisine",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/jV21tLk/chicken.png",
      title: "Cuisine Chicken",
      description: "Japanese Cuisine Chicken",
    },
  ];

  return (
    <div className="w-full py-8 lg:py-[120px] px-6 bg-[#FBF7F2] relative">
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
              <h2 className="text-[40px] md:text-[62px] font-bebas font-medium text-[#181818] pt-4 pb-[30px] lg:pb-[60px]">
                POPULAR FOOD ITEMS
              </h2>
            </div>
            <div className="flex gap-8 justify-center items-center dekstop-nav">
              <div className="sldier-nav slider-prev">
                <IoIosArrowBack className="text-3xl"></IoIosArrowBack>
              </div>
              <div className="sldier-nav slider-next">
                <IoIosArrowForward className="text-3xl"></IoIosArrowForward>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {items.concat(items).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 mt-[30px] lg:mt-[50px] text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-4 w-[186px] h-[124px]"
                  />
                  <h2 className="my-6 border-2 border-red-500 w-[57px]  mx-auto"></h2>
                  <h3 className="text-2xl text-[#0A1425] font-bebas font-medium">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#0A1425] font-robotto font-normal">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-[21px] justify-center items-center pt-4 mob-nav">
            <div className="sldier-nav slider-prev">
              <IoIosArrowBack className="text-3xl"></IoIosArrowBack>
            </div>
            <div className="sldier-nav slider-next">
              <IoIosArrowForward className="text-3xl"></IoIosArrowForward>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img1} alt="" className="absolute left-0 top-[35%] hidden lg:block" />
      </div>
    </div>
  );
};

export default FoodItemSection;
