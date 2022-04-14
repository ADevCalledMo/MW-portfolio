import React from "react";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/mozeswalker/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/ADevCalledMo/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="mailto:contact@mozeswalker.co.uk">
          <BsFillEnvelopeFill />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
