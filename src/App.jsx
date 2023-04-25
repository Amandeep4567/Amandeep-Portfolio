import React from "react";
import {
  ContactInformation,
  EducationAndCertification,
  HomePage,
  Navbar,
  Preloader,
  ProjectSection,
  TechnicalSkills,
  WorkExperience,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="home w-full h-screen">
      <div className="">
        <div className="">
          <Navbar />
        </div>
      </div>

      <div className="">
        <div className="">
          <HomePage />
        </div>
      </div>
    </div>

    <div className="">
      <div className="">
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
