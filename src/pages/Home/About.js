import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function About() {
    const { portfolioData } = useSelector((state) => state.root);
    const { about, skills } = portfolioData;
    const { lottieURL, description1, description2 } = about;

    return (
        <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
            <SectionTitle title="About" />

            {/* Lottie Animation and Descriptions */}
            <div className="flex sm:flex-col flex-row items-center sm:justify-center justify-between gap-10 py-10">
                {/* Lottie Animation */}
                <div className="relative w-1/2 sm:w-full sm:h-60 h-[70vh] sm:mb-10 mb-0">
                    <lottie-player
                        src={lottieURL}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    ></lottie-player>
                </div>

                {/* Descriptions */}
                <div className="relative w-1/2 sm:w-full flex flex-col sm:gap-6 gap-10">
                    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <p className="text-base sm:text-lg lg:text-xl">{description1}</p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <p className="text-base sm:text-lg lg:text-xl">{description2}</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="py-10">
                <h1 className="text-tertiary text-2xl mb-8 text-center">Technologies I'm Currently Working On:</h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
                        >
                            <div className="bg-gradient-to-r from-teal-600 to-green-600 border border-teal-700 cursor-pointer p-6 flex flex-col items-center">
                                <img
                                    src={skill.skillImage}
                                    className="w-16 h-16 mb-4 transition-transform duration-300 hover:rotate-12"
                                    alt={`${skill.skillName} logo`}
                                />
                                <h1 className="text-white text-xl font-bold text-center">{skill.skillName}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
