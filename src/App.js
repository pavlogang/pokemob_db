import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PokemonService from './service/pokemonService';
import Container from "./components/Container/Container";
import SearchPanel from './components/SearchPanel/SearchPanel';
import CharacterList from './components/CharacterList/CharacterList';



const PokemonServic = new PokemonService();

const App = () => {
	// fetch("https://pokeapi.co/api/v2/pokemon?offset=30&limit=30")
	// 	.then((response) => {
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		console.log(data);
	// 	});
	
	const [characters, setCharacter] = useState([]);
	
	
	 useEffect(() => {
			PokemonServic.getAllCharacters().then((res) => {
				setCharacter(res)
			})
		}, []);
	
	return (
				<Container>
					<SearchPanel/>
					<CharacterList characters={characters} />
				</Container>
	);
		
}

export default App;