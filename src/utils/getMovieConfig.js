import axios from "axios";

const getMovie = (params) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `http://localhost:8000/api/movies/${params}`,
		headers: {},
	};

	const getMovieRequest = () => axios(config);

	return getMovieRequest();
};

export default getMovie;
