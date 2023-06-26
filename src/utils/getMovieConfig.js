import axios from "axios";
import { moviesBaseEndpoint } from "./routesForConfigs";

const getMovie = (params) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${moviesBaseEndpoint}${params}`,
	};

	const getMovieRequest = () => axios(config);

	return getMovieRequest();
};

export default getMovie;
