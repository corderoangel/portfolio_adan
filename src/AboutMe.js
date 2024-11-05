import React from "react";
import "./AboutMe.css";
import { FaUniversity } from "react-icons/fa";
const AboutMe = () => {
	return (
		<div className="allcontainer">
			<div className="aboutme-wrapper">
				<div className="aboutme-container">
					<div className="aboutme-container_content">
						<img src="./foto.jpg" alt="Pic for Adán Gomez" />
						<div className="aboutme-description">
							<h2>About me</h2>
							<p>
								I’m a Ph.D. candidate in Cognitive Science at Rensselaer Polytechnic Institute (RPI), researching cognitive architectures, AI, and computational modeling. My work
								focuses on self-control mechanisms within the Clarion cognitive architecture. With over nine years of experience as a researcher and faculty member at EdutLan Lab,
								University of Córdoba, Colombia, I co-created the CARINA metacognitive architecture for agent cognition control. I currently collaborate with Dr. Ron Sun at RPI’s
								CogArch Lab to further explore cognitive modeling, machine learning, and social psychology.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="education-container">
				<h2>
					<FaUniversity /> Education
				</h2>
				<div className="education-container_content">
					<div className="education-container_content__item">
						<p>Ph.D. Candidate in Cognitive Sciences(Anticipated May 2025) - Rensselaer Polytechnic Institute(Troy, NY)</p>
					</div>
					<div className="education-container_content__item">
						<p>M.S. Information Technology Applied to Education(March, 2012) - Universidad Pedagogica Nacional(Bogotá, Colombia)</p>
					</div>
					<div className="education-container_content__item">
						<p>B.S. Information Technology and Audiovisual Media(October, 2001) - Universidad de Córdoba(Montería, Colombia)</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
