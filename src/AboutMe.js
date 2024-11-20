import React from "react";
import "./AboutMe.css";
import { FaUniversity, FaLinkedin, FaGithubSquare, FaResearchgate } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

const AboutMe = () => {
	// Define la función descargarCV
	const descargarCV = () => {
		const link = document.createElement("a");
		link.href = "/adan_gomez_cv.pdf"; // Ruta al archivo PDF
		link.download = "adan_gomez_cv.pdf"; // Nombre con el que se descargará
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="allcontainer">
			<div className="aboutme-wrapper">
				<div className="aboutme-container">
					<div className="aboutme-container_content">
						<img src="./foto.jpg" alt="Pic for Adán Gomez" />
						<div className="aboutme-description">
							<h2>About Me</h2>
							<p>
								I’m a Ph.D. candidate in Cognitive Science at Rensselaer Polytechnic Institute (RPI), researching cognitive architectures, AI, and computational modeling. My work
								focuses on self-control mechanisms within the Clarion cognitive architecture. With over nine years of experience as a researcher and faculty member at EdutLan Lab,
								Universidad de Córdoba, Colombia, I co-created the CARINA metacognitive architecture for agent cognition control. I currently collaborate with Dr. Ron Sun at RPI’s
								CogArch Lab to further explore cognitive modeling, machine learning, and social psychology.
							</p>
							<button onClick={descargarCV}>
								{/* <button> */}
								Descargar CV <i className="fa-solid fa-download"></i>
								<span className="overlay"></span>
							</button>
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
			<div className="contact-container" id="contact">
				<h2>
					<MdContactMail /> Contact
				</h2>
				<p>Si deseas trabajar conmigo o saber más sobre mis proyectos, no dudes en contactarme:</p>

				<div className="contact-email">
					<a href="mailto:correo@gmail.com" class="contact-btn">
						Enviar correo
					</a>
				</div>

				<div className="contact-redes">
					<a href="https://www.linkedin.com/in/adangomezs/">
						<FaLinkedin />
					</a>
					<a href="#">
						<FaGithubSquare />{" "}
					</a>
					<a href="#">
						<FaResearchgate />{" "}
					</a>
					<a href="#">
						<FaGoogleScholar />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
