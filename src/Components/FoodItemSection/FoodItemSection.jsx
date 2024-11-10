import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../../assets/images/hr.png";
import img2 from "../../assets/images/burger.png";
import "./FoodItemSection.css"

const FoodItemSection = () => {
     const items = [
      {
        id: 1,
        title: "Vegetable Burger",
        description: "Barbecue Italian cuisine pizza",
      },
      {
        id: 2,
        title: "Special Pizza",
        description: "Barbecue Italian cuisine pizza",
      },
      {
        id: 3,
        title: "Special French Fries",
        description: "Barbecue Italian cuisine",
      },
      {
        id: 4,
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
            <h2 className="text-[40px] md:text-[62px] font-bebas font-semibold text-[#181818] pt-4 pb-[30px] lg:pb-[60px]">
              POPULAR FOOD ITEMS
            </h2>
          </div>
          <div className="flex gap-8 justify-center items-center dekstop-nav">
            <div className="sldier-nav slider-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M10.9718 18.941C11.2354 18.6773 11.3835 18.3197 11.3835 17.9468C11.3835 17.5739 11.2354 17.2163 10.9718 16.9526L4.01088 9.99161L10.9718 3.03068C11.228 2.76545 11.3697 2.41023 11.3665 2.04152C11.3633 1.6728 11.2154 1.3201 10.9547 1.05937C10.694 0.798637 10.3413 0.650745 9.97254 0.647541C9.60382 0.644337 9.2486 0.786079 8.98338 1.04224L1.02822 8.9974C0.764588 9.26111 0.616488 9.61873 0.616488 9.99161C0.616488 10.3645 0.764588 10.7221 1.02822 10.9858L8.98338 18.941C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.941Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="sldier-nav slider-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922Z" fill="currentColor"/>
              </svg>
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
              nextEl: '.slider-next',
              prevEl: '.slider-prev',
            }}
            breakpoints={{
              640: { slidesPerView : 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
           {items.concat(items).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src={`https://via.placeholder.com/100`}
                    alt={item.title}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <hr className="my-2 border-red-500 w-8 mx-auto" />
                </div>
              </SwiperSlide>
            ))} 
            {/* <SwiperSlide>
              <div className="bg-white p-8 text-center">
                <img src={img2} alt="" className="w-[132px] mx-auto" />
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-gray-600"></p>
                <hr className="my-6 border-primary w-[57px]  mx-auto" />
                <h2 className="text-[#0A1425] text-2xl font-bebas font-bold">vegetables burger</h2>
                <h3 className="text-[#0A1425] text-[16px] font-robotto font-normal">Barbecue Italian cuisine pizza</h3>
              </div>
            </SwiperSlide> */}
          </Swiper>
          <div className="flex gap-[21px] justify-center items-center pt-4 mob-nav">
            <div className="sldier-nav slider-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M10.9718 18.941C11.2354 18.6773 11.3835 18.3197 11.3835 17.9468C11.3835 17.5739 11.2354 17.2163 10.9718 16.9526L4.01088 9.99161L10.9718 3.03068C11.228 2.76545 11.3697 2.41023 11.3665 2.04152C11.3633 1.6728 11.2154 1.3201 10.9547 1.05937C10.694 0.798637 10.3413 0.650745 9.97254 0.647541C9.60382 0.644337 9.2486 0.786079 8.98338 1.04224L1.02822 8.9974C0.764588 9.26111 0.616488 9.61873 0.616488 9.99161C0.616488 10.3645 0.764588 10.7221 1.02822 10.9858L8.98338 18.941C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.941Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="sldier-nav slider-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img1} alt="" className="absolute left-0 bottom-4" />
      </div>
    </div>
  );
};

export default FoodItemSection;
