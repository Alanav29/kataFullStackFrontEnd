import { useEffect, useState } from "react";
import getMovie from "../utils/getMovieConfig";
import delMovie from "../utils/delMovie";
import { selectUser } from "../features/userFeature";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieDetailForm from "../components/MovieDetailForm";
import putMovie from "../utils/putMovieConfig";
import "../styles/movieDetail.css";

const MovieDetail = () => {
	const { idMovie } = useParams();
	const [movie, setMovie] = useState({ title: "hola" });
	const userSigned = useSelector(selectUser);
	const navigate = useNavigate();
	let optionSelected;
	const [divForm, setDivForm] = useState(<></>);

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
	}, []);

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

	const showForm = () => {
		setDivForm(
			<>
				<MovieDetailForm movie={movie} />
			</>
		);
	};

	const updateMovie = () => {
		const fetchPutMovie = async () => {
			try {
				const result = await putMovie(movie._id, userSigned.token, {
					likes: 1,
				});

				if (result.status === 200) {
					location.reload();
				}
			} catch (error) {
				console.log(
					"Ocurrio un error al actualizar la pelicula ",
					error.message
				);
			}
		};
		fetchPutMovie();
	};

	const optionForUser = (
		<>
			<button onClick={updateMovie} className="btn btn-primary m-1">
				Me gusta
			</button>

			<button onClick={showForm} className="btn btn-primary m-1">
				Actualizar pelicula
			</button>

			<button onClick={deleteMovie} className="btn btn-primary m-1">
				Borrar pelicula
			</button>
		</>
	);
	const optionGeneral = (
		<Link to="/signIn" className="btn btn-primary">
			Iniciar Sesion
		</Link>
	);

	if (userSigned.email) {
		optionSelected = optionForUser;
	} else {
		optionSelected = optionGeneral;
	}

	return (
		<div className="container mt-4">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`${movie.poster}`} className="imgFluid" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{`${movie.title}`}</h5>
							<p className="card-text">{`${movie.overview}`}</p>
							<div className="mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									className="bi bi-heart-fill me-1"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
									/>
								</svg>
								{`${movie.likes}`}
							</div>
							<div>{optionSelected}</div>
						</div>
					</div>
				</div>
			</div>
			{divForm}
		</div>
	);
};

export default MovieDetail;
