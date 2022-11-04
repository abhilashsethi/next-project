import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="bg-fixed flex bg-[url('/backgroud.png')] w-full lg:h-[calc(100vh-55px)] h-[calc(100vh)] bg-cover bg-center bg-no-repeat bg-black/25 p-[1em] bg-blend-overlay">
			<div className="lg:px-10 main-container flex flex-col justify-center items-center md:gap-3 gap-5">
				<div className="w-full flex flex-col overflow-hidden">
					<h1 className="text-gray-300 tracking-wide text-3xl md:text-5xl lg:text-8xl font-bold w-full">
						Contact Us
					</h1>
					<motion.div
						initial={{ width: 0, opacity: 0 }}
						whileInView={{ width: 500, opacity: 1 }}
						transition={{
							delay: 0.5,
							duration: 2,
							type: "spring",
							stiffness: 100,
						}}
						className="hidden md:inline-block border-2 border-[#ffb8cb] bg-[#ffb8cb]  m-3 rounded-full"
					></motion.div>
					<motion.div
						initial={{ width: 0, opacity: 0 }}
						whileInView={{ width: 170, opacity: 1 }}
						transition={{
							delay: 0.5,
							duration: 2,
							type: "spring",
							stiffness: 100,
						}}
						className="md:hidden inline-block border-2 border-[#ffb8cb] bg-[#ffb8cb] mt-1 rounded-full"
					></motion.div>
				</div>
				<p className="text-gray-400 tracking-wide text-lg md:text-2xl font-semibold w-full px-3">
					We would be happy to assist you <br /> To make requests for further
					information, contact us via our social channels <br /> We just need a
					couple of hours! No more than 2 working days since receiving your
					issue ticket.
				</p>
			</div>
		</div>
	);
};

export default Hero;
