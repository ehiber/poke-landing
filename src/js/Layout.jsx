import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import Home from "./views/home";
import { Pokemons } from "./views/Pokemons";
import { Pokemon } from "./views/Pokemon";
export const Layout = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pokemons" element={<Pokemons />} />
				<Route exact path="/pokemon/:idPokemon" element={<Pokemon />} />
				{/* <Route  ={() => <h1>Ud Esta Pelao 404</h1>} /> */}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
