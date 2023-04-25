import React from "react";

export const navLinks = [
  {
    id: "homepage",
    title: "Home",
  },
  {
    id: "aboutme",
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
    title: "Social Links",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full flex py-5 justify-between items-center navbar">
      <div>
        <h1 className="text-5xl main_heading">
          A.D.K{" "}
          <p className="text-[12px] flex justify-center web-dev">
            Web Developer
          </p>{" "}
        </h1>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1"></ul>
    </nav>
  );
};

export default Navbar;
