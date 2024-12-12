import { useOutletContext } from "react-router-dom";
import bannerImg from "../../assets/assets/banner.jpg";

const Banner = () => {
  const {handleUpdate} = useOutletContext()
  console.log(handleUpdate)
  return (
    <div className="relative">
      <div className="mb-24 md:mb-80 lg:mb-80 hero bg-[#9538E2] pt-6 md:pt-16 lg:pt-16 pb-32 md:pb-60 lg:pb-60 rounded-b-3xl container mx-auto">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-md md:text-lg lg:text-xl text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button onClick={handleUpdate} className="btn md:btn-lg lg:btn-lg bg-white hover:text-white hover:bg-[#9538E2] text-[#9538E2] text-xl md:text-2xl lg:text-2xl font-bold  px-4 md:px-6 lg:px-8 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white/36 rounded-3xl shadow-black/10 backdrop-blur-0 border-2 border-white w-[80%] h-[35%] lg:h-[80%] absolute -bottom-[14%] right-[10%] md:-bottom-[45%] md:right-[10%] lg:-bottom-[45%] lg:right-[10%]">
        <img className="p-6 md:w-full lg:w-full md:h-full lg:h-full" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;



