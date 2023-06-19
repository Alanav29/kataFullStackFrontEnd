import axios from "axios";
import qs from "qs";

let data = qs.stringify({});

let config = {
	method: "get",
	maxBodyLength: Infinity,
	url: "http://localhost:8000/api/movies",
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGQ2ODQ4NDIxYzkwMTc4MjZhMmZmZCIsImlhdCI6MTY4NzA0ODI2NiwiZXhwIjoxNjg5NjQwMjY2fQ.ctH-_qD623PRQgK6DJwMcPTt518WXPSZutQ_EO7RoDQ",
	},
	data: data,
};

axios
	.request(config)
	.then((response) => {
		console.log(JSON.stringify(response.data));
	})
	.catch((error) => {
		console.log(error);
	});
