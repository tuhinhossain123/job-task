import img1 from "../../../assets/images/Frame 1707478063.png";
import img2 from "../../../assets/images/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal 2.png";
import AbouSectionTab from "../AbouSectionTab/AbouSectionTab";
import AboutServices from "../AboutServices/AboutServices";

const AboutSection = () => {
  return (
    <div className="w-full my-8 lg:my-[120px] px-6 relative">
      <div className="max-w-[1320px] mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          <div>
            <img
              src={img1}
              alt=""
              className="w-full lg:w-[617px] h-full lg:h-[460px]"
            />
          </div>
          <div className="lg:w-[50%]">
            <AbouSectionTab></AbouSectionTab>
          </div>
        </div>
        <AboutServices></AboutServices>
      </div>
      <div className="absolute right-0 bottom-[5%] hidden lg:block">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
