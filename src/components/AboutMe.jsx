import React from "react";
import { about } from "../assets";

const AboutMe = () => {
  return (
    <section className="w-full mb-24 mt-24 flex justify-center items-start">
      <div className="">
        <div className="ml-[100px] mb-8">
          <h1 className="font-semibold text-[36px] ">About Amandeep</h1>
        </div>
        <div className="flex ml-[100px] ">
          <div className="text-[18px] mr-34 w-[700px]">
            <p className="text-start mt-8 font-medium">
              I'm Amandeep Kumar, a computer science student with a passion for
              front-end development. I'm skilled in React, JavaScript, CSS,
              Tailwind CSS, and SCSS. When I'm not coding, I enjoy playing
              online games, watching Bollywood movies, and following cricket
              matches. I've completed exciting projects, including Pokédex using
              Javascript and blog application using React, which provided me
              with valuable experience in different technologies and
              collaboration. My ultimate goal is to become a front-end engineer
              and work on innovative projects that push the boundaries of what's
              possible.
            </p>
            <button type="submit" className="bg-black text-white mt-12 p-2 ">
              <a
                target="_blank"
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-35de5.appspot.com/o/Amandeep-Resume.pdf?alt=media&token=09d7e733-9d32-42dc-bb42-aa842f327388"
              >
                My Resume
              </a>
            </button>
          </div>
          <div className="mr-[110px] mx-8">
            <img src={about} alt="amandeep" className="w-[350px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
