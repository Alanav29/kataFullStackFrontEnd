import axios from "axios";
import qs from "qs";

const DataInstallDb = () => {
	let initialData = undefined;
	let filteredData = [];

	const traerDatos = async () => {
		let config = {
			method: "get",
			maxBodyLength: Infinity,
			url: "https://api.themoviedb.org/3/movie/popular?api_key=c2525d0edb9b982c034d6f755a582ad4",
			headers: {},
		};

		await axios
			.request(config)
			.then((response) => {
				initialData = response.data;
			})
			.catch((error) => {
				console.log(error);
			});

		console.log(initialData.results);
		initialData.results.map((dataMovie) => {
			let movie = {
				title: dataMovie.original_title,
				overview: dataMovie.overview,
				release_date: dataMovie.release_date,
				poster: dataMovie.poster_path,
			};
			filteredData.push(movie);
		});

		return console.log(filteredData);
	};

	const installData = () => {
		filteredData.map(async (movie) => {
			let data = qs.stringify({
				title: movie.title,
				overview: movie.overview,
				release_date: movie.release_date,
				poster: movie.poster,
			});

			let config = {
				method: "post",
				maxBodyLength: Infinity,
				url: "http://localhost:8000/api/movies",
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGQ2ODQ4NDIxYzkwMTc4MjZhMmZmZCIsImlhdCI6MTY4NzA0ODI2NiwiZXhwIjoxNjg5NjQwMjY2fQ.ctH-_qD623PRQgK6DJwMcPTt518WXPSZutQ_EO7RoDQ",
					"Content-Type": "application/x-www-form-urlencoded",
				},
				data: data,
			};

			await axios
				.request(config)
				.then((response) => {
					console.log(JSON.stringify(response.data));
				})
				.catch((error) => {
					console.log(error);
				});
		});
	};

	return (
		<div>
			<button onClick={traerDatos}>Traer datos</button>
			<button onClick={installData}>Instalar datos</button>
		</div>
	);
};

export default DataInstallDb;
