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
      <div className="mt-14">
        <div className="flex justify-around flex-wrap sm:mx-0 mx-4">
          <div className="bg-black text-white px-4 py-4 sm:ml-24 sm:w-1/4">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">
                Pokemon Card Game
              </h2>
              <p className="flex text-center pb-6">
                Collect and battle with cute pocket monsters on cards.
              </p>
            </div>
            <div className="flex justify-around">
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
          <div className="bg-black text-white px-4 py-4 sm:mt-0 mt-4 sm:w-1/4 ">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">Whac-a-mole</h2>
              <p className="flex text-center pb-6">
                Whacking moles with mallet, game of speed and skill.
              </p>
            </div>
            <div className="flex justify-around">
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
          <div className="bg-black text-white px-4 py-4 sm:mr-24 sm:mt-0 mt-4 sm:w-1/4">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">
                Space-Invaders
              </h2>
              <p className="flex text-center pb-6">
                Invaders from space, shoot them down with skill and pace.
              </p>
            </div>
            <div className="flex justify-around">
              <a target="_blank" href="">
                <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
              </a>
              <a target="_blank" href="">
                <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
              </a>
            </div>
          </div>
          <div className="bg-black text-white px-4 py-4 sm:mt-10 mt-4 sm:ml-24 sm:w-1/4 w-full">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">Gym-Website</h2>
              <p className="flex text-center pb-6">
                A temple for the body, sweat, and hard work.
              </p>
            </div>
            <div className="flex justify-around">
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
          <div className="bg-black text-white px-4 py-4 sm:mt-10 mt-4 sm:w-1/4 w-full">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">
                Next-Tech-Lab
              </h2>
              <p className="flex justify-center pb-6">Comming soon...</p>
            </div>
            <div className="flex justify-around">
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
          <div className="bg-black text-white px-4 py-4 sm:mt-10 mt-4 sm:mr-24 w-full sm:w-1/4">
            <div className="">
              <h2 className="flex justify-center text-2xl pb-6">
                Fitness-web-App
              </h2>
              <p className="flex justify-center pb-6">Comming soon...</p>
            </div>
            <div className="flex justify-around">
              <a target="_blank" href="">
                <FontAwesomeIcon icon={faGithub} className="iconTech m-2" />
              </a>
              <a target="_blank" href="">
                <FontAwesomeIcon icon={faEye} className="iconTech m-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
