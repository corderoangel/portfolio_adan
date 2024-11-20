import React, { useState } from "react";
import "./Experience.css";
import { MdScreenSearchDesktop } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaAward } from "react-icons/fa";

const Experience = () => {
	// Estado separado para controlar las secciones de investigación y enseñanza
	const [openResearchIndex, setOpenResearchIndex] = useState(null);
	const [openTeachIndex, setOpenTeachIndex] = useState(null);

	// Función para alternar los detalles de la sección de investigación
	const toggleResearchDetails = (index) => {
		setOpenResearchIndex(openResearchIndex === index ? null : index);
	};

	// Función para alternar los detalles de la sección de enseñanza
	const toggleTeachDetails = (index) => {
		setOpenTeachIndex(openTeachIndex === index ? null : index);
	};

	return (
		<div>
			<div className="research-container">
				<h2>
					<MdScreenSearchDesktop /> Research Experience
				</h2>
				<div className="research-container_content">
					{[
						{
							title: "Ph.D. Thesis: ",
							subtitle: "A Comprehensive Framework and a Mechanistic Model of Self-Control in Clarion Cognitive Architecture (In progress)",
							list: [
								"Identified cognitive mechanisms that underlie self-control as an intra-physical conflict and how these mechanisms may vary across different contexts using a rational and computational approach.",
								"Computationally modeled experimental situations on self-control application and downstream effects on later tasks, implementing symbolic and subsymbolic representations inside the CLARION cognitive framework using Python, testing formal mathematical models of cognitive processes. ",
								"Composed a literature review furthering the theoretical comprehension of self control through psychological and philosophical lenses.",
								"Formulated a rational theory of self-control explains conduct across diverse contexts. ",
							],
						},
						{
							title: "Graduate Research Assistantship: ",
							subtitle: "Computational Modeling of Motivation and Cognition in CLARION Cognitive Architecture (2022)",
							list: [
								"Systematically analyzed scientific literature on self-control as an intra-physical conflict examining implicit and explicit information interaction patterns underlying human behavior.",
								"Employed machine learning methods to model diverse human working memory tasks and their interaction with motivational aspects across two simulations built within the CLARION cognitive architecture.",
								"Leveraged statistical techniques to analyze simulation data produced by the two CLARION-based models.",
							],
						},
						{
							title: "ITS Fichas y Protocolos en Salud: ",
							subtitle: "Intelligent Tutor System for learning the care protocol in the early detection of Gestational and Congenital Syphilis (2021-2022)",
							list: [
								"Engineered a case-based reasoning system and a recommender system for learning resources to personalize pedagogical strategies accounting for higher education students' learning styles and academic performance.",
								"Authored a scientific publication for an education journal detailing the findings from contrasting the two systems in light of student academic performance.",
							],
						},
						{
							title: "Metacognitive Judgements in MIDCA:",
							subtitle: " Formal Representation and Computational Implementation of Metacognitive Judgments Related to Goals Execution Time in MIDCA Cognitive Architecture (2019)",
							list: [
								"Designed and implemented predictive models for goal execution times within the MIDCA cognitive architecture to enable autonomous agents to generate accurate prospective, concurrent, and retrospective metacognitive appraisals.",
								"Developed goal-oriented software agents capable of estimating completion times for specific tasks and goals in order to improve adaptations and time management using Python.",
							],
						},
						{
							title: "ECHO: ",
							subtitle:
								"Autonomous system based on CARINA Cognitive Architecture for Frequently Asked Questions Systems, Open Question Assessment, and Translation from Guided Public Discussions to Sustainable Development Goals (2018-2019)",
							list: [
								"Engineered the knowledge base of the system employing diverse knowledge representation techniques, including semantic networks and ontologies.",
								"Composed a methodical review of the various computational approaches leveraged by the system.",
							],
						},
						{
							title: "CARINA Cognitive Architecture: ",
							subtitle: "Computational Modeling of Cognitive and Metacognitive processes for the Object level and Meta level of CARINA (2017-2019)",
							list: [
								"Co-designed the cognitive architecture and information processing mechanisms for CARINA, an artificial cognitive framework capable of metacognitive control and introspective reasoning about its cognitive processes.",
								"Implemented formal representations of cognitive models and introspective reasoning traces to enable CARINA agents to monitor and regulate their cognition.",
								"Developed techniques for specifying and validating algorithmic knowledge profiles to empower CARINA agents to form metacognitive expectations about perceptual processes and cognitive functions.",
								"Researched methods for the meta-modeling of pedagogical strategies to allow CARINA-based intelligent tutoring systems to select appropriate teaching approaches tailored to individual students.",
							],
						},
						{
							title: "NUMBOT:",
							subtitle: "Educational Robotic Toy with visual-auditory recognition for the development of counting skills (2015)",
							list: [
								"Designed and led a mixed methods study utilizing interviews, verbal protocols, and quasi-experimental research to compare numerical knowledge acquisition between preschool students using a robot-based learning environment versus traditional materials.",
								"Mentored young investigators in experimental research methodology, overseeing the design of pre/post assessments, data analysis, and reporting of findings related to the impact of an innovative robot learning system.",
								"Spearheaded the conceptualization, design, programming, and testing of a novel robot learning companion with gesture/voice recognition capabilities to develop early math skills among preschool-aged children.",
							],
						},
					].map((research, index) => (
						<div key={index} className="research">
							<div className="research-header" onClick={() => toggleResearchDetails(index)}>
								<h4>
									{research.title} <span>{research.subtitle}</span>
								</h4>
								<span className="toggle-icon">{openResearchIndex === index ? "−" : "+"}</span>
							</div>
							<div className={`research-details ${openResearchIndex === index ? "show" : ""}`}>
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
				<h2>
					<GiTeacher /> Teaching Experience
				</h2>
				<div className="teaching-container_content">
					{[
						{
							title: "Full-Time Faculty Member:",
							subtitle: "University of Cordoba, Montería, Colombia - Educational Informatics Department (2015-2024)",
							list: [
								"Introduction to Artificial Intelligence (undergraduate level)",
								"Cognition and Computation (undergraduate level)",
								"Cognitive Informatics (undergraduate level)",
								"Computer Science Teaching Computer Didactics (undergraduate level)",
								"High Impact Scientific Paper Writing Course (graduate level)",
								"Education, Coexistence and Society (graduate level)",
							],
						},
						{
							title: "Half-Time Lecturer:",
							subtitle: "University of Cordoba, Montería, Colombia - Educational Informatics Department – Computer Science Department (2022)",
							list: [
								"Basic Computing (undergraduate level)",
								"Introduction to Data Structures (undergraduate level)",
								"Algorithms (undergraduate level)",
								"Object-Oriented Design Programming (undergraduate level)",
								"Computer Architecture (undergraduate level)",
								"Programming Languages (undergraduate level)",
								"Software Design and Implementation (undergraduate level)",
							],
						},
						{
							title: "Full-Time Computer Science Teacher:",
							subtitle: "Institución Educativa Cristóbal Colón, Montería, Colombia (2021-2022)",
							list: ["Computer Science (high and middle school level)"],
						},
						{
							title: "Full-Time Computer Science Teacher:",
							subtitle: "Colegio Militar Almirante Colón, Montería, Colombia (1995 - 1998)",
							list: ["Computer Science (elementary school and kindergarten level)"],
						},
					].map((teach, index) => (
						<div key={index} className="teach">
							<div className="teach-header" onClick={() => toggleTeachDetails(index)}>
								<h4>
									{teach.title} <span>{teach.subtitle}</span>
								</h4>
								<span className="toggle-icon">{openTeachIndex === index ? "−" : "+"}</span>
							</div>
							<div className={`teach-details ${openTeachIndex === index ? "show" : ""}`}>
								<p>Courses taught:</p>
								{teach.list && (
									<ul>
										{teach.list.map((item, i) => (
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
				<h2>
					<FaAward /> Grants and Awards
				</h2>
				<div className="teaching-container_content">
					{[
						{
							title: "Fulbright Foreign Student Award:",
							subtitle: "Rensselaer Polytechnic Institute, Troy, NY (2022)",
						},
						{
							title: "Institutional Exaltation of Associate Researcher Category:",
							subtitle: "Universidad de Córdoba, Montería, Colombia (2022)",
						},
						{
							title: "Awarded the Fulbright Scholarship - Cohort 2021:",
							subtitle: "Ministry of Science, Technology and Innovation of Colombia, Bogotá, Colombia (2020)",
						},
						{
							title: "Best Paper Award:",
							subtitle: "ISA 2020 The 5th International Conference on Intelligent, Interactive Systems and Applications. Shanghai, China (2020)",
						},
						{
							title: "Short- Term Scholarship:",
							subtitle: "Wright State University, Dayton, USA (2019)",
						},
						{
							title: "Institutional Exaltation of Junior Researcher Category:",
							subtitle: "Universidad de Córdoba, Montería, Colombia (2019)",
						},
						{
							title: "Relevance and Impact of the Research Project:",
							subtitle: "MILSET AMLAT, Medellín, Colombia (2014)",
						},
						{
							title: "Colombian representation in the Feira de Ciência e Tecnologia Sul do Maranhão:",
							subtitle: "Fundação Escola Técnica Liberato Salzano Vieira da Cunha, Novo Hamburgo, Brazil (2013)",
						},
						{
							title: "Colombian representation in the International Science and Technology Exhibition MOSTRATEC 2013:",
							subtitle: "Fundación Red Colombiana de Semilleros de Investigación RedColsi, Bucaramanga, Colombia (2012)",
						},
						{
							title: "Winner III Classroom Projects Competition:",
							subtitle: "Fundación Telefónica, Montería, Colombia (2012)",
						},
						{
							title: "Award stimulus for Teachers and Teaching Directors:",
							subtitle: "Municipal Education Secretariat. Montería, Colombia (2010)",
						},
					].map((teach, index) => (
						<div key={index} className="teach">
							<div className="grants_awards_header">
								<h4>
									{teach.title} <span>{teach.subtitle}</span>
								</h4>
								<span className="toggle-icon"></span>
							</div>
							<div>
								{teach.list && (
									<ul>
										{teach.list.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
