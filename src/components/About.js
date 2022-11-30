import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Luke. 
            <br className="hidden sm:inline-block lg:inline-block" /> Full Stack Software Engineer.
          </h1>
          <p className="mb-8 leading-relaxed text-white-antique">
            Based out of Maryland with a passion for developing applications and solutions using a variety of the latest technologies and programming languages. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white-antique bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-light rounded text-lg">
              Connect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white-antique bg-gray-light border-0 py-2 px-6 focus:outline-none hover:bg-blue-light rounded text-lg">
              Personal Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./Luke.jpg"
          />
        </div>
      </div>
    </section>
  );
}
