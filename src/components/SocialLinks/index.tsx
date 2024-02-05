import Link from "next/link";
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
      <Link target="self" href={'https://www.linkedin.com/in/shardul-kumar-22b565213/'}>
        <FaLinkedin className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialLinks;
