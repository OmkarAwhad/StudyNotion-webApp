import React, { Children } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Footer from "../components/common/Footer";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";

const Home = () => {
	return (
		<div>
			{/* Section 1 */}
			<div className=" relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between">
				<Link to={"/signUp"}>
					<div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95">
						<div className="flex justify-center items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 ">
							<p>Become a Instructor</p>
							<FaArrowRight />
						</div>
					</div>
				</Link>

				<div className=" text-semibold text-center text-4xl mt-7">
					Empower Your Future with
					<HighlightText text={"Coding Skills"} />
				</div>

				<div className="w-[90%] text-center text-lg font-bold text-richblack-300 my-4 ">
					With our online coding courses, you can learn at your
					own pace, from anywhere in the world, and get access to
					a wealth of resources, including hands-on projects,
					quizzes, and personalized feedback from instructors
				</div>

				<div className="flex gap-7">
					<CTAButton active={true} linkto={"/signUp"}>
						Learn More
					</CTAButton>
					<CTAButton active={false} linkto={"/login"}>
						Book a Demo
					</CTAButton>
				</div>

				<div className=" shadow-blue-200 my-12 mx-3  ">
					<video muted loop autoPlay src={Banner}></video>
				</div>

				<div>
					<CodeBlocks
						position={"lg:flex-row"}
						heading={
							<div className=" text-4xl font-semibold">
								Unlock your
								<HighlightText
									text={"coding potential "}
								/>
								with our online courses.
							</div>
						}
						subheading={
							"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
						}
						ctabtn1={{
							children: "Try it yourself",
							linkto: "/signUp",
							active: true,
						}}
						ctabtn2={{
							children: "Learn More",
							linkto: "/login",
							active: false,
						}}
						codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
						codeColor={"text-yellow-25"}
						backgroundGradient={<div className="codeblock1 absolute"></div>}
					/>
				</div>

				<div>
					<CodeBlocks
						position={"lg:flex-row-reverse"}
						heading={
							<div className=" text-4xl font-semibold">
								Start 
								<HighlightText
									text={" coding in seconds "}
								/>
							</div>
						}
						subheading={
							"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
						}
						ctabtn1={{
							children: "Continue Lesson",
							linkto: "/signUp",
							active: true,
						}}
						ctabtn2={{
							children: "Learn More",
							linkto: "/login",
							active: false,
						}}
						codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
						codeColor={"text-blue-100"}
						backgroundGradient={<div className="codeblock2 absolute"></div>}
					/>
				</div>

				<ExploreMore/>
			</div>

			{/* Section 2 */}
			<div className=" bg-pure-greys-5 text-richblack-700 ">

				<div className="homepage_bg h-[333px] ">

					<div className=" w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto ">

						<div className=" h-[140px] "></div>
						{/* two btns */}
						<div className="flex flex-row gap-7 text-white">
							<CTAButton active={true} linkto={"/signUp"} >
								<div className="flex flex-row gap-3 items-center">
									Explore Full Catalog
									<FaArrowRight />
								</div>
							</CTAButton>

							<CTAButton active={false} linkto={"/signUp"} >
								Learn More
							</CTAButton>
						</div>

					</div>

				</div>

				<div className="w-11/12 flex max-w-maxContent items-center justify-between gap-16 mx-auto py-16 ">
					
					<div className=" flex flex-row gap-5 ">
						<div className=" text-4xl font-semibold w-[45%] ">
							Get the skills you need for a
							<HighlightText text={" Job that is in demand"} />
						</div>

						<div className=" flex flex-col gap-4 w-[40%] ml-10 items-start ">
							<p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
							<CTAButton active={true} linkto={'/signUp'} >
								<div className="w-fit ">
									Learn More
								</div>
							</CTAButton>
						</div>
					</div>

				</div>

				<TimeLineSection/>

				<LearningLanguageSection/>

			</div>

			{/* Section 3 */}
			<div className="w-11/12 mx-auto flex flex-col items-center justify-end text-white max-w-maxContent ">
				<InstructorSection/>

				<div className="flex flex-col items-center justify-center text-center gap-10 mt-20 mb-10">
					<h1 className="text-4xl font-semibold">Reviews from other learners</h1>
				</div>

			</div>

			{/* Footer */}
			<Footer/>
		</div>
	);
};

export default Home;
