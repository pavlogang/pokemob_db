import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Service from './service/pokemonService';
import Container from "./components/Container/Container";
import SearchPanel from './components/SearchPanel/SearchPanel';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterPage from './components/CharacterPage/CharacterPage';




const App = () => {
	const PokemonService = new Service();
	// fetch("https://pokeapi.co/api/v2/pokemon?offset=30&limit=30")
	// 	.then((response) => {
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		console.log(data);
	// 	});
	
	const [characters, setCharacter] = useState([]);
	
	
	 useEffect(() => {
			PokemonService.getAllCharacters().then((res) => {
				setCharacter(res);
			});
		}, []);
	
	return (
		<Switch>
			<Route path="/character/:id" component={CharacterPage} />
			<Route
				render={() => (
					<>
						<Container>
							<SearchPanel/>
							<CharacterList characters={characters} />
						</Container>
					</>
				)}
			/>
		</Switch>
	);
		
}

export default App;