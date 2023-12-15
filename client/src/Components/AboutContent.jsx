import React from "react";
import backgroundImage from "../images/qin1.png";

const AboutContent = () => {
  return (
    <div className="">
      <div className="w-full bg-gray-100 rounded-se-2xl flex justify-around items-center h-[400px] md:px-[100px] ">
        <div className="  w-[40%]">
          <img
            src={backgroundImage}
            alt=""
            className="h-[300px] md:pl-32"
          />
        </div>

        <div className="w-[60%]">
          <div className="font-semibold text-4xl ">
            <p>We Create Our New World</p>
            <p>With Metaverse</p>

            <div className="text-sm font-semibold  md:mt-7 tracking-wider">
              <p className="md:px-[100px] text-left">
                We are a group of students and enthusiastic amateur blockchain
                application, developers. We are trying to provide the latest and
                cutting edge blockchain solutions to the daily life problem. We
                are also trying to spread awareness of the power and impact of
                blockchain on our present and future. We are one those who
                believe in the idea of freedom, sovereignty, privacy, and trust.
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
