// src/pages/Home.tsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import SkillsSection from '../components/sections/SkillsSection';
import FeaturedProjects from '../components/sections/FeaturedProjectsSection';
import ExperienceSection from '../components/sections/ExperienceHighlightSection';
import PersonalTouchSection from '../components/sections/PersonalTouchSection';

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