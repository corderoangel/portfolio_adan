import React from "react";
import "./Experience.css";

const Experience = () => {
	return (
		<div>
			<div className="research-container">
				<h2>Research experience</h2>
				<div className="research-container_content">
					<div className="research">
						<h3>Ph.D. Thesis</h3>
						<p>A Comprehensive Framework and a Mechanistic Model of Self-Control in Clarion Cognitive Architecture. Advisor: Ron Sun, Rensselaer Polytechnic Institute, Troy, NY.</p>
						<p>
							<em>In progress</em>
						</p>
					</div>
					<div className="research">
						<h3>Graduate Research Assistantship</h3>
						<p>Computational Modeling of Motivation and Cognition in CLARION Cognitive Architecture. Advisor: Ron Sun, Rensselaer Polytechnic Institute, Troy, NY.</p>
						<p>
							<em>2022</em>
						</p>
					</div>
					<div className="research">
						<h3>ITS Fichas y Protocolos en Salud</h3>
						<p>
							Intelligent Tutor System for learning the care protocol in the early detection of Gestational and Congenital Syphilis. Sponsor: Universidad de Córdoba, Montería, Colombia.
						</p>
						<p>
							<em>2021-2022</em>
						</p>
					</div>
					<div className="research">
						<h3>Metacognitive Judgements in MIDCA</h3>
						<p>Formal Representation and Computational Implementation of Metacognitive Judgments Related to Goals Execution Time in MIDCA Cognitive Architecture.</p>
						<p>
							<em>2019</em>
						</p>
					</div>
					<div className="research">
						<h3>ECHO</h3>
						<p>
							Autonomous system based on CARINA Cognitive Architecture for Frequently Asked Questions Systems, Open Question Assessment, and Translation from Guided Public Discussions to
							Sustainable Development Goals.
						</p>
						<p>
							<em>2018-2019</em>
						</p>
					</div>
					<div className="research">
						<h3>CARINA Cognitive Architecture</h3>
						<p>Computational Modeling of Cognitive and Metacognitive processes for the Object level and Meta level of CARINA.</p>
						<p>
							<em>2017-2019</em>
						</p>
					</div>
					<div className="research">
						<h3>NUMBOT</h3>
						<p>Educational Robotic Toy with visual-auditory recognition for the development of counting skills.</p>
						<p>
							<em>2015</em>
						</p>
					</div>
				</div>

				{/* <h2>GRANTS AND AWARDS</h2>
				<div class="skill">
					<p>
						Hanna Lavalle, M. I., Gomez Salgado, A. A., & Marquez Garcia, L. A. (2024). Sistema tutor inteligente basado en la personalización del aprendizaje para la enseñanza de
						protocolos de atención en salud. Revista Colombiana de Tecnologias de Avanzada (RCTA), 2(44), 45–54.
						<a href="https://doi.org/10.24054/rcta.v2i44.2866">https://doi.org/10.24054/rcta.v2i44.2866</a>
					</p>
				</div>
				<div class="skill">
					<p>Gomez, A. A., & Sun, R. (2024). A “Rational” Framework for Self-Control. In Proceedings of the Annual Meeting of the Cognitive Science Society (Vol. 46).</p>
				</div>
				<div class="skill">
					<p>
						Gomez, A., & Marquez, L. (2021). Representation of the Problem-Solving Process of the Tower of Hanoi using Fuzzy Cognitive Maps. 2021 IEEE 20th International Conference on
						Cognitive Informatics & Cognitive Computing (ICCI* CC), 147-152.
						<a href="https://doi.org/10.1109/ICCICC53683.2021.9811321">https://doi.org/10.1109/ICCICC53683.2021.9811321</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Marquez, L., Zapa, H., & Gomez, A. (2021). Design of a Cognitive Control Mechanism for a Goal-based Executive Function of a Cognitive System. Proceedings of the Ninth Goal
						Reasoning Workshop. <br />
						<a href="https://bit.ly/3ULb0UW">https://bit.ly/3ULb0UW</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Gomez, A. (2021). Design of a Self-Control Mechanism for a GDA-Based Tutor Module of an Intelligent Tutoring System. Proceedings of the Ninth Goal Reasoning Workshop. <br />
						<a href="https://bit.ly/4bDlmMK">https://bit.ly/4bDlmMK</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Gomez, A., Marquez, L., Zapa, H., & Florez, M. (2021). GDA-Based Tutor Module of an Intelligent Tutoring System for the Personalization of Pedagogic Strategies. Emerging Trends
						in Intelligent and Interactive Systems and Applications. Proceedings of the 5th International Conference on Intelligent, Interactive Systems and Applications (IISA2020),
						742-750. Springer International Publishing. <br />
						<a href="https://doi.org/10.1007/978-3-030-63784-2_92">https://doi.org/10.1007/978-3-030-63784-2_92</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Cogollo, Y., Salgado, A., & Garcia, L. (2020). Intelligent Tutoring Systems and Planning Techniques: A Systematic Review. Acta ScientiÆ InformaticÆ, 4(4), 6-6. <br />
						<a href="https://bit.ly/3wkqiWy">https://bit.ly/3wkqiWy</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Espinosa-Lopez, A., Gomez-Salgado, A., & Lorduy-Arellano, D. (2020). CARINA-based Cognitive Agent for Factoid Wh-Questions Generation in EFL. International Journal on Advanced
						Science, Engineering, and Information Technology. 10(5), 1852-1859. <br />
						<a href="https://doi.org/10.18517/ijaseit.10.5.10138">https://doi.org/10.18517/ijaseit.10.5.10138</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Galeano, R., Salgado, A., & Arellano, D. (2020). Metacognitive Strategies and Learning Quality: A Systematic Mapping Study. International Association for Development of the
						Information Society 48. <br />
						<a href="https://bit.ly/48lzneY">https://bit.ly/48lzneY</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Gomez, A., Florez, E., & Marquez, L. (2019). Design of the Tutor Module for an Intelligent Tutoring System (ITS) Based on Science Teachers’ Pedagogical Content Knowledge (PCK).
						International Congress on Education and Technology in Sciences 141-157. <br />
						<a href="https://doi.org/10.1007/978-3-030-45344-2_12">https://doi.org/10.1007/978-3-030-45344-2_12</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Florez, Y., Jerónimo, J., Castillo, M., & Gomez, A. (2019). User-Based Cognitive Model in NGOMS-L for the Towers of Hanoi Algorithm in the Metacognitive Architecture CARINA.
						International Conference on Advances in Emerging Trends and Technologies. 473-484. <br />
						<a href="https://doi.org/10.1007/978-3-030-32022-5_44">https://doi.org/10.1007/978-3-030-32022-5_44</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Garcia, L., & Salgado, A. (2019). ANN-Based Model for Simple Grammatical Cases Teaching in Spanish Language. International Conference on Advances in Emerging Trends and
						Technologies. 442-453. <br />
						<a href="https://doi.org/10.1007/978-3-030-32022-5_41">https://doi.org/10.1007/978-3-030-32022-5_41</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Caro, M., Josyula, D., Madera, D., Kennedy, C., & Gomez, A. (2019). The CARINA Metacognitive Architecture. International Journal of Cognitive Informatics and Natural
						Intelligence (IJCINI), 13(4), 71-90. <br />
						<a href="https://doi.org/10.4018/IJCINI.2019100104">https://doi.org/10.4018/IJCINI.2019100104</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Nisperuza, E., & Salgado, A. (2019). Science Teachers Perceptions on their Pedagogical Content Knowledge (PCK). In CISETC 2019 International Congress on Educational and
						Technology in Sciences. <br />
						<a href="https://ceur-ws.org/Vol-2555/paper26.pdf ">https://ceur-ws.org/Vol-2555/paper26.pdf</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Lopez, A., Salgado, A., & Calao, Y. (2018). Natural Language for Factoid- WH in English as a Foreign Language. Acta ScientiÆ InformaticÆ, 2(2), 5-5. <br />
						<a href="https://bit.ly/48n3hiW">https://bit.ly/48n3hiW</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Gomez, A., Caro, M., Solano, A., & Vega, Y. (2018). Trends of educational informatics in Latin America. International Journal of Software Science and Computational Intelligence
						(IJSSCI), 10(1), 80-87. <br />
						<a href="https://doi.org/10.4018/IJSSCI.2018010106">https://doi.org/10.4018/IJSSCI.2018010106</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Madera-Doval, D., Caro-Piñeres, M., Gomez-Salgado, A., Cardozo-Soto, A., & Jimenez-Builes, J. (2018). Design of metacognitive expectations of cognitive functions through
						ontological representations. Dyna, 85(206), 194-201. <br />
						<a href="http://dx.doi.org/10.15446/dyna.v85n206.7168z">http://dx.doi.org/10.15446/dyna.v85n206.7168z</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Caro, M., Josvula, D., Gomez, A., & Kennedy, C. (2018, July). Introduction to the CARINA metacognitive architecture. 2018 IEEE 17th International Conference on Cognitive
						Informatics & Cognitive Computing (ICCI* CC), 530-540. <br />
						<a href="https://doi.org/10.1109/IEEE.10.1109/ICCI-CC.2018.8482051">https://doi.org/10.1109/IEEE.10.1109/ICCI-CC.2018.8482051</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Madrigal, M., Salgado, A., & Piñeres, M. (2018). Validación del proceso basado en M++ de las Trazas de Razonamiento Introspectivas de la función cognitiva percepción de la
						arquitectura metacognitiva CARINA. Teknos Revista Científica, 18(2), 54-62. <br />
						<a href="https://doi.org/10.24054/rcta.v2i44.2866">https://doi.org/10.24054/rcta.v2i44.2866</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Lopez, A., Calao, Y., Salgado, A., & Piñeres, M. (2018). Validación de un modelo cognitivo basado en M++ para la generación de preguntas Factoid-Wh. Teknos Revista Científica,
						18(2), 11-20.
						<br />
						<a href="https://doi.org/10.25044/25392190.972">https://doi.org/10.25044/25392190.972</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Gomez, A., & Caro, M. (2018) Meta-Modeling Process of Pedagogical Strategies in Intelligent Tutoring Systems. 2018 IEEE 17th International Conference on Cognitive Informatics &
						Cognitive Computing (ICCI* CC). IEEE, 2018. <br />
						<a href="https://doi.org/10.1109/ICCI-CC.2018.8482046">https://doi.org/10.1109/ICCI-CC.2018.8482046</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Florez, M., Gomez, A., & Caro, M. (2018). Formal Representation of Introspective Reasoning Trace of a Cognitive Function in CARINA. 2018 IEEE 17th International Conference on
						Cognitive Informatics & Cognitive Computing (ICCI* CC). IEEE, 2018. <br />
						<a href="https://doi.org/10.1109/ICCI-CC.2018.8482053">https://doi.org/10.1109/ICCI-CC.2018.8482053</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Jeronimo, A., Caro, M., & Gomez, A. (2018) Formal Specification of cognitive models in CARINA. 2018 IEEE 17th International Conference on Cognitive Informatics & Cognitive
						Computing (ICCI*CC). IEEE, 2018. <br />
						<a href="https://doi.org/10.1109/ICCI-CC.2018.8482062">https://doi.org/10.1109/ICCI-CC.2018.8482062</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Olier, A., Gomez, A., & Caro, M. Cognitive Modeling Process in Metacognitive Architecture CARINA. 2018 IEEE 17th International Conference on Cognitive Informatics & Cognitive
						Computing (ICCI* CC). IEEE, 2018. <br />
						<a href="Https://doi.org/10.1109/ICCI-CC.2018.848209">Https://doi.org/10.1109/ICCI-CC.2018.848209</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Caro, M., Gomez, A., & Giraldo, J. (2017). Algorithmic knowledge profiles for introspective monitoring in artificial cognitive agents. 2017 IEEE 16th International Conference
						on Cognitive Informatics & Cognitive Computing (ICCI* CC). IEEE, 2017. <br />
						<a href="https://doi.org/10.1109/ICCI-CC.2017.8109792">https://doi.org/10.1109/ICCI-CC.2017.8109792</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Quiceno, A., Salgado, A., & Caro, M. (2017). Design and Implementation of a Teaching Tool for Introduction to object-oriented programming. IEEE Latin America Transactions,
						15(1), 97-102. <br />
						<a href="https://doi.org/10.1109/TLA.2017.7827913">https://doi.org/10.1109/TLA.2017.7827913</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Bernal, D., Miranda, R., Gomez, A., & Caro, M. (2017). Sinopsis de metodologías y modelos de software educativo. Acta ScientiÆ InformaticÆ, 1(1). <br />
						<a href="https://bit.ly/3I5ouDz">https://bit.ly/3I5ouDz</a>
					</p>
				</div>
				<div class="skill">
					<p>
						Soto, A., Madera, D., Gomez, A., & Caro, M. (2017). An overview about metacognitive expectations in a cognitive agent. Acta ScientiÆ InformaticÆ, 1(1). <br />
						<a href="https://bit.ly/3wixG4X">https://bit.ly/3wixG4X</a>
					</p>
				</div> */}
			</div>

			<div class="teaching-container">
				<h2>Teaching experience</h2>
				<div class="teaching-container_content">
					<div class="teaching">
						<h3>Full-Time Faculty Member</h3>
						<p>University of Cordoba, Montería, Colombia.</p>
						<p>Educational Informatics Department.</p>
						<p>
							<em>2015-2024</em>
						</p>
					</div>
					<div class="teaching">
						<h3>Half-Time Lecturer</h3>
						<p>University of Cordoba, Montería, Colombia.</p>
						<p>Educational Informatics Department – Computer Science Department.</p>
						<p>
							<em>2003 - 2014</em>
						</p>
					</div>
					<div class="teaching">
						<h3>Full-Time Computer Science Teacher</h3>
						<p>Institución Educativa Cristóbal Colón, Montería, Colombia.</p>
						<p>
							<em>1999-2014</em>
						</p>
					</div>
					<div class="teaching">
						<h3>Full-Time Computer Science Teacher</h3>
						<p>Colegio Militar Almirante Colón, Montería, Colombia.</p>
						<p>
							<em>1995 - 1998</em>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
