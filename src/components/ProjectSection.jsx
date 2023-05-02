import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectSection = () => {
  return (
    <section className="w-full mt-24 mb-10">
      <div className="flex ml-[100px]">
        <h1 className="font-semibold text-[36px]">My Projects</h1>
      </div>
      <div className="mt-14">
        <div className="flex justify-center">
          <div className="">
            <h2>Pokemon Card Game</h2>
            <p>Collect and battle with cute pocket monsters on cards.</p>
            <div className="">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </div>
          </div>
          <div className="">
            <h2 className="">Pokemon Card Game</h2>
            <p>Collect and battle with cute pocket monsters on cards.</p>
            <div className="">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </div>
          </div>
          <div className="">
            <h2>Pokemon Card Game</h2>
            <p>Collect and battle with cute pocket monsters on cards.</p>
            <div className="">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
