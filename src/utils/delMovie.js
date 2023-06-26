import axios from "axios";
import { moviesBaseEndpoint } from "./routesForConfigs";

const delMovie = (token, idMovie) => {
	let config = {
		method: "delete",
		maxBodyLength: Infinity,
		url: `${moviesBaseEndpoint}${idMovie}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const delMovieRequest = () => axios(config);
	return delMovieRequest();
};

export default delMovie;
