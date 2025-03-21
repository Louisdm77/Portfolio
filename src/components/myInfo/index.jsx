import React from "react";
import "animate.css";

const MyInfo = () => {
  return (
    <div className="w-full mt-4">
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
    </div>
  );
};

export default MyInfo;
