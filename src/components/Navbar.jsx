import React from "react";
import { useState } from "react";
import { logo, menu, close } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "links",
    title1: "Social Links",
    link: "https://linktr.ee/amandeep_kumar",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img
        src={logo}
        alt="amandeep"
        className="w-[220px] h-[100px] ml-0 sm:ml-8 mt-2"
      />
      <ul className="list-none sm:mr-[4%] sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-medium cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <li className="font-medium cursor-pointer text-[18px] text-black">
          <a target="_blank" href={navLinks[3].link}>
            {navLinks[3].title1}
          </a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-10"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-color-gradient absolute top-0 right-0 w-full h-screen sidebar`}
        >
          <ul className="list-none absolute flex flex-col justify-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer text-[55px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="font-poppins font-semibold cursor-pointer text-[55px] text-white">
              <a target="_blank" href={navLinks[3].link}>
                {navLinks[3].title1}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
