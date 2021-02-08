import React from "react";
import Character from "../Character/Character";
import "../CharacterList/CharacterList.css";

const CharacterList = ({ characters, searchValue }) => {
	const arr = characters !== "" ? characters.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase())) : characters;
	return (
		<div className="wrap">
			{arr.map((el, index) => {
				return (
					<Character key={index} url={el.url}>
						<p className="name">{el.name}</p>
					</Character>
				);
			})}
		</div>
	);
};

export default CharacterList;
