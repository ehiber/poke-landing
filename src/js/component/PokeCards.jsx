import React, { useState, useEffect } from "react";
import { PokeCard } from "./PokeCard";

export const PokeCards = () => {
	const [addPokemonName, setAddPokemonName] = useState("");
	const [searchPokemonName, setSearchPokemonName] = useState("");
	const [pokemons, setPokemons] = useState([]);
	const [pokemonsFilteredState, setPokemonsFilteredState] = useState([]);

	useEffect(() => {
		const getPokemons = async () => {
			let response = await fetch(
				"https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
			);
			let data = await response.json();
			setPokemons(data.results);
		};

		// CON THEN
		// const getPokemons = () => {
		// 	fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
		// 		.then((response) => {
		// 			return response.json();
		// 		})
		// 		.then((data) => {
		// 			console.log(data);
		// 		});
		// };

		getPokemons();
	}, []);

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
					? pokemonsFilteredState.map((pokemon, index) => {
							return (
								<PokeCard
									key={`${pokemon.name}${index}`}
									title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
										1
									)}`}
									colSpacing="col-4"
								/>
							);
					  })
					: pokemons.map((pokemon, index) => {
							return (
								<PokeCard
									key={`${pokemon.name}${index}`}
									title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
										1
									)}`}
									colSpacing="col-4"
								/>
							);
					  })}
			</div>
		</div>
	);
};
