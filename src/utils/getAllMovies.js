import qs from "qs";
import axios from "axios";

let data = qs.stringify({});

const configGetAllMovies = () => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: "http://localhost:8000/api/movies",
		data: data,
	};

	return config;
};

const getAllMovies = () => axios(configGetAllMovies());

export default getAllMovies;
