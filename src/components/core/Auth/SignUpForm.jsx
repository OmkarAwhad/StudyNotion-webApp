import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import CTAButton from "../HomePage/CTAButton";

function SignUpForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
          email:"",
          contactNumber:"",
		createPassword: "",
		confirmPassword: "",
	});

	const [showPass, setShowPass] = useState(false);

	function changeHandler(event) {
		setFormData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}

	function changeShowPassword() {
		return setShowPass(!showPass);
	}

	return (
		<form action="" className="flex flex-col gap-2 ">
               <div className="flex gap-5 ">
                    <div className="flex flex-col ">
                         <label htmlFor="firstName" className="px-3 py-1">
                              First Name <sup>*</sup>
                         </label>
                         <div className="w-full bg-richblack-800 px-3 py-3 rounded-md ">
                              <input
                                   required
                                   type="text"
                                   value={formData.firstName}
                                   className=" text-richblack-100 bg-transparent w-full outline-none "
                                   id="firstName"
                                   onChange={changeHandler}
                                   name="firstName"
                                   placeholder="Enter First Name "
                              />
                         </div>
                    </div>
                    <div className="flex flex-col ">
                         <label htmlFor="lastName" className="px-3 py-1">
                              Last Name <sup>*</sup>
                         </label>
                         <div className="w-full bg-richblack-800 px-3 py-3 rounded-md ">
                              <input
                                   required
                                   type="text"
                                   value={formData.lastName}
                                   className=" text-richblack-100 bg-transparent w-full outline-none "
                                   id="lastName"
                                   onChange={changeHandler}
                                   name="lastName"
                                   placeholder="Enter Last Name "
                              />
                         </div>
                    </div>
               </div>

			<div className="flex flex-col ">
				<label htmlFor="email" className="px-3 py-1">
					Email Address <sup>*</sup>
				</label>
				<div className="w-full bg-richblack-800 px-3 py-3 rounded-md ">
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

               <div>
                    <div className="flex flex-col ">
                         <label htmlFor="contactNumber" className="px-3 py-1">
                              Phone Address <sup>*</sup>
                         </label>
                         <div className="w-full bg-richblack-800 px-3 py-3 rounded-md ">
                              <input
                                   required
                                   type="Number"
                                   value={formData.contactNumber}
                                   className=" text-richblack-100 bg-transparent w-full outline-none "
                                   id="contactNumber"
                                   onChange={changeHandler}
                                   name="contactNumber"
                                   placeholder="1234567890"
                              />
                         </div>
                    </div>
               </div>

			<div className="flex gap-5 ">
                    <div className="flex flex-col mb-4">
                         <label htmlFor="createPassword" className="px-3 py-1">
                              Create Password <sup>*</sup>
                         </label>
                         <div className="w-full bg-richblack-800 px-3 py-3 rounded-md flex items-center justify-between pr-5 ">
                              <input
                                   type={showPass ? "text" : "password"}
                                   className=" text-richblack-100 bg-transparent w-full outline-none "
                                   id="createPassword"
                                   name="createPassword"
                                   value={formData.createPassword}
                                   onChange={changeHandler}
                                   placeholder="Enter Password"
                              />
                              <div onClick={changeShowPassword}>
                                   {showPass === false ? <FaEyeSlash className="text-richblack-300" /> : <FaEye className="text-richblack-300" />}
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col mb-4">
                         <label htmlFor="confirmPassword" className="px-3 py-1">
                         Confirm Password <sup>*</sup>
                         </label>
                         <div className="w-full bg-richblack-800 px-3 py-3 rounded-md flex items-center justify-between pr-5 ">
                              <input
                                   type={showPass ? "text" : "password"}
                                   className=" text-richblack-100 bg-transparent w-full outline-none "
                                   id="confirmPassword"
                                   name="confirmPassword"
                                   value={formData.confirmPassword}
                                   onChange={changeHandler}
                                   placeholder="Enter Password"
                              />
                              <div onClick={changeShowPassword}>
                                   {showPass === false ? <FaEyeSlash className="text-richblack-300" /> : <FaEye className="text-richblack-300" />}
                              </div>
                         </div>
                    </div>
               </div>

			<CTAButton active={true} linkto={"/signUp"}>
				<p className="text-base">Sign in</p>
			</CTAButton>
		</form>
	);
}

export default SignUpForm;
