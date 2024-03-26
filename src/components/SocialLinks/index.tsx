import Link from "next/link";
import React from "react";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const SocialLinks = () => (
  <div className="flex gap-5 items-center">
    <Link target="blank" href="https://github.com/shardulkumar98">
      <FaGithub className="cursor-pointer" />
    </Link>
    <Link target="blank" href={"https://www.x.com/shardulkum51160"}>
      <FaSquareXTwitter className="cursor-pointer" />
    </Link>
    <Link target="blank" href="#">
      <FaInstagram className="cursor-pointer" />
    </Link>
    <Link
      target="blank"
      href={"https://www.linkedin.com/in/shardul-kumar-22b565213/"}
    >
      <FaLinkedin className="cursor-pointer" />
    </Link>
  </div>
);

export default SocialLinks;
