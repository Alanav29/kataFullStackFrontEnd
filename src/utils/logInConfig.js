import axios from "axios";
import qs from "qs";

const signIn = (email, password) => {
	let data = qs.stringify({
		email: `${email}`,
		password: `${password}`,
	});

	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "http://localhost:8000/api/users/login",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const signInRequest = () => axios(config);

	return signInRequest();
};

export default signIn;
