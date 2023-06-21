import axios from "axios";
import qs from "qs";

const postUser = (user) => {
	let data = qs.stringify({
		name: user.name,
		email: user.email,
		password: user.password,
	});

	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "http://localhost:8000/api/users/",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const postUserRequest = () => axios(config);

	return postUserRequest();
};

export default postUser;
