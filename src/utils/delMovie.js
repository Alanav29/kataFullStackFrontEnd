import axios from "axios";

const delMovie = (token, idMovie) => {
	let config = {
		method: "delete",
		maxBodyLength: Infinity,
		url: `http://localhost:8000/api/movies/${idMovie}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const delMovieRequest = () => axios(config);
	return delMovieRequest();
};

export default delMovie;
