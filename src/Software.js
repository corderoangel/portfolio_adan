import "./Software.css";
import { FaLaptopCode } from "react-icons/fa6";

const Software = () => {
	// Función para evitar la navegación
	const handleClick = (event) => {
		event.preventDefault(); // Anula el comportamiento predeterminado del enlace
	};
	return (
		<div>
			<div className="skills-container">
				<h2>
					<FaLaptopCode /> Software Skills
				</h2>
				<div className="skills-container_icons" align="center">
					{/* tansformers, nvivo, spss */}
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=java" alt="Java" />
							<p>Java</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" />
							<p>JavaScript</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=cpp" alt="cpp" />
							<p>cpp</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=php" alt="php" />
							<p>php</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=python" alt="python" />
							<p>python</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=tensorflow" alt="tensorflow" />
							<p>tensorflow</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=pytorch" alt="pytorch" />
							<p>pytorch</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=nodejs" alt="nodejs" />
							<p>nodejs</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" />
							<p>mongodb</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
							<p>mysql</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=latex" alt="latex" />
							<p>latex</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=matlab" alt="matlab" />
							<p>matlab</p>
						</div>
					</a>
					<a href="https://skillicons.dev" onClick={handleClick}>
						<div className="icon-item">
							<img src="https://skillicons.dev/icons?i=r" alt="r" />
							<p>R</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Software;
