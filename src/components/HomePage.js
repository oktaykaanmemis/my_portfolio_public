import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../styles/HomePage.css'
import homepageGif from '../images/homepage.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const headerHeight = isMobile ? 0 : document.querySelector('header').offsetHeight;

    if (aboutSection) {
      const aboutPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: aboutPosition - headerHeight,
        behavior: 'smooth'
      });
    } else {
      window.scrollBy({
        top: window.innerHeight / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`bg-zinc-900 text-white scroll-mt-16 content-center ${isMobile ? 'h-screen' : 'h-[94vh]'}`}>
      <div className='container mx-auto flex flex-col h-full justify-around px-4'>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 flex flex-col justify-center pt-8 md:pt-0">
            <p className="p-hello text-3xl md:text-4xl">Hello,<br />I'm
              <span className="p-name text-4xl md:text-5xl font-medium"> Oktay Kaan Memis</span>
            </p>
            <TypeAnimation
              sequence={[
                "I'm a Fullstack Developer with expertise in modern web technologies.",
                2000,
                "I specialize in building dynamic, scalable web applications.",
                2000,
                "I am proficient in Python-based frameworks such as Django and Flask for backend development.",
                2000,
                "I have a strong background in creating responsive and user-friendly interfaces.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={30}
              repeat={Infinity}
              className="p-title text-2xl md:text-4xl mt-1"
            />
          </div>
          <div className="hidden md:block w-1/3 object-cover object-right overflow-hidden relative">
            <img className="w-full h-full" src={homepageGif} alt="Coding animation" />
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0 pb-8 md:pb-0">
          <button onClick={handleScroll} aria-label="Scroll to About section">
            <FontAwesomeIcon icon={faSortDown} fade size="2xl" style={{ color: "#dbaf63" }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage