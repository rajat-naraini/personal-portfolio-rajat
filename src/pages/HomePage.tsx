// src/pages/Home.tsx
import React from 'react';
import HeroSection from '../components/sections/HomePage/HeroSection';
import SkillsSection from '../components/sections/HomePage/SkillsSection';
import FeaturedProjects from '../components/sections/HomePage/FeaturedProjectsSection';
import ExperienceSection from '../components/sections/HomePage/ExperienceHighlightSection';
import PersonalTouchSection from '../components/sections/HomePage/PersonalTouchSection';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | Rajat Naraini</title>
        <meta name="description" content="Browse my portfolio of full-stack development projects including web applications, enterprise systems, and technical solutions." />
        <link rel="canonical" href="https://rajatnaraini.com/" />
      </Helmet>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceSection />
      <PersonalTouchSection />
    </>
  );
};

export default Home;