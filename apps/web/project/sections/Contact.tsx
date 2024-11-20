import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import data from "../../data";

const Contact = () => {
  return (
    <footer className="dark:bg-primary_dark p-6 shadow-2xl   mt-10 rounded-lg rounded-b-none">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Connect with me:</p>
          <div className="flex space-x-4 mt-2">
            {data.contact.Github.length > 0 && (
              <a
                href={data.contact.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
            )}
            {data.contact.LinkedIn.length > 0 && (
              <a
                href={data.contact.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {data.contact.Twitter.length > 0 && (
              <a
                href={data.contact.Twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
            )}
            {data.contact.Email.length > 0 && (
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
        </div>

        <div className="text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} {data.Hero.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
