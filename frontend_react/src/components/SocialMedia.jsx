import React from "react";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsFillEnvelopeFill />
      </div>
    </div>
  );
};

export default SocialMedia;
