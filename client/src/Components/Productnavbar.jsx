import React from "react";

const Productnavbar = () => {
  return (
    <div className="flex w-full gap-3 text-white py-8  px-8 justify-between items-center">
      <div className="flex items-center font-semibold gap-6">
        <div>
          <p className="text-3xl">logo</p>
        </div>
        <div className="flex items-center gap-8 mt-1">
          <p className="">3d models</p>
          <p>gaming</p>
          <p>vr</p>
          <p>options</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <p>social media 1</p>
        <p>social media 1</p>
        <p>social media 1</p>
        <button className=" rounded border border-gray-500 px-5 py-2 ">
          signin
        </button>
        <button className="rounded px-8 py-2 bg-blue-600">pricing</button>
      </div>
    </div>
  );
};

export default Productnavbar;
