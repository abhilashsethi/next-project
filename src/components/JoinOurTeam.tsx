import React from "react";
import { motion } from "framer-motion";
import JoinOurTeamForm from "./JoinOurTeamForm";

const JoinOurTeam = () => {
	return (
		<section className="w-full flex flex-col justify-center items-center">
			<div className="w-full flex flex-col justify-center items-center">
				<h1 className="md:text-4xl text-2xl text-gray-800 font-semibold subpixel-antialiased">
					Join Our <span className="text-[#ff3d9b]">Team</span>
				</h1>
				<motion.div
					initial={{ width: 0, opacity: 0 }}
					whileInView={{ width: 230, opacity: 1 }}
					transition={{
						delay: 0.5,
						duration: 2,
						type: "spring",
						stiffness: 100,
					}}
					className="hidden md:inline-block border-2 border-[#ff3d9b] bg-[#ff3d9b] m-1 rounded-full"
				></motion.div>
			</div>
			<div className="w-full ">
				<hr className="" />
			</div>
			<div className="w-4/5">
				<JoinOurTeamForm />
			</div>
		</section>
	);
};

export default JoinOurTeam;
