import React from "react";
// import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Lottie from "lottie-react";
import study from "../assets/animation/study.json";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<section>
			{/* hero section */}
			<Hero />

			{/* form section */}
			<div className="flex lg:flex-row flex-col justify-between items-center lg:p-10 p-3 bg-[#f4f4f5] ">
				<motion.div
					className="border-[30px] border-[#ffe9f7] rounded-2xl lg:w-1/2 w-full"
					initial={{ x: -200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
					exit="exit"
				>
					<ContactForm />
				</motion.div>
				<Lottie
					className="lg:w-1/2 w-full"
					animationData={study}
					loop={true}
					// style={{ width: "40rem", height: "39.07rem" }}
				/>
			</div>

			{/* card section */}
			<Cards />
		</section>
	);
};

export default Contact;
