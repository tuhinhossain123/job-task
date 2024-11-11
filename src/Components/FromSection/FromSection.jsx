import img from "../../assets/images/from-bg.png";
const FromSection = () => {
  return (
    <div
      className="w-full px-6"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1320px] mx-auto py-[30px] lg:py-[120px]">
        <div className="flex items-center gap-[10px]">
          <h1 className="w-[10px] h-[10px] bg-primary"></h1>
          <h2 className="text-primary font-robotto font-bold text-lg md:text-[20px]">
            Book Now
          </h2>
        </div>
        <h2 className="text-[40px] md:text-[62px] font-bebas font-semibold text-white pt-4">
          Book Your Table
        </h2>
        <p className="pt-4 text-[16px] font-robotto font-normal text-white">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo{" "}
          <br />
          molestie vel, ornare non id blandit netus.
        </p>
      </div>
    </div>
  );
};

export default FromSection;
