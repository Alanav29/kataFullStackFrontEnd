// import BannerContent from "../components/BannerContent";
import ContentList from "../components/ContentList";
import getAllMovies from "../utils/getAllMovies";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChangesCounter } from "../features/changesCounterFeature";

const Home = () => {
	const [movies, setMovies] = useState([]);
	const changesCounter = useSelector(selectChangesCounter);

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
	}, [changesCounter]);

	return (
		<div className="">
			<ContentList movies={movies} />
		</div>
	);
};

export default Home;
