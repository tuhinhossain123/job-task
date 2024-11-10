import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../../assets/images/hr.png";
import img2 from "../../assets/images/burger.png";

const FoodItemSection = () => {
  //   const items = [
  //     {
  //       id: 1,
  //       title: "Vegetable Burger",
  //       description: "Barbecue Italian cuisine pizza",
  //     },
  //     {
  //       id: 2,
  //       title: "Special Pizza",
  //       description: "Barbecue Italian cuisine pizza",
  //     },
  //     {
  //       id: 3,
  //       title: "Special French Fries",
  //       description: "Barbecue Italian cuisine",
  //     },
  //     {
  //       id: 4,
  //       title: "Cuisine Chicken",
  //       description: "Japanese Cuisine Chicken",
  //     },
  //   ];

  return (
    <div className="w-full py-8 lg:py-[120px] px-6 bg-[#FBF7F2] relative">
      <div className="max-w-[1320px] mx-auto ">
        <div className="">
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
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {/* {items.concat(items).map((item, index) => (
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
            ))} */}
            <SwiperSlide>
              <div className="bg-white p-8 text-center">
                <img src={img2} alt="" className="w-[132px] mx-auto" />
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-gray-600"></p>
                <hr className="my-6 border-primary w-[57px]  mx-auto" />
                <h2 className="text-[#0A1425] text-2xl font-bebas font-bold">vegetables burger</h2>
                <h3 className="text-[#0A1425] text-[16px] font-robotto font-normal">Barbecue Italian cuisine pizza</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <img src={img1} alt="" className="absolute left-0 bottom-4" />
      </div>
    </div>
  );
};

export default FoodItemSection;
