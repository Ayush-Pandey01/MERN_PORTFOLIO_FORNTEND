import React from 'react'
import { useSelector } from 'react-redux';

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { welcomeText, fristName, lastName, caption, description,ImgUrl,CVURL } = intro
  
  return (
 
<div className="flex items-center justify-center min-h-[85vh]  text-white">
            <div className="flex sm:flex-col-reverse sm:gap-6 flex-row items-center justify-evenly w-full">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:ml-6 lg:mt-0 flex-1 animate-slideInLeft">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl mb-4">
                        {welcomeText} {fristName} {' '}{lastName}
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl mb-4">
                       {caption}
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl mb-4">
                       {description}
                    </p>
                    <a href={CVURL}  target='_blank' className="px-6 py-4 text-sm sm:text-base bg-white text-blue-500 rounded hover:bg-gray-200 transition-colors duration-300">
                        View CV
                    </a>
                </div>

                {/* Image Section */}
                <div className=" lg:me-5 flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-72 lg:h-72 rounded-full overflow-hidden animate-slideInRight">
                    <img
                        src={ImgUrl}
                        alt="Your Name"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>



  )
}

export default Intro
