import { useForm } from "react-hook-form";
import img from "../../assets/images/from-bg.png";
const FromSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
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
          <h2 className="text-primary font-robotto font-semibold text-lg md:text-[20px]">
            Book Now
          </h2>
        </div>
        <h2 className="text-[40px] md:text-[62px] font-bebas font-medium text-white pt-4">
          Book Your Table
        </h2>
        <p className="pt-4 text-[16px] font-robotto font-normal text-white">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo{" "}
          <br />
          molestie vel, ornare non id blandit netus.
        </p>
        <div className="pt-[40px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full  lg:w-[50%]"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px]">
              <div className="form-control w-full">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input bg-transparent focus:bg-transparent border border-[#E5E7EB] w-full text-[14px] font-robotto font-normal px-4 py-3 text-white placeholder:text-white focus:outline-none"
                  placeholder="Your Name *"
                />
                {errors.name && (
                  <span className="text-primary font-robotto  text-base">
                    name is required
                  </span>
                )}
              </div>
              <div className="form-control w-full">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input bg-transparent border border-[#E5E7EB] w-full text-[14px] font-robotto font-normal px-4 py-3 text-white placeholder:text-white focus:outline-none"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="text-primary font-robotto text-base">
                    email is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] pt-4 lg:pt-6">
              <div className="form-control w-full">
                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="omput bg-transparent  border border-[#E5E7EB] w-full text-white placeholder:text-white text-[14px] font-roboto font-normal px-4 py-3 focus:outline-none"
                />
                 {errors.date && (
                  <span className="text-primary font-robotto text-base">
                    date is required
                  </span>
                )}
              </div>
              <div className="form-control w-full text-red-500">
                <input
                  type="number"
                  {...register("number", { required: true })}
                  className="input bg-transparent border border-[#E5E7EB] w-full text-[14px] font-robotto font-normal px-4 py-3 text-white placeholder:text-white focus:outline-none"
                  placeholder="Total People"
                />
                  {errors.number && (
                  <span className="text-primary font-robotto text-base">
                    number is required
                  </span>
                )}
              </div>
            </div>
            <div className="pt-4 lg:pt-6">
              <textarea
                id=""
                cols="7"
                rows="7"
                {...register("message", { required: true })}
                placeholder="Message"
                className="bg-transparent focus:bg-transparent border border-[#E5E7EB] w-full text-white placeholder:text-white text-[14px] font-roboto font-normal px-4 py-3 focus:outline-none"
              ></textarea>
               {errors.message && (
                  <span className="text-primary font-medium">
                    message is required
                  </span>
                )}
            </div>
            <div className="pt-6 lg:pt-8">
              <button className="bg-secondury hover:bg-primary hover:text-white px-[20px] lg:px-6 py-3 lg:py-4 text-black text-base lg:text-lg font-bold ">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FromSection;
