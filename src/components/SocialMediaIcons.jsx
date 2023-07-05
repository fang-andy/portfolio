import { Github, Instagram, LinkedIn } from "../assets";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/fang-andy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={Github} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com/in/andy-fang"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={LinkedIn} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/andeezyy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={Instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
