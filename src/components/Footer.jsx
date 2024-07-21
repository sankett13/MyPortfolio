import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 min-h-[80px] flex flex-col justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-5">
          <a
            href="https://github.com/sankett13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 flex items-center space-x-2 text-sm"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-patel-506a79270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 flex items-center space-x-2 text-sm"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sanket13052004@gmail.com"
            className="hover:text-gray-400 transition-colors duration-300 flex items-center space-x-2 text-sm"
          >
            <FaEnvelope className="text-lg" />
            <span>Email</span>
          </a>
          <a
            href="https://www.instagram.com/sankettt.bytes?igsh=MTh2ZndiZW4ydXVweA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 flex items-center space-x-2 text-sm"
          >
            <FaInstagram className="text-lg" />
            <span>Instagram</span>
          </a>
        </div>
        <div className="mb-4 mt-2">
          <p className="text-lg">
            &copy; 2024 Shubham Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
