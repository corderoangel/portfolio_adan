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
								I am a Ph.D. candidate in cognitive science at Rensselaer Polytechnic Institute (RPI), pursuing cutting-edge research in cognitive architectures, AI, and computational
								modeling. My dissertation work advances self-control mechanisms from a rational perspective within the Clarion cognitive architecture. <br />
								<br />
								With over nine years of experience as a faculty member and researcher at EdutLan Lab in Universidad de Córdoba in Colombia, I have deep specialized knowledge in
								intelligent systems and using computational models for education. In EdutLan Lab, I spearheaded cognitive modeling efforts as the Area Coordinator. That work led to the
								co-creating of the CARINA metacognitive architecture, formalizing how agents monitor and control their cognition. <br />
								<br />
								Currently, I actively collaborate with Dr. Ron Sun at RPI’s CogArch Lab as part of my doctoral training to deepen my knowledge in cognitive modeling, cognitive
								architectures, and machine learning, as well as mathematical and social psychology.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="education-container">
				<h2>
					Education <FaUniversity />
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
