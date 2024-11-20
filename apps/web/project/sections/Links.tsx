import data from "../../data";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
const Links = () => {
  return (
    <>
      <div className="flex flex-row gap-5 md:gap-2 justify-end ">
        {data.contact.Github && (
          <a
            href={data.contact.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
        )}
        {data.contact.LinkedIn && (
          <a
            href={data.contact.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        {data.contact.Twitter && (
          <a
            href={data.contact.Twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
        )}
        {data.contact.Email && (
          <a
            href={`mailto:${data.contact.Email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaEnvelope size={24} />
          </a>
        )}
      </div>
    </>
  );
};

export default Links;
