import bannerBg from "../../../assets/images/bg-img.png";
import img1 from "../../../assets/images/image 1.png";
import img2 from "../../../assets/images/Offer (2).png";
import img3 from "../../../assets/images/Vector.png";
const Banner = () => {
  return (
    <div
      className="w-full pt-[130px] lg:pt-[260px] pb-8 lg:pb-[160px] bg-[#BD1F17] px-6"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
          <div>
            <h2 className="text-5xl lg:text-[120px] font-bebas font-medium hidden lg:block  text-white leading-[1.1] lg:absolute lg:top-28 lg:bg-gradient-to-r from-[#BD1F17]/10 to-[#BD1F15]/80 pt-5 pr-5 pb-3">
              Taste the authentic <br /> Saudi cuisine
            </h2>
            <h2 className="block lg:hidden text-5xl font-bold text-white">
              Taste the authentic Saudi cuisine
            </h2>
            <div className="pt-4 lg:pt-[20rem]">
              <p className="font-normal text-white text-[20px] lg:text-6">
                Among the best Saudi chefs in the world, serving you something
                beyond flavor.{" "}
              </p>
              <div className="mt-8 lg:mt-[38px]">
                <button className="bg-[#FEBF00] px-5 lg:px-6 py-[13px] lg:py-4 text-black text-lg font-bold ">
                Explore Menu
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <img
                src={img1}
                alt=""
                className=" md:w-[700px] h-[310px] md:h-[649px] z-30"
              />
              <div>
                <img
                  src={img2}
                  alt=""
                  className=" absolute right-2 lg:left-[96%] bottom-4  lg:top-[86%] w-[105px] lg:h-[105x]"
                />
                <img
                  src={img3}
                  alt=""
                  className=" absolute left-[85%] lg:left-[99%] bottom-[45%] lg:bottom-[98%] w-[45px] h-[45px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
