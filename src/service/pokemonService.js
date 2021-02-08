export default class PokemonService {
	constructor() {
		this._apiBase = "https://pokeapi.co/api/v2/";
	}

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
		}
		return await res.json();
	};

	getAllCharacters = async () => {
		const res = await this.getResource(`pokemon?offset=5&limit=30`);
		// console.log(res.results);
		return res.results;
	};

	getInfoCharacter = async (id) => {
		const res = await this.getResource(`pokemon/${id}`);
		return res;
	};
	
	getInfoAbility = async (id) => {
		const res = await this.getResource(`ability/${id}`);
		return res;
	}
}