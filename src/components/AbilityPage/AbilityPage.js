import React, { useState, useEffect } from "react";
import Service from "../../service/pokemonService";
import "../AbilityPage/AbilityPage.css";
import Spinner from './../Spinner/Spinner';
import { useParams, useHistory } from "react-router-dom";


const AbilityPage = () => {
	
	const PokemonService = new Service();
	const [ability, setAbility] = useState([]);
	const history = useHistory();
	
	const params = useParams();
	const { id } = params;
	
	
	useEffect(() => {
		PokemonService.getInfoAbility(id).then((res) => {
			setAbility(res);
		})
	})
	
	if (ability.length <= 0) {
		return <Spinner />;
	}

	
	return (
		 <>
            <div className="container">
                <p className="button" onClick={() => history.goBack()}>Назад</p>
                <h1>Описание способностей:</h1>
                <div>
                    {
                        ability.effect_entries?.map((el) => {
                            return (
                                el.language.name === 'en' ? <p key={el.effect}>{el.effect}</p> : null
                            )
                        })
                    }
                </div>
            </div>
            <div className="container">
                <div>
                    {
                        ability.effect_entries?.map((el) => {
                            return (
                                el.language.name === 'en' ? <p key={el.effect}>{el.short_effect}</p> : null
                            )
                        })
                    }
                </div>
            </div>
        </>
	)
}

export default AbilityPage;