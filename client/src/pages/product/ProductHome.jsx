import React from "react";
import HomeCarausal from "../../Components/HomeCarausal";
import ProductNavbar from "../../Components/Productnavbar";
import { ModelCard } from "../../Components/Models/ModelCard";

const ProductHome = () => {
  return (
    <div className="bg-[#02021E] h-auto">
      <ProductNavbar />

      <div className=" py-5">
        <div className="mt-5">
          <HomeCarausal />
        </div>
      </div>

      {/* category section */}

      <div className="w-full px-[30px] text-white text-left space-x-10 mt-5">
        <button className="">Gaming</button>
        <button className="">Arts and Abstract</button>
        <button>Cars</button>
        <button>Animals</button>
        <button>Science</button>
        <button>Engineering</button>
      </div>

      <div className="grid grid-cols-3 px-[30px] mt-10 gap-7">
        {[1, 1, 1, 1, 1, 1, 1].map((item) => (
          <ModelCard />
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
