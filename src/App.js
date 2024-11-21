// src/App.js
import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe"; // Asegúrate de importar el componente
import Experience from "./Experience";
import Publications from "./Publications";
import Software from "./Software";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<AboutMe />} /> {/* Ruta para About Me */}
				<Route path="/experience" element={<Experience />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/software" element={<Software />} />
			</Routes>
		</>
	);
};

export default App;
