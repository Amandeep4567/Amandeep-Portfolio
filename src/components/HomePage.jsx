import React from "react";
import { profile } from "../assets";

const HomePage = () => {
  return (
    <section className="">
      <div className="">
        <div className="flex justify-center ">
          <img
            src={profile}
            alt="amandeep"
            className="w-[230px] h-[270px] rounded-full"
          />
        </div>
        <div className="">
          <h1 className="">Amandeep Kumar</h1>
          <div className="flex">
            <h4 className="">Web Developer</h4>
            <h4 className="">FrontEnd</h4>
          </div>
        </div>
        <div className="">
          <p>
            Building beautiful and reliable websites that reflect your brand and
            deliver for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
