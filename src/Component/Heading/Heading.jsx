/* eslint-disable react/prop-types */

import { useOutletContext } from "react-router-dom";


const Heading = ({title}) => {
    const {targetSectionRef} = useOutletContext()
    return (
        <div ref={targetSectionRef} className="mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">{title}</h1>
        </div>
    );
};

export default Heading;