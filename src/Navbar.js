import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Asegúrate de agregar estilos si es necesario

const Navbar = () => {
	const mostrarOcultarMenu = () => {
		alert("¡Hola! Soy Adán Gomez, Ph.D Candidate in Cognitive Sciences.");
		// Aquí puedes agregar cualquier otra lógica que desees
	};

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<h1>Adan Gomez</h1>
				<p>Ph.D Candidate in Cognitive Sciences</p>
			</div>
			<ul className="navbar-links">
				<li>
					<Link to="/">About me</Link>
				</li>
				<li>
					<Link to="/experience">Experience</Link>
				</li>
				<li>
					<Link to="/grantsAndAwards">Grants and awards</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/contacto">Contact</Link>
				</li>
			</ul>
			<div class="navbar-menu" onClick={mostrarOcultarMenu}>
				<i class="fa-solid fa-bars"></i>
			</div>
		</nav>
	);
};

export default Navbar;
