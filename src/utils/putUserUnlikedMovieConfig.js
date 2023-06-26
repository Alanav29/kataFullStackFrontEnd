import axios from "axios";
import qs from "qs";
import { usersBaseEndpoint } from "./routesForConfigs";

const putUserUnlikedMovie = (userEmail, movieIndex, token) => {
	let data = qs.stringify({
		email: userEmail,
		unlikedMovie: movieIndex,
	});

	let config = {
		method: "put",
		maxBodyLength: Infinity,
		url: usersBaseEndpoint,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const putUserUnlikedMovieRequest = () => axios(config);

	return putUserUnlikedMovieRequest();
};

export default putUserUnlikedMovie;
