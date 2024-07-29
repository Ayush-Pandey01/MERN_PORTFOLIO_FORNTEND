// import React from 'react'
// import SectionTitle from '../../components/SectionTitle'

// import { useSelector } from 'react-redux';
// function Education() {
//     const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
//     const { portfolioData} = useSelector((state)=>state.root);
//     const {educations}= portfolioData;
//   return (
//     <div >
//       <SectionTitle title="Education" />
//       <div className='flex py-10 gap-20 sm:flex-col '>
          
//             <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
//                     {
//                         educations.map((education, index) => (
//                             <div className='cursor-pointer'
//                              onClick={()=>{setSelectedItemIndex(index)
//                              }}>
//                                 <h1 className={`text-xl px-10 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2c798a43] py-3' : 'text-white'}`}>{education.Title}</h1>
//                             </div>
//                         ))
//                     }
               
//             </div>

//             <div className='flex flex-col gap-5'>
//                     <h1 className='text-secondary text-2xl'>{educations[selectedItemIndex].period}</h1>
//                     <h1 className='text-tertiary text-2xl'>{educations[selectedItemIndex].College}</h1>
//                     <p className='text-white text-2xl sm:text-xl'>{educations[selectedItemIndex].description}</p>
//                 </div>
//       </div>
//     </div>
//   )
// }

// export default Education



import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Education() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { educations } = portfolioData;

  return (
    <div className="min-h-screen  text-white py-10">
      <SectionTitle title="Education" />
      <div className="flex py-10 gap-20 sm:flex-col items-center">
        {/* Timeline Navigation */}
        <div className="flex flex-col gap-10 border-l-2 border-gray-900 w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {educations.map((education, index) => (
            <div
              key={index}
              className={`cursor-pointer px-5 py-3 transition-all duration-300 ${
                selectedItemIndex === index
                  ? 'text-tertiary border-l-4 border-tertiary bg-gray-800'
                  : 'text-white hover:bg-gray-700'
              }`}
              onClick={() => setSelectedItemIndex(index)}
            >
              <h1 className="text-xl">{education.Title}</h1>
            </div>
          ))}
        </div>

        {/* Education Details */}
        <div className="flex flex-col gap-5 w-2/3 sm:w-full animate-fadeIn">
          <h1 className="text-secondary text-2xl">{educations[selectedItemIndex].period}</h1>
          <h1 className="text-tertiary text-2xl">{educations[selectedItemIndex].College}</h1>
          <p className="text-white text-lg">{educations[selectedItemIndex].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Education;

