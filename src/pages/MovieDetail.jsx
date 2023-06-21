import { useEffect, useState } from "react";
import getMovie from "../utils/getMovieConfig";
import delMovie from "../utils/delMovie";
import { selectUser } from "../features/userFeature";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
	const { idMovie } = useParams();
	const [movie, setMovie] = useState({ title: "hola" });
	const userSigned = useSelector(selectUser);
	const navigate = useNavigate();

	const deleteMovie = () => {
		const fetchDeleteMovie = async () => {
			try {
				const result = await delMovie(userSigned.token, idMovie);

				if (result.status === 200) {
					console.log("se borro la pelicula");
				}
			} catch (error) {
				console.log("Ocurrio un error al borrar la pelicula ", error.message);
			}
		};
		fetchDeleteMovie();
		navigate("/home");
	};

	let optionSelected;
	const optionForUser = (
		<button onClick={deleteMovie} className="btn btn-primary">
			Borrar pelicula
		</button>
	);
	const optionGeneral = (
		<Link to="/signIn" className="btn btn-primary">
			Iniciar Sesion
		</Link>
	);

	useEffect(() => {
		const fetchMovieData = async () => {
			try {
				const result = await getMovie(idMovie);

				if (result.status === 200) {
					setMovie(result.data);
				}
			} catch (error) {
				console.log("Ocurrio un error al traer las peliculas ", error.message);
			}
		};
		fetchMovieData();
	});

	if (userSigned.email) {
		optionSelected = optionForUser;
	} else {
		optionSelected = optionGeneral;
	}

	return (
		<>
			<div className="card mb-3" style={{ maxWidth: 540 }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={`${movie.poster}`}
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{`${movie.title}`}</h5>
							<p className="card-text">{`${movie.overview}`}</p>
							<div>{optionSelected}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
