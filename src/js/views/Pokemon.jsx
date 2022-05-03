import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export const Pokemon = () => {
	let navigate = useNavigate();
	const { idPokemon } = useParams();
	console.log(navigate());

	return (
		<>
			<h1>SOY EL ID DEL POKEMON {idPokemon}</h1>
			<Link to="/pokemons"> Go Back </Link>
			<Button onClick={() => navigate("/pokemons")}>Go Back</Button>
		</>
	);
};
