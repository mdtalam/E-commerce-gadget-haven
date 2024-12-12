import { Helmet } from "react-helmet-async";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import Heading from "../../Component/Heading/Heading";


const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>
                    Gadget Heaven | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
            <div className="flex flex-col md:flex-row lg:flex-row">
                <div className="lg:w-1/5">
                    <Category categories={categories}></Category>
                </div>
                <div className="lg:w-4/5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;