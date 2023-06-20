// import BannerContent from "../components/BannerContent";
import ContentList from "../components/ContentList";
import getAllMovies from "../utils/getAllMovies";
import { useEffect, useState } from "react";

const Home = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchMoviesData = async () => {
			try {
				const result = await getAllMovies(
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGQ2ODQ4NDIxYzkwMTc4MjZhMmZmZCIsImlhdCI6MTY4NzI0MzgzNCwiZXhwIjoxNjg5ODM1ODM0fQ.rev4bxQapy1-LJrA-4NucfPhiQIvlxw0Fr7TIhUFoCs"
				);
				if (result.status === 200) {
					setMovies(result.data);
				}
			} catch (error) {
				console.log("Ocurrio un error al traer las peliculas ", error.message);
			}
		};
		fetchMoviesData();
	});

	return (
		<div className="">
			<ContentList movies={movies} />
		</div>
	);
};

export default Home;
