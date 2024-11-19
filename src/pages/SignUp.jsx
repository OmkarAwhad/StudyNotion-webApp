import React from 'react'
import Template from '../components/core/Auth/Template'
import SignUpImage from '../assets/Images/signup.webp'


function SignUp({setIsLoggedIn}) {
     return (
          <Template
               title={'Join the millions learning to code with StudyNotion for free'}
               description1={'Build skills for today, tomorrow, and beyond.'}
               description2={' Education to future-proof your career.'}
               image={SignUpImage}
               formType="signUp"
               setIsLoggedIn={setIsLoggedIn}
          />
     )
}

export default SignUp