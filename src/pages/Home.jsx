import React, { Children } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Footer from "../components/common/Footer";

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
			</div>
			{/* Section 2 */}
			{/* Section 3 */}
			{/* Footer */}
			<Footer/>
		</div>
	);
};

export default Home;
