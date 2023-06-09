import React from "react";
import {
  ContactInformation,
  HomePage,
  Navbar,
  AboutMe,
  Preloader,
  ProjectSection,
  TechnicalSkills,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="home w-full sm:h-screen">
      <div className="pl-1 pr-6">
        <div className="">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="w-full">
          <HomePage />
        </div>
      </div>
    </div>

    <div className="mt-12">
      <div className="">
        <AboutMe />
        <TechnicalSkills />
        <ProjectSection />
        <ContactInformation />
      </div>
    </div>
  </div>
);

export default App;
