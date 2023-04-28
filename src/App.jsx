import React from "react";
import {
  ContactInformation,
  EducationAndCertification,
  HomePage,
  Navbar,
  AboutMe,
  Preloader,
  ProjectSection,
  TechnicalSkills,
  WorkExperience,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="home w-full h-screen">
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
        <ProjectSection />
        <TechnicalSkills />
        <EducationAndCertification />
        <WorkExperience />
        <ContactInformation />
      </div>
    </div>
  </div>
);

export default App;
