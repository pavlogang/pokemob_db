import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Service from './service/pokemonService';
import Container from "./components/Container/Container";
import SearchPanel from './components/SearchPanel/SearchPanel';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterPage from './components/CharacterPage/CharacterPage';
import AbilityPage from './components/AbilityPage/AbilityPage';
import Spinner from "./components/Spinner/Spinner";




const App = () => {
	const PokemonService = new Service();
	
	const [characters, setCharacter] = useState([]);
	const [value, setValue] = useState("");
	
	 useEffect(() => {
			PokemonService.getAllCharacters().then((res) => {
				setCharacter(res);
			});
		}, []);
		
		if (Object.keys(characters).length == 0) {
			return <Spinner />;
		}
		
	const updateInputValue = (event) => {
		setValue(event.target.value);
	};
	
	return (
		<Switch>
			<Route path="/ability/:id" component={AbilityPage} />
			<Route path="/character/:id" component={CharacterPage} />
			<Route
				render={() => (
					<>
						<Container>
							<SearchPanel value={value} onChange={updateInputValue} />
							<CharacterList searchValue={value} characters={characters} />
						</Container>
					</>
				)}
			/>
		</Switch>
	);
		
}

export default App;