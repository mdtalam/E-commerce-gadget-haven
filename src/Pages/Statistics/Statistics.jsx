import { Helmet } from "react-helmet-async";

const Statistics = () => {
  return (
    <div>
        <Helmet>
            <title>
                Gadget Heaven | Statistics
            </title>
        </Helmet>
      <div className="mb-96 hero bg-[#9538E2] pb-6 md:pb-20 lg:pb-20 pt-8 container mx-auto">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-3xl text-white font-bold">Statistics</h1>
            <p className="py-2 text-md md:text-lg lg:text-lg text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
