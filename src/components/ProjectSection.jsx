import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectSection = () => {
  return (
    <section className="w-full mt-24 mb-10">
      <div className="flex ml-[100px]">
        <h1 className="font-semibold text-[36px]">My Projects</h1>
      </div>
      <div className="mt-14">
        <div className="flex justify-around flex-wrap">
          <div className="bg-black text-white px-4 py-4 sm:ml-10 sm:w-[280px]">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">
                Pokemon Card Game
              </h2>
              <p className="flex text-center pb-6">
                Collect and battle with cute pocket monsters on cards.
              </p>
            </div>
            <div className="flex justify-around">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </div>
          </div>
          <div className="bg-black text-white px-4 py-4 sm:w-[280px] ">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">
                Pokemon Card Game
              </h2>
              <p className="flex text-center pb-6">
                Collect and battle with cute pocket monsters on cards.
              </p>
            </div>
            <div className="flex justify-around">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </div>
          </div>
          <div className="bg-black text-white px-4 py-4 sm:mr-10 sm:w-[280px]">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">
                Pokemon Card Game
              </h2>
              <p className="flex text-center pb-6">
                Collect and battle with cute pocket monsters on cards.
              </p>
            </div>
            <div className="flex justify-around">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
