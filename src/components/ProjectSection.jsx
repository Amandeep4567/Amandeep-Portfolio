import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectSection = () => {
  return (
    <section id="project" className="w-full mt-24">
      <div className="flex ml-[100px]">
        <h1 className="font-semibold text-[36px]">My Projects</h1>
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-evenly mt-10 sm:mx-24">
        <div className="w-[94%] mx-2.5 sm:mx-0 bg-black text-white sm:w-[25%] rounded-[10px] pt-28 pl-4 pr-8 sm:mt-8 mt-4">
          <h1 className="font-semibold text-[38px] sm:text-[30px] text-gray-300">
            Hack SRM 4.0
          </h1>
          <p className="font-normal text-[17px] sm:text-[15px] text-gray-200">
            Website for the National Level Hackathon called Hack SRM 4.0
          </p>
          <div className="flex">
            <a target="_blank" href="https://github.com/Amandeep4567/hacksrm">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </a>
            <a target="_blank" href="https://hacksrm.tech/">
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </a>
          </div>
        </div>
        <div className="w-[94%] mx-2.5 sm:mx-0 bg-black text-white sm:w-[25%] rounded-[10px] pt-28 pl-4 pr-8">
          <h1 className="font-semibold text-[38px] sm:text-[30px] text-gray-300">
            Pokedex Game
          </h1>
          <p className="font-normal text-[17px] sm:text-[15px] text-gray-200">
            Collect and battle with cute pocket monsters on cards.
          </p>
          <div className="flex">
            <a
              target="_blank"
              href="https://github.com/Amandeep4567/Pokemon-Card-Game"
            >
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </a>
            <a
              target="_blank"
              href="https://pokemon-card-generator-two.vercel.app/"
            >
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </a>
          </div>
        </div>
        <div className="w-[94%] mx-2.5 bg-black text-white sm:w-[25%] rounded-[10px] pt-28 pl-4 pr-8 sm:mx-10 sm:mt-0 mt-4">
          <h1 className="font-semibold text-[38px] sm:text-[30px] text-gray-300">
            Whac-a-mole
          </h1>
          <p className="font-normal text-[17px] sm:text-[15px] text-gray-200">
            Whacking moles with mallet, game of speed and skill.
          </p>
          <div className="flex">
            <a
              target="_blank"
              href="https://github.com/Amandeep4567/Whac-a-mole"
            >
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </a>
            <a
              target="_blank"
              href=" https://amandeep4567.github.io/Whac-a-mole/"
            >
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </a>
          </div>
        </div>
        <div className="w-[94%] mx-2.5 sm:mx-0 bg-black text-white sm:w-[25%] rounded-[10px] pt-28 pl-4 pr-8 sm:mt-0 mt-4">
          <h1 className="font-semibold text-[38px] sm:text-[30px] text-gray-300">
            Space-Invaders
          </h1>
          <p className="font-normal text-[17px] sm:text-[15px] text-gray-200">
            Invaders from space, shoot them down with skill and pace.
          </p>
          <div className="flex">
            <a
              target="_blank"
              href="https://github.com/Amandeep4567/Space-Invaders"
            >
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </a>
            <a
              target="_blank"
              href="https://amandeep4567.github.io/Space-Invaders/"
            >
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </a>
          </div>
        </div>
        <div className="w-[94%] mx-2.5 sm:mx-0 bg-black text-white sm:w-[25%] rounded-[10px] pt-28 pl-4 pr-8 sm:mt-8 mt-4">
          <h1 className="font-semibold text-[38px] sm:text-[30px] text-gray-300">
            Gym-Website
          </h1>
          <p className="font-normal text-[17px] sm:text-[15px] text-gray-200">
            A temple for the body, sweat, and hard work.
          </p>
          <div className="flex">
            <a
              target="_blank"
              href="https://github.com/Amandeep4567/Gym-Website"
            >
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </a>
            <a
              target="_blank"
              href="https://amandeep4567.github.io/Gym-Website/"
            >
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </a>
          </div>
        </div>
        <div className="w-[94%] mx-2.5 bg-black text-white sm:w-[25%] rounded-[10px] pt-28 pl-4 pr-8 sm:mt-8 sm:mx-10 mt-4">
          <h1 className="font-semibold text-[38px] sm:text-[30px] text-gray-300">
            Next-Tech-Lab
          </h1>
          <p className="font-normal text-[17px] sm:text-[15px] text-gray-200">
            Coming Soon...
          </p>
          <div className="flex">
            <a target="" href="">
              <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
            </a>
            <a target="" href="">
              <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
