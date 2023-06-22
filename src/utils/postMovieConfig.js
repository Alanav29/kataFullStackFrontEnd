import axios from "axios";
import qs from "qs";

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
		url: "http://localhost:8000/api/movies",
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
