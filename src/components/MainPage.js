import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ProjectsPage from './ProjectsPage';
import useDynamicTitle from '../hooks/useDynamicTitle';
import '../styles/MainPage.css';

function MainPage() {
  useDynamicTitle("Oktay Kaan Memis");

  return (
    <div>
      <Header />
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
}

export default MainPage;
