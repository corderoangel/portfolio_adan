// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
// import Inicio from "./Inicio"; // Crea este componente
// import Proyectos from "./Proyectos"; // Crea este componente
// import Contacto from "./Contacto"; // Crea este componente
import AboutMe from "./AboutMe"; // Asegúrate de importar el componente

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<AboutMe />} /> {/* Ruta para About Me */}
				{/* <Route path="/proyectos" component={Proyectos} />
				<Route path="/contacto" component={Contacto} /> */}
			</Routes>
		</Router>
	);
};

export default App;
