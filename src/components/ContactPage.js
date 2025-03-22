import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactPage() {
  return (
    <div id="contact" className="bg-zinc-900 text-white h-[93vh] scroll-mt-14">
      <div className="container mx-auto px-4 flex flex-col h-full justify-center items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Contact Me</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl">
          <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center hover:bg-zinc-700 transition-all duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="icon-gold text-4xl md:text-6xl mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-medium mb-2 text-center">Email</h3>
            <a
              href="mailto:oktaykaanmemis@outlook.com"
              className="text-gray-300 hover:text-white hover:underline text-sm md:text-base break-all text-center"
            >
              oktaykaanmemis@outlook.com
            </a>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center hover:bg-zinc-700 transition-all duration-300">
            <FontAwesomeIcon icon={faGithub} className="icon-gold text-4xl md:text-6xl mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-medium mb-2 text-center">GitHub</h3>
            <a
              href="https://github.com/oktaykaanmemis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:underline text-sm md:text-base text-center"
            >
              github.com/oktaykaanmemis
            </a>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center hover:bg-zinc-700 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <FontAwesomeIcon icon={faLinkedin} className="icon-gold text-4xl md:text-6xl mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-medium mb-2 text-center">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/oktaykaanmemis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:underline text-sm md:text-base text-center"
            >
              linkedin.com/in/oktaykaanmemis
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-16 px-4">
          <p className="text-lg md:text-xl text-center">Feel free to connect with me!</p>
          <p className="text-gray-400 text-center mt-2 text-sm md:text-base">I'm always interested in discussing new technologies and projects.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;