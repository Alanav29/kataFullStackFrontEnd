// import BannerContent from "../components/BannerContent";
import ContentList from "../components/ContentList";
import getAllMovies from "../utils/getAllMovies";
import { useEffect, useState } from "react";
const Home = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchMoviesData = async () => {
			try {
				const result = await getAllMovies();

				if (result.status === 200) {
					setMovies(result.data);
				}
			} catch (error) {
				console.log("Ocurrio un error al traer las peliculas ", error.message);
			}
		};
		fetchMoviesData();
	}, []);

	return (
		<div className="">
			<ContentList movies={movies} />
		</div>
	);
};

export default Home;
