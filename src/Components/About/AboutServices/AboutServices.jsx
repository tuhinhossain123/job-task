import img1 from "../../../assets/images/package.png";
import img2 from "../../../assets/images/medal.png";
import img3 from "../../../assets/images/bag.png";
const AboutServices = () => {
  return (
    <div className="pt-[30px] lg:pt-[74px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <div className="flex items-center gap-4">
          <div className="bg-[#FFF] rounded-full shadow-xl p-6">
            <img src={img1} alt="" />
          </div>
          <div>
            <h3 className="text-[0A1425] text-2xl lg:text-[30px] font-bebas font-medium">
              fast delivery
            </h3>
            <h4 className="text-[0A1425] text-[20px] font-robotto font-normal">
              Within 30 minutes
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#FFF] rounded-full shadow-xl p-6">
            <img src={img2} alt="" />
          </div>
          <div>
            <h3 className="text-[0A1425] text-2xl lg:text-[30px] font-bebas font-medium">
              absolute dining
            </h3>
            <h4 className="text-[0A1425] text-[20px] font-robotto font-normal">
              Best buffet restaurant
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#FFF] rounded-full shadow-xl p-6">
            <img src={img3} alt="" />
          </div>
          <div>
            <h3 className="text-[0A1425] text-2xl lg:text-[30px] font-bebas font-medium">
              pickup delivery
            </h3>
            <h4 className="text-[0A1425] text-[20px] font-robotto font-normal">
              Grab your food order
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
