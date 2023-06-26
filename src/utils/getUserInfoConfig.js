import axios from "axios";
import { userInfoEndpoint } from "./routesForConfigs";

const getUserInfo = (token) => {
	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: userInfoEndpoint,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const getUserInfoRequest = () => axios(config);

	return getUserInfoRequest();
};

export default getUserInfo;
