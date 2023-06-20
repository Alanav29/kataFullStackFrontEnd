import qs from "qs";
import axios from "axios";

let data = qs.stringify({});

const configGetAllMovies = (token) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: "http://localhost:8000/api/movies",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: data,
	};

	return config;
};

const getAllMovies = (token) => axios(configGetAllMovies(token));

export default getAllMovies;
