import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import CTAButton from "../HomePage/CTAButton";

function LoginForm() {
     const [formData, setFormData] = useState({
          email: "",
          password: "",
     });

     const [showPass, setShowPass] = useState(false)

     function changeHandler(event) {
          setFormData((prev) => ({
               ...prev,
               [event.target.name]: event.target.value,
          }));
     }

     function changeShowPassword() {
          return setShowPass(!showPass)
     }

     return (
          <form action="" className="flex flex-col gap-4 ">
               <div className="flex flex-col ">
                    <label htmlFor="email" className="px-2 py-1">
                         Email Address <sup>*</sup>
                    </label>
                    <div className="w-full bg-richblack-800 px-2 py-3 rounded-md ">
                         <input
                              required
                              type="email"
                              value={formData.email}
                              className=" text-richblack-100 bg-transparent w-full outline-none "
                              id="email"
                              onChange={changeHandler}
                              name="email"
                              placeholder="Enter email address"
                         />
                    </div>
               </div>

               <div className="flex flex-col mb-4">
                    <label htmlFor="password" className="px-2 py-1">
                         Password <sup>*</sup>
                    </label>
                    <div className="w-full bg-richblack-800 px-2 py-3 rounded-md flex items-center justify-between pr-5 ">
                         <input
                              type={showPass ? "text" : "password"}
                              className=" text-richblack-100 bg-transparent w-full outline-none "
                              id="password"
                              name="password"
                              value={formData.password}
                              onChange={changeHandler}
                              placeholder="Enter password"
                         />
                         <div onClick={changeShowPassword}>
                              {
                                   showPass === false ? <FaEyeSlash className="text-richblack-300" /> : <FaEye className="text-richblack-300" />
                              }
                         </div>
                    </div>
               </div>

               <CTAButton active={true} linkto={"/"}>
                    <p className="text-base">Sign in</p>
               </CTAButton>
          </form>
     );
}

export default LoginForm;
