import React, { useState } from "react";
import "./Experience.css";

// const Experience = () => {
// 	// Estado para controlar si la descripción de una investigación está visible
// 	const [isOpen, setIsOpen] = useState(null); // Guarda el índice de la investigación abierta

// 	// Función para alternar la visibilidad de los detalles
// 	const toggleDetails = (index) => {
// 		setIsOpen(isOpen === index ? null : index); // Si ya está abierto, lo cierra, si no lo abre
// 	};

// 	// return (
// 	// 	<div>
// 	// 		<div className="research-container">
// 	// 			<h2>Research experience</h2>
// 	// 			<div className="research-container_content">
// 	// 				<div className="research">
// 	// 					<h4>Ph.D. Thesis</h4>
// 	// 					<p>
// 	// 						A Comprehensive Framework and a Mechanistic Model of Self-Control in Clarion Cognitive Architecture. (<em>In progress</em>)
// 	// 					</p>
// 	// 				</div>
// 	// 				<div className="research">
// 	// 					<h4>Graduate Research Assistantship</h4>
// 	// 					<p>
// 	// 						Computational Modeling of Motivation and Cognition in CLARION Cognitive Architecture. (<em>2022</em>)
// 	// 					</p>
// 	// 				</div>
// 	// 				<div className="research">
// 	// 					<h4>ITS Fichas y Protocolos en Salud</h4>
// 	// 					<p>
// 	// 						Intelligent Tutor System for learning the care protocol in the early detection of Gestational and Congenital Syphilis. (<em>2021-2022</em>)
// 	// 					</p>
// 	// 				</div>
// 	// 				<div className="research">
// 	// 					<h4>Metacognitive Judgements in MIDCA</h4>
// 	// 					<p>
// 	// 						Formal Representation and Computational Implementation of Metacognitive Judgments Related to Goals Execution Time in MIDCA Cognitive Architecture. (<em>2019</em>)
// 	// 					</p>
// 	// 				</div>
// 	// 				<div className="research">
// 	// 					<h4>ECHO</h4>
// 	// 					<p>
// 	// 						Autonomous system based on CARINA Cognitive Architecture for Frequently Asked Questions Systems, Open Question Assessment, and Translation from Guided Public Discussions to
// 	// 						Sustainable Development Goals. (<em>2018-2019</em>)
// 	// 					</p>
// 	// 				</div>
// 	// 				<div className="research">
// 	// 					<h4>CARINA Cognitive Architecture</h4>
// 	// 					<p>
// 	// 						Computational Modeling of Cognitive and Metacognitive processes for the Object level and Meta level of CARINA. (<em>2017-2019</em>)
// 	// 					</p>
// 	// 				</div>
// 	// 				<div className="research">
// 	// 					<h4>NUMBOT</h4>
// 	// 					<p>Educational Robotic Toy with visual-auditory recognition for the development of counting skills.</p>
// 	// 					<p>
// 	// 						<em>2015</em>
// 	// 					</p>
// 	// 				</div>
// 	// 			</div>
// 	// 		</div>

// 	// 		<div class="teaching-container">
// 	// 			<h2>Teaching experience</h2>
// 	// 			<div class="teaching-container_content">
// 	// 				<div class="teaching">
// 	// 					<h3>Full-Time Faculty Member</h3>
// 	// 					<p>University of Cordoba, Montería, Colombia.</p>
// 	// 					<p>Educational Informatics Department.</p>
// 	// 					<p>
// 	// 						<em>2015-2024</em>
// 	// 					</p>
// 	// 				</div>
// 	// 				<div class="teaching">
// 	// 					<h3>Half-Time Lecturer</h3>
// 	// 					<p>University of Cordoba, Montería, Colombia.</p>
// 	// 					<p>Educational Informatics Department – Computer Science Department.</p>
// 	// 					<p>
// 	// 						<em>2003 - 2014</em>
// 	// 					</p>
// 	// 				</div>
// 	// 				<div class="teaching">
// 	// 					<h3>Full-Time Computer Science Teacher</h3>
// 	// 					<p>Institución Educativa Cristóbal Colón, Montería, Colombia.</p>
// 	// 					<p>
// 	// 						<em>1999-2014</em>
// 	// 					</p>
// 	// 				</div>
// 	// 				<div class="teaching">
// 	// 					<h3>Full-Time Computer Science Teacher</h3>
// 	// 					<p>Colegio Militar Almirante Colón, Montería, Colombia.</p>
// 	// 					<p>
// 	// 						<em>1995 - 1998</em>
// 	// 					</p>
// 	// 				</div>
// 	// 			</div>
// 	// 		</div>
// 	// 	</div>
// 	// );

// 	return (
// 		<div>
// 			<div className="research-container">
// 				<h2>Research experience</h2>
// 				<div className="research-container_content">
// 					{[
// 						{
// 							title: "Ph.D. Thesis",
// 							description: "A Comprehensive Framework and a Mechanistic Model of Self-Control in Clarion Cognitive Architecture. (<em>In progress</em>)",
// 						},
// 						{
// 							title: "Graduate Research Assistantship",
// 							description: "Computational Modeling of Motivation and Cognition in CLARION Cognitive Architecture. (<em>2022</em>)",
// 						},
// 						{
// 							title: "ITS Fichas y Protocolos en Salud",
// 							description: "Intelligent Tutor System for learning the care protocol in the early detection of Gestational and Congenital Syphilis. (<em>2021-2022</em>)",
// 						},
// 						{
// 							title: "Metacognitive Judgements in MIDCA",
// 							description:
// 								"Formal Representation and Computational Implementation of Metacognitive Judgments Related to Goals Execution Time in MIDCA Cognitive Architecture. (<em>2019</em>)",
// 						},
// 						{
// 							title: "ECHO",
// 							description:
// 								"Autonomous system based on CARINA Cognitive Architecture for Frequently Asked Questions Systems, Open Question Assessment, and Translation from Guided Public Discussions to Sustainable Development Goals. (<em>2018-2019</em>)",
// 						},
// 						{
// 							title: "CARINA Cognitive Architecture",
// 							description: "Computational Modeling of Cognitive and Metacognitive processes for the Object level and Meta level of CARINA. (<em>2017-2019</em>)",
// 						},
// 						{
// 							title: "NUMBOT",
// 							description: "Educational Robotic Toy with visual-auditory recognition for the development of counting skills. (<em>2015</em>)",
// 						},
// 					].map((research, index) => (
// 						<div key={index} className="research">
// 							<div className="research-header" onClick={() => toggleDetails(index)}>
// 								<h4>{research.title}</h4>
// 								<span className="toggle-icon">{isOpen === index ? "−" : "+"}</span>
// 							</div>
// 							{isOpen === index && (
// 								<div className="research-details">
// 									<p>{research.description}</p>
// 								</div>
// 							)}
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			<div className="teaching-container">
// 				<h2>Teaching experience</h2>
// 				<div className="teaching-container_content">{/* Aquí iría el mismo patrón si quisieras agregar una lista desplegable para teaching */}</div>
// 			</div>
// 		</div>
// 	);
// };
const Experience = () => {
	// Estado para controlar si la descripción de una investigación está visible
	const [isOpen, setIsOpen] = useState(null); // Guarda el índice de la investigación abierta

	// Función para alternar la visibilidad de los detalles
	const toggleDetails = (index) => {
		setIsOpen(isOpen === index ? null : index); // Si ya está abierto, lo cierra, si no lo abre
	};

	return (
		<div>
			<div className="research-container">
				<h2>Research experience</h2>
				<div className="research-container_content">
					{[
						{
							title: "Ph.D. Thesis: A Comprehensive Framework and a Mechanistic Model of Self-Control in Clarion Cognitive Architecture. (In progress)",
							list: [
								"Identified cognitive mechanisms that underlie self-control as an intra-physical conflict and how these mechanisms may vary across different contexts using a rational and computational approach.",
								"Computationally modeled experimental situations on self-control application and downstream effects on later tasks, implementing symbolic and subsymbolic representations inside the CLARION cognitive framework using Python, testing formal mathematical models of cognitive processes. ",
								"Composed a literature review furthering the theoretical comprehension of self control through psychological and philosophical lenses.",
								"Formulated a rational theory of self-control explains conduct across diverse contexts. ",
							],
						},
						{
							title: "Graduate Research Assistantship",
							description: "Computational Modeling of Motivation and Cognition in CLARION Cognitive Architecture. (<em>2022</em>)",
						},
						{
							title: "ITS Fichas y Protocolos en Salud",
							description: "Intelligent Tutor System for learning the care protocol in the early detection of Gestational and Congenital Syphilis. (<em>2021-2022</em>)",
						},
						{
							title: "Metacognitive Judgements in MIDCA",
							description:
								"Formal Representation and Computational Implementation of Metacognitive Judgments Related to Goals Execution Time in MIDCA Cognitive Architecture. (<em>2019</em>)",
						},
						{
							title: "ECHO",
							description:
								"Autonomous system based on CARINA Cognitive Architecture for Frequently Asked Questions Systems, Open Question Assessment, and Translation from Guided Public Discussions to Sustainable Development Goals. (<em>2018-2019</em>)",
						},
						{
							title: "CARINA Cognitive Architecture",
							description: "Computational Modeling of Cognitive and Metacognitive processes for the Object level and Meta level of CARINA. (<em>2017-2019</em>)",
						},
						{
							title: "NUMBOT",
							description: "Educational Robotic Toy with visual-auditory recognition for the development of counting skills. (<em>2015</em>)",
						},
					].map((research, index) => (
						<div key={index} className="research">
							<div className="research-header" onClick={() => toggleDetails(index)}>
								<h4>{research.title}</h4>
								<span className="toggle-icon">{isOpen === index ? "−" : "+"}</span>
							</div>
							<div className={`research-details ${isOpen === index ? "show" : ""}`}>
								{research.list && (
									<ul>
										{research.list.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="teaching-container">
				<h2>Teaching experience</h2>
				<div className="teaching-container_content">{/* Aquí iría el mismo patrón si quisieras agregar una lista desplegable para teaching */}</div>
			</div>
		</div>
	);
};

export default Experience;
