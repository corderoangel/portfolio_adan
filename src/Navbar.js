import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	// Estado para controlar la visibilidad del menú en pantallas pequeñas
	const [menuVisible, setMenuVisible] = useState(false);

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<nav className={`navbar ${menuVisible ? "responsive" : ""}`}>
			<div className="navbar-logo">
				<h1>Adan Gomez</h1>
				<p>Ph.D Candidate in Cognitive Sciences</p>
			</div>
			<ul className={`navbar-links ${menuVisible ? "show" : ""}`}>
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
			<div className="navbar-menu" onClick={toggleMenu}>
				<i className="fa-solid fa-bars"></i>
			</div>
		</nav>
	);
};

export default Navbar;
