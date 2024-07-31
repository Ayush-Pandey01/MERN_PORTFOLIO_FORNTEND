import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Project() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 text-white">
            <SectionTitle title="Projects" />

            <div className="flex sm:flex-col flex-row py-8 gap-8">
                {/* Sidebar */}
                <div className="flex flex-col gap-10 border-l-2 border-gray-900 sm:w-full w-1/3 sm:flex-row sm:overflow-x-scroll">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer px-4 py-2 transition-all duration-300 rounded-md ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 bg-[#2c798a43]' : 'text-white hover:bg-[#2c798a43] hover:text-tertiary'}`}
                            onClick={() => setSelectedItemIndex(index)}
                        >
                            <h1 className={`text-lg font-semibold ${selectedItemIndex === index ? 'text-tertiary' : 'text-white'}`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Project Details */}
                <div className="flex flex-col items-center justify-center gap-10 sm:w-full w-2/3">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full transition-transform duration-300 hover:scale-105">
                        <div className="flex sm:flex-col flex-row items-center gap-6">
                            <img
                                src={projects[selectedItemIndex].image}
                                alt={projects[selectedItemIndex].title}
                                className="h-60 sm:w-full w-1/2 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                            />
                            <div className="flex flex-col gap-4 sm:w-full w-1/2">
                                <p className="text-white sm:text-lg text-xl">
                                    {projects[selectedItemIndex].description}
                                </p>
                                <div className="flex justify-evenly items-center gap-3 mt-4">
                                    <a
                                        href={projects[selectedItemIndex].gitHubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white hover:text-secondary transition-colors duration-300"
                                    >
                                        <i className="ri-github-line hover:text-secondary text-2xl"></i>
                                    </a>
                                    <a
                                        href={projects[selectedItemIndex].previewLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white hover:text-secondary transition-colors duration-300"
                                    >
                                        <i className="ri-external-link-line hover:text-secondary text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
