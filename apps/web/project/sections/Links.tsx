import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
const Links = () => {
  return (
    <>
      <div className="flex flex-row gap-5 md:gap-2 justify-end ">
        <span className="hover:text-gray-400">
          <FaGithub size={24} />
        </span>
        <span className="hover:text-gray-400">
          <FaLinkedin size={24} />
        </span>

        <span className="hover:text-gray-400">
          <FaTwitter size={24} />
        </span>

        <span className="hover:text-gray-400">
          <FaEnvelope size={24} />
        </span>
      </div>
    </>
  );
};

export default Links;
