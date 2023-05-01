import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const TechnicalSkills = () => {
  return (
    <section className="w-full">
      <div className="bg-black w-[640px] sm:w-[1100px] h-[2px] sm:ml-28"></div>
      <div className="sm:ml-28 mt-2 mb-2 flex">
        <div className="">
          <h1 className="m-2 font-semibold text-2xl">Tech: </h1>
        </div>
        <marquee
          behavior="scroll"
          width="82.5%"
          direction="left"
          scrollamount="8"
        >
          <div className="flex">
            <div className="bg-black rounded-sm mx-4 pr-4 flex">
              <FontAwesomeIcon
                color="white"
                icon={faReact}
                className="iconTech m-2"
              />
              <span className="self-center text-white font-normal text-[17px]">
                React.js
              </span>
            </div>
            <div className="bg-black rounded-sm mx-4 pr-4 flex">
              <FontAwesomeIcon
                color="white"
                icon={faJs}
                className="iconTech m-2"
              />
              <span className=" self-center text-white font-normal text-[17px] ">
                JavaScript
              </span>
            </div>
            <div className="bg-black rounded-sm mx-4 pr-4 flex">
              <FontAwesomeIcon
                color="white"
                icon={faHtml5}
                className="iconTech m-2"
              />
              <span className="self-center text-white font-normal text-[17px]">
                Html5
              </span>
            </div>
            <div className="bg-black rounded-sm mx-4 pr-4 flex">
              <FontAwesomeIcon
                color="white"
                icon={faCss3}
                className="iconTech m-2"
              />
              <span className="self-center text-white font-normal text-[17px]">
                Css
              </span>
            </div>
            <div className="bg-black rounded-sm mx-4 pr-4 flex">
              <FontAwesomeIcon
                color="white"
                icon={faBootstrap}
                className="iconTech m-2"
              />
              <span className="self-center text-white font-normal text-[17px]">
                Bootstrap
              </span>
            </div>
            <div className="bg-black rounded-sm mx-4 pr-4 flex">
              <FontAwesomeIcon
                color="white"
                icon={faFigma}
                className="iconTech m-2"
              />
              <span className="self-center text-white font-normal text-[17px]">
                Figma
              </span>
            </div>
            <div className="bg-black rounded-sm mx-4 pr-4 flex">
              <FontAwesomeIcon
                color="white"
                icon={faGitAlt}
                className="iconTech m-2"
              />
              <span className="self-center text-white font-normal text-[17px]">
                Git
              </span>
            </div>
          </div>
        </marquee>
      </div>
      <div className="bg-black w-[640px] sm:w-[1100px] h-[2px] sm:ml-28"></div>
    </section>
  );
};

export default TechnicalSkills;
