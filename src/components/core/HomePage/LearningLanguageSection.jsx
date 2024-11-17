import React from 'react'
import HighlightText from './HighlightText'
import CompareWithOthers from '../../../assets/Images/Compare_with_others.png'
import KnowYourProgress from '../../../assets/Images/Know_your_progress.png'
import PlanYourLessons from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './CTAButton'

function LearningLanguageSection() {
   return (
      <div className=" relative mx-auto flex flex-col w-11/12 items-center pb-20 pt-32 max-w-maxContent text-black justify-center">
         <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold w-[75%]'>
               Your swiss knife for
               <HighlightText text={" learning any language"} />
            </h1>
            <p className='w-[75%] text-center py-5'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
         </div>

         <div className='relative w-[90%] pt-10 h-[600px]'>
            <img src={KnowYourProgress}  alt="" className=' absolute   object-contain' />
            <img src={CompareWithOthers} alt="" className=' absolute left-[30%] -top-2 object-contain' />
            <img src={PlanYourLessons}   alt="" className=' absolute left-[60%] -top-2  object-contain' />
         </div>

         <div>
            <CTAButton active={true} linkto={'/signUp'} >
               Learn More
            </CTAButton>
         </div>
      </div>
   )
}

export default LearningLanguageSection