import React from "react";
import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button";

const MyInfo = () => {
  const socialMedia = [
    { icon: <FaInstagram />, link: "/" },
    { icon: <FiTwitter />, link: "/" },
    { icon: <FaLinkedin />, link: "/" },
    { icon: <FaFacebookF />, link: "/" },
  ];

  return (
    <div className="w-full mt-4 z-0">
      <div className="text-center  text-gray-400">
        <h3 className="text-xl mb-4 animate__animated animate__slideInLeft">
          Hi, i am
        </h3>
        <h2 className="text-3xl font-semibold animate__animated animate__slideInRight">
          Akwaji Dan Uke
        </h2>
      </div>
      <div>
        <h3 className="text-4xl font-bold animate__animated animate__zoomIn text-center mt-4 role">
          FrontEnd Developer
        </h3>
      </div>
      <div className="w-[50%] m-auto mt-6 text-gray-300 ">
        <ul className="flex justify-between text-xl">
          {socialMedia.map((media, index) => {
            return (
              <li
                key={index}
                className="border border-gray-300 rounded-full p-2"
              >
                <Link to={media.link}>{media.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[60%] flex justify-between m-auto mt-8">
        <Button />
        <button className="border-3 border-gray-300 py-1 px-4 rounded ">Download CV</button>
      </div>
    </div>
  );
};

export default MyInfo;
