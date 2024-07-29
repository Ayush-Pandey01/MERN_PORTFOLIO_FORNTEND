import React from 'react';
import Section from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about ,skills } = portfolioData;
  const { lottieURL, description1, description2 } = about;

  return (
    <div className="min-h-screen text-white py-10">
      <Section title="About" />
      <div className="flex sm:flex-col flex-row items-center justify-evenly gap-10 py-10">
        {/* Lottie Animation */}
        <div className="sm:w-full w-1/2 animate-slideInLeft">
          <div className="h-[70vh] w-full">
            <lottie-player
              src={lottieURL}
              background="transparent"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
              className="w-full"
            ></lottie-player>
          </div>
        </div>

        {/* Descriptions */}
        <div className="flex flex-col gap-5 sm:w-full w-1/2 animate-slideInRight">
          <p className="text-base sm:text-lg lg:text-xl">{description1}</p>
          <p className="text-base sm:text-lg lg:text-xl">{description2}</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-10">
  <h1 className="text-tertiary text-2xl mb-5">
    Here are a few technologies I am working on currently:
  </h1>



  
  
  
  <div className="p-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-teal-600 border cursor-pointer border-teal-700 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      >
        <div className="p-6">
          <img 
            src={skill.skillImage}
            className="block w-16 h-16 mx-auto mb-4"
            alt={`${skill.skillName} logo`}
          />
          <h1 className="text-white text-xl font-bold text-center">{skill.skillName}</h1>
        </div>
      </div>
    ))}
  </div>
</div> 
        </div>  


    </div>
  );
}

export default About;
