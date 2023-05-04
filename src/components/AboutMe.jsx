import React from "react";
import { about } from "../assets";

const AboutMe = () => {
  return (
    <section className="w-full mb-2 sm:mt-10 flex justify-center items-start">
      <div className="">
        <div className="flex justify-center sm:justify-start sm:ml-[100px] mb-8">
          <h1 className="font-semibold sm:relative sm:top-14 text-[36px] ">
            About Amandeep
          </h1>
        </div>
        <div className="flex mx-4 justify-center text-justify sm:ml-[100px] ">
          <div className="text-[18px] mr-34 sm:relative sm:top-16 sm:w-[700px]">
            <p className="flex sm:text-justify sm:mt-8 font-medium">
              I'm Amandeep Kumar, a computer science student with a passion for
              front-end development. I'm skilled in React, JavaScript, CSS,
              Tailwind CSS, and SCSS. When I'm not coding, I enjoy playing
              online games, watching Bollywood movies, and following cricket
              matches. I've completed exciting projects, including Pokédex Game
              using Javascript and blog application using React, which provided
              me with valuable experience in different technologies and
              collaboration. My ultimate goal is to become a front-end engineer
              and work on innovative projects that push the boundaries of what's
              possible.
            </p>
            <button
              type="submit"
              className="flex sm:justify-start mt-6 bg-black text-white sm:mt-12 p-2 "
            >
              <a
                target="_blank"
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-35de5.appspot.com/o/Amandeep-Resume.pdf?alt=media&token=09d7e733-9d32-42dc-bb42-aa842f327388"
              >
                My Resume
              </a>
            </button>
          </div>
          <div className="hidden sm:block mr-[110px] mx-8">
            <img src={about} alt="amandeep" className="w-[350px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
