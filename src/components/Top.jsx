import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaGithubSquare } from "react-icons/fa";

const Top = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" rel="noopener noreferrer">
          <h1 className="px-10 text-xl font-semibold">
            RaghavBajaj<span className="text-shtxt">.dev</span>
          </h1>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <a
          href="https://www.linkedin.com/in/raghavbajaj11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/raghavb-11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>

        <a
          href="https://instagram.com/raghav.b_11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
export default Top;
