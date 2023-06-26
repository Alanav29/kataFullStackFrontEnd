import axios from "axios";
import qs from "qs";
import { moviesBaseEndpoint } from "./routesForConfigs";

const postMovie = (movieData, token) => {
	let data = qs.stringify({
		title: movieData.title,
		overview: movieData.overview,
		release_date: movieData.release_date,
		poster: movieData.poster,
	});

	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: moviesBaseEndpoint,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const postMovieRequest = () => axios(config);
	return postMovieRequest();
};

export default postMovie;
