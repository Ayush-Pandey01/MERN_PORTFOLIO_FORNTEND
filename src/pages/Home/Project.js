// import React from 'react'
// import SectionTitle from '../../components/SectionTitle'
// import { useSelector } from 'react-redux';
// function Project() {
//     const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
//     const { portfolioData } = useSelector((state) => state.root);
//     const { projects } = portfolioData;
//     return (
//         <div>
//             <SectionTitle title="Projects" />
//             <div className='flex py-10 gap-20 sm:flex-col'>
//                 <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full '>
//                     {
//                         projects.map((project, index) => (
//                             <div className='cursor-pointer'
//                                 onClick={() => {
//                                     setSelectedItemIndex(index)
//                                 }}>
//                                 <h1 className={`text-xl px-10 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2c798a43] py-3' : 'text-white'}`}>{project.title}</h1>
//                             </div>
//                         ))
//                     }
//                 </div>

//                 <div className='flex items-center justify-center gap-10 sm:flex-col box-border'>
//                     <img src={projects[selectedItemIndex].image} className='h-60 w-72' alt=''></img>
//                     <div className='flex flex-col gap-5 sm:px-2 box-border sm:w-[90vw] '>
//                         <div className='flex justify-between sm:flex-col  items-center'>
//                             <a href="https://github.com/Ayush-Pandey01/WanderLust" target='_blank'rel="noreferrer" className='cursor-pointer text-secondary me-5 border-secondary border-2 rounded px-10 py-3'>GIT HUB Code  </a>
//                             <a href='https://wanderlust-37us.onrender.com/listings' target='_blank'rel="noreferrer" className='text-secondary me-10 ms-5 border-secondary border-2 rounded px-10 py-3 sm:mt-5 hover:border-'> Live Preview ..</a>
//                         </div>
//                         {/* <h1 className='text-secondary text-2xl'>{projects[selectedItemIndex].title}</h1> */}

//                         <p className='text-white text-2xl sm:text-xl '>{projects[selectedItemIndex].description}</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Project









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

            <div className="flex sm:flex-col flex-row py-8 gap-8 lg:gap-20">
                {/* Sidebar */}
                <div className="flex flex-col gap-10 border-l-2 border-gray-900 w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll overflow-visible">
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
                <div className="flex items-center justify-center gap-10 sm:flex-col box-border">
                    <img
                        src={projects[selectedItemIndex].image}
                        alt={projects[selectedItemIndex].title}
                        className="h-60 w-full lg:w-72 object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-5 sm:px-2 box-border sm:w-[90vw]">
                        <div className="flex justify-evenly sm:flex-col  items-center gap-3">
                            <a
                                href={projects[selectedItemIndex].github}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer bg-secondary text-white rounded px-6 py-2 border border-secondary transition-colors duration-300 hover:bg-transparent hover:text-secondary"
                            >
                                GitHub Code
                            </a>
                            <a
                                href={projects[selectedItemIndex].livePreview}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer bg-secondary text-white rounded px-6 py-2 border border-secondary transition-colors duration-300 hover:bg-transparent hover:text-secondary"
                            >
                                Live Preview
                            </a>
                        </div>
                        <p className="text-white text-lg lg:text-xl">
                            {projects[selectedItemIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

