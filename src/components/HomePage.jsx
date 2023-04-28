import React from "react";
import { profile } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <section className="">
      <div className="">
        <div className="flex justify-center ">
          <img
            src={profile}
            alt="amandeep"
            className="w-[230px] h-[250px] rounded-full"
          />
        </div>
        <div className="">
          <h1 className="text-[68px] font-semibold mt-4 flex justify-center">
            Amandeep Kumar
          </h1>
          <div className="flex justify-center mb-2 ">
            <h4 className="font-normal text-[16px] px-2 bg-slate-200 rounded-full">
              Web Developer
            </h4>
            {/* <h4 className="font-medium text-[16px] px-2 ml-2 bg-slate-200 rounded-full">
              FrontEnd
            </h4> */}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <p className="text-xl">
            Building beautiful and reliable websites that reflect your brand and
            deliver for your business.
          </p>
        </div>
      </div>
      <div className="icon_section ml-10">
        <div className="flex flex-col fixed ">
          <a target="_blank" href="https://www.instagram.com/amandeep5647/">
            <FontAwesomeIcon icon={faInstagram} className="icon mb-4" />
          </a>
          <a target="_blank" href="https://github.com/Amandeep4567">
            <FontAwesomeIcon icon={faGithub} className="icon mb-4" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amandeep-kumar-242b5b230/"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon mb-4" />
          </a>
          <a target="_blank" href="https://twitter.com/AmandeepKu81396">
            <FontAwesomeIcon icon={faTwitter} className="icon mb-4" />
          </a>
          <div className="bg-black h-[120px] w-[3px] ml-2"></div>
        </div>
      </div>
      <div className="email_section right-6 mr-10">
        <div className="fixed">
          <div>
            <p className="font-semibold">
              <a href="mailto:amankumaradk@gmail.com">amankumaradk@gmail.com</a>
            </p>
          </div>
          <div className="bg-black absolute top-[210px] right-3 h-[106px] w-[3px] ml-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
