import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactInformation = () => {
  return (
    <section className="w-full mt-24 mb-10">
      <div className="flex ml-[100px]">
        <h1 className="font-semibold text-[36px]">Contact Me</h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className="">
          <div className="">
            <h1 className="flex justify-center font-semibold text-3xl p-4">
              Amandeep Kumar
            </h1>
            <p className="font-medium sm:mx-0 mx-2 text-center text-xl pb-4">
              Let's create something great! Contact me to discuss your next web
              project and bring your ideas to life.
            </p>
          </div>
          <div className="">
            <div className="flex justify-center">
              <div className="mt-4">
                <a href="https://github.com/Amandeep4567">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="contactIcon relative top-1 mr-4"
                  />
                </a>
                <a
                  className="bg-black text-white p-3 font-normal text-lg"
                  href="mailto:amankumaradk@gmail.com"
                >
                  Say Namaste!
                </a>
                <a href="https://www.linkedin.com/in/amandeep-kumar-242b5b230/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="contactIcon relative top-1 ml-4"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <p className="font-semibold sm:text-4xl text-2xl">
                amankumaradk@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
