import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-light md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white-antique mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hover:text-blue-light">
            Luke MacLean
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-white-antique justify-center">
          <a href="#projects" className="mr-5 hover:text-blue-light">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-light">
            Skills
          </a>
          {/* <a href="#referals" className="mr-5 hover:text-white">
            Referals
          </a> */}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-blue-light rounded text-white-antique mt-4 md:mt-0">
          Start a Conversation
          <ArrowRightIcon className="w-4 h-4 ml-1 text-blue" />
        </a>
      </div>
    </header>
  );
}
