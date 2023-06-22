import axios from "axios";

const configGetAllMovies = () => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: "http://localhost:8000/api/movies",
	};

	return config;
};

const getAllMovies = () => axios(configGetAllMovies());

export default getAllMovies;
