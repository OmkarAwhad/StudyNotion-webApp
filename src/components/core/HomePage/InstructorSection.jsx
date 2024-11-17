import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import { FaArrowRight } from 'react-icons/fa'
import CTAButton from './CTAButton'


function InstructorSection() {
     return (
          <div className="flex flex-row gap-16 items-center p-20 mx-auto ">
               <div className="relative ">
                    <div className=" w-[616px] h-[550px] bg-white z-0"></div>
                    <div className="absolute z-10 w-[616px] h-[550px] -bottom-5 -right-5 ">
                         <img src={Instructor} alt="Instructor" className="object-contain" />
                    </div>
               </div>

               <div className="flex flex-col gap-4 items-start">
                    <h1 className=" text-[36px] ">
                         Become an
                         <HighlightText text={" instructor"} />
                    </h1>

                    <p className=" text-richblack-400 mb-10 ">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>

                    <CTAButton active={true} linkto={'/signUp'} >
                         <div className="flex items-center gap-4 text-base ">
                              Start Teaching Today
                              <FaArrowRight />
                         </div>
                    </CTAButton>
               </div>
          </div>
     )
}

export default InstructorSection