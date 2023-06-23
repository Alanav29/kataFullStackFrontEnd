import axios from "axios";
import qs from "qs";

const putUserLikedMovie = (userEmail, movieId, token) => {
	let data = qs.stringify({
		email: userEmail,
		likedMovie: movieId,
	});

	let config = {
		method: "put",
		maxBodyLength: Infinity,
		url: "http://localhost:8000/api/users/likedMovies",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const putUserLikedMovieRequest = () => axios(config);

	return putUserLikedMovieRequest();
};

export default putUserLikedMovie;
