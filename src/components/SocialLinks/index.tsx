import React from "react";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 items-center">
      <FaGithub className="cursor-pointer" />
      <FaSquareXTwitter className="cursor-pointer" />
      <FaInstagram className="cursor-pointer" />
      <FaLinkedin className="cursor-pointer" />
    </div>
  );
};

export default SocialLinks;
