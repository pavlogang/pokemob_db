import React, { useState, useEffect } from "react";
import Service from "../../service/pokemonService";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CharacterPage/CharacterPage.css";

const PokemonService= new Service();

const CharacterPage = () => {
	
    	const [info, setInfo] = useState({});
		const history = useHistory();
		const params = useParams();
		const { id } = params;
	 
	  useEffect(() => {
			PokemonService.getInfoCharacter(id).then((res) => {
				setInfo(res);
			});
		}, []);
		
	
	return (
		<div className="container">
			<p className="button" onClick={() => history.goBack()}>
				Назад
			</p>

			<div className="wrap">
				<div className="wrap2">
					<div className="names">
						<div className="title">Имя персонажа:</div>
						{info.name}
					</div>
					<div className="row">
						<div className="title">Тип персонажа:</div>
						<div className="row">
							{info.types?.map((el) => {
								return (
									<p key={el.type.name} className="names">
										{el.type.name}
									</p>
								);
							})}
						</div>
					</div>
				</div>
				<div className="image">
					<img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
				</div>
			</div>

			<div className="column">
				<div className="title">Характеристики:</div>
				{info.stats?.map((el) => {
					return (
						<p key={el.stat.name}>
							Базовые навыки: {el.stat.name} - {el.base_stat},<br/> Усилие: {el.effort}
						</p>
					);
				})}
			</div>

			<div className="column">
				<div className="title">Список способностей:</div>
				{info.abilities?.map((el) => {
					const arr = el.ability.url.split("/");
					const abilityId = arr[arr.length - 2];
					return (
						<Link to={`/ability/${abilityId}`} key={el.ability.name}>
							{" "}
							{el.ability.name}{" "}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default CharacterPage;