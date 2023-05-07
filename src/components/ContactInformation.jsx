import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactInformation = () => {
  return (
    <section id="contact" className="w-full mt-24 mb-10">
      <div className="flex ml-[100px]">
        <h1 className="font-semibold text-[36px]">Contact Me</h1>
      </div>
      <div className="flex justify-center mt-10">
        <div>
          <div className="flex justify-center text-center">
            <h1 className="font-semibold text-5xl sm:text-8xl text-gray-200">
              amandeepkumar
            </h1>
          </div>
          <div className="flex justify-center relative bottom-7 sm:bottom-11">
            <a href="mailto:amankumaradk@gmail.com">
              <h1 className="font-semibold text-2xl sm:text-4xl z-10">
                amankumaradk@gmail.com
              </h1>
            </a>
          </div>
          <div className="flex justify-center text-center">
            <p className="font-medium sm:mx-0 mx-2 text-lg pb-4">
              Let's create something great! Contact me to discuss your next web
              project and bring your ideas to life.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex justify-center">
              <button className="bg-black text-white text-[15px] rounded-[10px] px-16 py-3">
                <a href="mailto:amankumaradk@gmail.com">Say Hello👋</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
