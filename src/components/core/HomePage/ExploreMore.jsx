import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
   "Free",
   "New to coding",
   "Most popular",
   "Skills paths",
   "Career paths"
];

function ExploreMore() {
   const [currentTab, setCurrentTab] = useState(tabsName[0]);
   const [courses, setCourses] = useState(HomePageExplore[0].courses);
   const [currentCard, setCurrentCard] = useState(
      HomePageExplore[0].courses[0].heading
   );

   const setMyCards = (value) => {
      setCurrentTab(value);
      const result = HomePageExplore.filter(
         (course) => course.tag === value
      );
      setCourses(result[0].courses);
      setCurrentCard(result[0].courses[0].heading);
   };

   return (
      <div className="w-11/12 flex flex-col items-center justify-center mx-auto">
         <div className="text-4xl font-semibold text-center ">
            Unlock the
            <HighlightText text={"Power of Code"} />
         </div>

         <p className=" text-center text-richblack-300 my-3 ">
            Learn to Build Anything You Can Imagine
         </p>

         <div className="flex w-fit gap-2 bg-richblack-800 px-2 py-1 rounded-full">
            {tabsName.map((item, index) => {
               return (
                  <div
                     className={`rounded-full px-7 py-5 ${currentTab === item
                           ? " bg-richblack-900 text-richblack-5 font-medium "
                           : " text-richblack-200"
                        } transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5  `}
                     key={index}
                     onClick={() => setMyCards(item)}
                  >
                     {item}
                  </div>
               );
            })}
         </div>

         <div className="lg:h-[230px]"></div>

         {/* TODO : Course card component banao */}
         <div className="lg:absolute gap-7 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[40%] lg:translate-x-[-40%] lg:translate-y-[40%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
            {
               courses.map((item,index) => {
                  return(
                     <CourseCard key={index} cardData={item} currentCard={currentCard} setCurrentCard={setCurrentCard} />
                  )
               })
            }
         </div>

      </div>
   );
}

export default ExploreMore;
