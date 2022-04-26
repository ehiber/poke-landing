import React, { useState, useEffect } from "react";
import { PokeCard } from "./PokeCard";

export const PokeCards = () => {
	const [addPokemonName, setAddPokemonName] = useState("");
	const [searchPokemonName, setSearchPokemonName] = useState("");
	const [pokemonsNames, setPokemonsNames] = useState([
		"Pikachu",
		"Charmander",
		"Bulvasour",
	]);
	const [pokemonsFilteredState, setPokemonsFilteredState] = useState([]);

	useEffect(() => {
		const handleSearch = () => {
			let pokemonsNamesCopy = [...pokemonsNames];
			let pokemonsFiltered = pokemonsNamesCopy.filter((pokemon) => {
				return pokemon
					.toLowerCase()
					.includes(searchPokemonName.toLowerCase());
			});
			setPokemonsFilteredState(pokemonsFiltered);
		};
		if (searchPokemonName !== "") {
			handleSearch();
		} else setPokemonsFilteredState([]);
	}, [searchPokemonName]);

	const handlePokemons = (e) => {
		if (e.key === "Enter") {
			setPokemonsNames([...pokemonsNames, addPokemonName]);
		}
	};
	return (
		<div className="container-fluid">
			<input
				value={addPokemonName}
				onChange={(e) => setAddPokemonName(e.target.value)}
				onKeyDown={(e) => handlePokemons(e)}
				type="text"
				placeholder="Add a new pokemon"
			/>

			<input
				value={searchPokemonName}
				onChange={(e) => setSearchPokemonName(e.target.value)}
				type="text"
				placeholder="Search a pokemon"
			/>

			<div className="row">
				{pokemonsFilteredState.length > 0
					? pokemonsFilteredState.map((pokemonName, index) => {
							return (
								<PokeCard
									key={`${pokemonName}${index}`}
									title={pokemonName}
									colSpacing="col-4"
								/>
							);
					  })
					: pokemonsNames.map((pokemonName, index) => {
							return (
								<PokeCard
									key={`${pokemonName}${index}`}
									title={pokemonName}
									colSpacing="col-4"
								/>
							);
					  })}
			</div>
		</div>
	);
};
