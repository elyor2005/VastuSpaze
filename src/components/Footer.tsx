import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="hover:scale-125"
          >
            <RiFacebookFill />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
            className="hover:scale-125"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.instagram.com/__abdufattokhov__/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
            className="hover:scale-125"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className="text-sm ">&copy; Abdufattokhov. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
