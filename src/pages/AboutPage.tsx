import React from 'react';
import ProfessionalSummary from '../components/sections/AboutPage/ProfessionalSummarySection';
import WorkExperience from '../components/sections/AboutPage/WorkExperienceSection';
import TechSkills from '../components/sections/AboutPage/TechSkillsSection';
import Education from '../components/sections/AboutPage/EducationSection';
import Testimonials from '../components/sections/AboutPage/TestimonialSection';

interface AboutProps {
  title?: string;
}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <ProfessionalSummary />
      <WorkExperience />
      <TechSkills />
      <Education />
      <Testimonials />
    </>
  );
};

export default About;