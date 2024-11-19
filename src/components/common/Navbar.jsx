import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {

   const { token } = useSelector((state) => state.auth);
   const { user } = useSelector((state) => state.profile);
   const { totalItems } = useSelector((state) => state.cart);
   const location = useLocation();

   const [subLinks, setSubLinks] = useState([]);

   const fetchSubLinks = async () => {
      try {
         const result = await apiConnector("GET", categories.CATEGORIES_API);
         console.log("Printing catelog list", result);
         setSubLinks(result.data.Categories)
         console.log("Printing catelog list", result.data.Categories);

      } catch (error) {
         console.log("Could not fetch the category(catelog) list")
      }
   }

   useEffect(() => {
      fetchSubLinks();
   }, [])

   function matchRoute(route) {
      return matchPath({ path: route }, location.pathname);
   }

   return (
      <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ">
         <div className="w-11/12 flex max-w-maxContent items-center justify-between gap-2 text-richblack-100 text-base ">
            <div>
               <Link to={"/"}>
                  <img
                     src={Logo}
                     alt="Logo"
                     height={42}
                     width={160}
                     loading="lazy"
                  />
               </Link>
            </div>

            <nav>
               <ul className="flex gap-5">
                  {NavbarLinks.map((item, index) => {
                     return (
                        <li key={index}>
                           {item.title === "Catalog" ? (
                              <div className={`flex gap-2 cursor-pointer items-center relative group`}>
                                 {item.title}
                                 <IoIosArrowDown className="cursor-pointer" />
                                 <div className="absolute top-4 invisible opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:visible transition-all duration-200 ">

                                    <div className="relative">
                                       <div className=" h-[30px] w-[30px] bg-richblack-300 top-3 left-5 absolute rounded rotate-45 "></div>

                                       <div className="absolute max-h-fit w-[150px] translate-x-[-25%] -bottom-40 bg-richblack-300 text-richblack-900 font-medium text-center text-lg flex flex-col rounded-md ">
                                          {
                                             subLinks.length && (
                                                subLinks.map((item, index) => (
                                                   <Link to={`${(item.name).split("/").join("-").toLowerCase()}`} 
                                                   className =
                                                   {
                                                      `py-2 transition-all duration-500 hover:scale-80  hover:font-semibold  cursor-pointer
                                                      ${subLinks.length - 1 === index ? "" : "border-b-[1px] border-richblack-100"} `
                                                   }
                                                   key={index}>
                                                      {item.name}
                                                   </Link>
                                                ))
                                             )
                                          }
                                       </div>

                                    </div>
                                 </div>


                              </div>
                           ) : (
                              <Link
                                 key={index}
                                 className={`cursor-pointer ${matchRoute(item.path) ? "text-yellow-100" : "text-richblack-100"} `}
                                 to={item?.path}
                              >
                                 {item.title}
                              </Link>
                           )}
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <div className="flex gap-4 items-center">
               {
                  user && user.accountType != "Instructor" && (
                     <Link to='/dashboard/cart' className="relative" >
                        <CiShoppingCart />
                        {
                           totalItems > 0 && (
                              <span className="absolute">{totalItems}</span>
                           )
                        }
                     </Link>
                  )
               }
               {
                  token === null && (
                     <div className="border-richblack-300 border px-3 py-1 rounded-md bg-richblack-800 cursor-pointer hover:bg-richblack-900 hover:border-richblack-100 transition-all duration-150 hover:scale-95 ">
                        <Link className="cursor-pointer" to={"/login"}>
                           Log in
                        </Link>
                     </div>
                  )
               }
               {
                  token === null && (
                     <div className="border-richblack-300 border px-3 py-1 rounded-md bg-richblack-800 cursor-pointer hover:bg-richblack-900 hover:border-richblack-100 transition-all duration-150 hover:scale-95 ">
                        <Link t className="cursor-pointer" to={"/signUp"}>
                           Sign up
                        </Link>
                     </div>
                  )
               }
               {
                  token !== null && <ProfileDropDown />
               }
            </div>
         </div>
      </div>
   );
}

export default Navbar;
