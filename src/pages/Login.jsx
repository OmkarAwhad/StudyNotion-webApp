import React from 'react'
import LoginImage from '../assets/Images/login.webp'
import Template from '../components/core/Auth/Template';

function Login({setIsLoggedIn}) {
     // title, description1, description2, image, formType 
     return (
          <Template
               title={'Welcome Back'}
               description1={'Build skills for today, tomorrow, and beyond.'}
               description2={' Education to future-proof your career.'}
               image={LoginImage}
               formType="login"
               setIsLoggedIn={setIsLoggedIn}

          />
     )
}

export default Login