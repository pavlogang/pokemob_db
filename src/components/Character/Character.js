import React from "react";
import "../Character/Character.css";
import { Link } from "react-router-dom";

const Character = ({ children, url }) => {
	const arr = url.split("/");
	const id = arr[arr.length - 2];

	return (
		<Link to={`/character/${id}`} className="Link">
			<div className="card">
				{children}
				<img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
			</div>
		</Link>
	);
};

export default Character;
