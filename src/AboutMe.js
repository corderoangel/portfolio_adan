import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
	return (
		<div className="aboutme-container">
			<h2>About Me</h2>
			<div className="aboutme-container_content">
				<p>
					I am a Ph.D. candidate in cognitive science at Rensselaer Polytechnic Institute (RPI), pursuing cutting-edge research in cognitive architectures, AI, and computational modeling. My
					dissertation work advances self-control mechanisms from a rational perspective within the Clarion cognitive architecture. <br />
					<br />
					With over nine years of experience as a faculty member and researcher at EdutLan Lab in Universidad de Córdoba in Colombia, I have deep specialized knowledge in intelligent systems
					and using computational models for education. In EdutLan Lab, I spearheaded cognitive modeling efforts as the Area Coordinator. That work led to the co-creating of the CARINA
					metacognitive architecture, formalizing how agents monitor and control their cognition. <br />
					<br />
					Currently, I actively collaborate with Dr. Ron Sun at RPI’s CogArch Lab as part of my doctoral training to deepen my knowledge in cognitive modeling, cognitive architectures, and
					machine learning, as well as mathematical and social psychology.
				</p>
				<img src="./foto.jpg" alt="Pic for Adán Gomez" />
			</div>
		</div>
	);
};

export default AboutMe;
