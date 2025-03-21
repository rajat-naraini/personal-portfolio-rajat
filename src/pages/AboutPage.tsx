import React from 'react';
import ProfessionalSummary from '../components/sections/AboutPage/ProfessionalSummarySection';
import WorkExperience from '../components/sections/AboutPage/WorkExperienceSection';
import TechSkills from '../components/sections/AboutPage/TechSkillsSection';
import Education from '../components/sections/AboutPage/EducationSection';
import { Helmet } from 'react-helmet-async';
// import Testimonials from '../components/sections/AboutPage/TestimonialSection';

interface AboutProps {
  title?: string;
}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <Helmet>
        <title>About | Rajat Naraini</title>
        <meta name="description" content="Browse my portfolio of full-stack development projects including web applications, enterprise systems, and technical solutions." />
        <link rel="canonical" href="https://rajatnaraini.com/about" />
      </Helmet>
      <ProfessionalSummary />
      <WorkExperience />
      <TechSkills />
      <Education />
      {/* <Testimonials /> */}
    </>
  );
};

export default About;