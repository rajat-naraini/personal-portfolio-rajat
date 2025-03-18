// src/pages/Home.tsx
import React from 'react';
import HeroSection from '../components/sections/HomePage/HeroSection';
import SkillsSection from '../components/sections/HomePage/SkillsSection';
import FeaturedProjects from '../components/sections/HomePage/FeaturedProjectsSection';
import ExperienceSection from '../components/sections/HomePage/ExperienceHighlightSection';
import PersonalTouchSection from '../components/sections/HomePage/PersonalTouchSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceSection />
      <PersonalTouchSection />
    </>
  );
};

export default Home;