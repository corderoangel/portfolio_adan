import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	// Estado para controlar la visibilidad del menú en pantallas pequeñas
	const [menuVisible, setMenuVisible] = useState(false);

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	// const handleScrollToContact = () => {
	// 	const contactSection = document.getElementById("contact");
	// 	if (contactSection) {
	// 		contactSection.scrollIntoView({ behavior: "smooth" });
	// 	}
	// };

	return (
		<nav className={`navbar ${menuVisible ? "responsive" : ""}`}>
			<div className="navbar-logo">
				<h1>Adan Gomez</h1>
				<p>Ph.D Candidate in Cognitive Science</p>
			</div>
			<ul className={`navbar-links ${menuVisible ? "show" : ""}`}>
				<li>
					<Link onClick={toggleMenu} to="/">About Me</Link>
				</li>
				<li>
					<Link onClick={toggleMenu} to="/experience">Experience</Link>
				</li>
				<li>
					<Link onClick={toggleMenu} to="/publications">Publications</Link>
				</li>
				<li>
					<Link onClick={toggleMenu} to="/software">Software</Link>
				</li>
				{/* <li>
					<Link to="#" onClick={handleScrollToContact}>
						Contact
					</Link>
				</li> */}
			</ul>
			<div className="navbar-menu" onClick={toggleMenu}>
				<i className="fa-solid fa-bars"></i>
			</div>
		</nav>
	);
};

export default Navbar;
