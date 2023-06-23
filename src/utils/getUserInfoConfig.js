import axios from "axios";

const getUserInfo = (token) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: "http://localhost:8000/api/users/me",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const getUserInfoRequest = () => axios(config);

	return getUserInfoRequest();
};

export default getUserInfo;
