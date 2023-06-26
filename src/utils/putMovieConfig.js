import axios from "axios";
import qs from "qs";
import { moviesBaseEndpoint } from "./routesForConfigs";

const putMovie = (id, token, dataMovie) => {
	let data = qs.stringify({
		title: dataMovie.title,
		overview: dataMovie.overview,
		release_date: dataMovie.release_date,
		poster: dataMovie.poster,
		likes: dataMovie.likes,
	});

	let config = {
		method: "put",
		maxBodyLength: Infinity,
		url: `${moviesBaseEndpoint}${id}`,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const putMovieRequest = () => axios(config);

	return putMovieRequest();
};

export default putMovie;
