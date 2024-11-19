import React from 'react'
import FrameImage from '../../../assets/Images/frame.png'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Template({ title, description1, description2, image, formType, setIsLoggedIn  }) {
     // const { loading } = useSelector((state) => state.auth)

     return (
          <div className='w-8/12 z-0 mt-20 mx-auto p-5 font-inter flex flex-row gap-10 text-white'>
               <div className='flex flex-col w-[45%] gap-6'>
                    <div>
                         <h1 className=' text-[30px] font-semibold '>{title}</h1>
                         <p className=' text-base text-richblack-200 '>{description1} <span className='font-edu-sa text-blue-200'>{description2}</span></p>
                    </div>
                    <div className='bg-richblack-800 w-fit px-1 py-1 flex gap-1 rounded-full border-b border-richblack-500'>
                         <button className='hover:bg-richblack-900 px-5 py-2 rounded-full transition-all duration-200 ' >Student</button>
                         <button className='hover:bg-richblack-900 px-5 py-2 rounded-full transition-all duration-200 ' >Instructor</button>
                    </div>
                    
                    {formType === 'login'? <LoginForm/> :<SignUpForm/>}

               </div>

               <div className=' w-[50%] ml-[5%] relative '>
                    <img src={image} className='z-20'  />
                    <img src={FrameImage} className=' absolute top-4 -z-10 left-4 ' />
               </div>

          </div>
     )
}

export default Template