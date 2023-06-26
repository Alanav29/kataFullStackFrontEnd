import axios from "axios";

import { moviesBaseEndpoint } from "./routesForConfigs";

const configGetAllMovies = () => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: moviesBaseEndpoint,
	};

	return config;
};

const getAllMovies = () => axios(configGetAllMovies());

export default getAllMovies;
