import React from 'react'

import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import TimeLineImage from '../../../assets/Images/TimeLineImage.png'

const timeLine = [
   {
      logo: Logo1,
      heading: "Leadership",
      desc: "Fully committed to the success company",
   },
   {
      logo: Logo2,
      heading: "Responsibility",
      desc: "Students will always be our top priority    ",
   },
   {
      logo: Logo3,
      heading: "Flexibility",
      desc: "The ability to switch is an important skills",
   },
   {
      logo: Logo4,
      heading: "Solve the problem",
      desc: "Code your way to a solution",
   },

]

function TimeLineSection() {
   return (
      <div className="w-11/12 flex flex-row gap-10 mx-auto pt-6 pb-16    items-center justify-center max-w-maxContent">

         <div className=' w-[45%] flex flex-col gap-12 '>
            {
               timeLine.map((item, index) => {
                  return (
                     <div className='flex gap-5'>
                        <div className='flex items-center justify-center bg-white rounded-full h-[50px] w-[50px] '>
                           <img src={item.logo} alt="Logos" />
                        </div>
                        <div>
                           <h1 className='text-[18px] font-semibold' >{item.heading}</h1>
                           <p className='text-[14px] text-richblack-700 '>{item.desc}</p>
                        </div>
                     </div>
                  )
               })
            }
         </div>

         <div className=' w-[50%] relative '>
            <div>
               <img src={TimeLineImage} alt="" className='shadow-white object-cover' />
            </div>

            <div className=' h-[130px] w-[500px] p-[42px] flex gap-[52px] justify-between bg-caribbeangreen-700 absolute -bottom-20 right-16 '>

               <div className='flex gap-5 items-center lg:border-r lg:border-caribbeangreen-100 pr-14 '>
                  <h1 className='font-inter text-[36px] text-white font-semibold '>10</h1>
                  <div className='flex flex-col text-[14px] text-caribbeangreen-300 '>
                     <p>YEARS</p>
                     <p>EXPERIENCE</p>
                  </div>
               </div>

               <div className='flex gap-5 items-center'>
                  <h1 className='font-inter text-[36px] text-white font-semibold '>250</h1>
                  <div className='flex flex-col text-[14px] text-caribbeangreen-300 '>
                     <p>TYPES OF</p>
                     <p>COURSES</p>
                  </div>
               </div>

            </div>
         </div>

      </div>
   )
}

export default TimeLineSection