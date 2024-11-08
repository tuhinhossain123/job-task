import bannerBg from "../../../assets/images/bg-img.png";
import img1 from "../../../assets/images/image 1.png";
import img2 from "../../../assets/images/Offer (2).png"
import img3 from "../../../assets/images/Vector.png"
const Banner = () => {
  return (
    <div
      className="w-full pt-[130px] lg:pt-[260px] pb-8 lg:pb-[160px] bg-[#BD1F17]"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-[30px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
          <div>
            <h2 className="text-5xl lg:text-[100px] hidden lg:block  font-bold text-white leading-[1] lg:absolute lg:top-28 lg:bg-gradient-to-r from-[#BD1F17]/10 to-[#BD1F15]/80 p-4">
              Taste the authentic <br /> Saudi cuisine
            </h2>
            <h2 className="block lg:hidden text-5xl font-bold text-white">
              Taste the authentic Saudi cuisine
            </h2>
            <div className="pt-4 lg:pt-[12rem]">
              <p className="font-normal text-white text-base">
                Among the best Saudi chefs in the world, serving you something
                beyond flavor.{" "}
              </p>
              <div className="mt-8 lg:mt-[38px]">
                <button className="bg-[#FEBF00] px-6 py-4 text-black text-lg font-bold ">
                  Book a table
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:w-[700px] ">
              <img src={img1} alt="" />
              <div>
                <img src={img2} alt="" className="bg-[#FEBF00] rounded-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
