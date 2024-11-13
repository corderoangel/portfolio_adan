// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe"; // Asegúrate de importar el componente
import Experience from "./Experience";
import Publications from "./Publications";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<AboutMe />} /> {/* Ruta para About Me */}
				<Route path="/experience" element={<Experience />} />
				<Route path="/publications" element={<Publications />} />
			</Routes>
		</Router>
	);
};

export default App;
