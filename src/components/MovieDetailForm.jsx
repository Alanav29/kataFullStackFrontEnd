/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import putMovie from "../utils/putMovieConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userFeature";
// import { useNavigate } from "react-router-dom";

const MovieDetailForm = ({ movie }) => {
	const { handleSubmit, register } = useForm();
	const userSigned = useSelector(selectUser);
	// const navigate = useNavigate();

	const updateMovie = (data) => {
		const fetchPutMovie = async () => {
			try {
				const result = await putMovie(movie._id, userSigned.token, data);

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

	return (
		<div className="container">
			<h1 className="my-3">Actualizar pelicula</h1>
			<form className="d-block" onSubmit={handleSubmit(updateMovie)}>
				<label className="form-label" htmlFor="movieNameInput">
					Titulo
				</label>
				<input
					{...register("title")}
					className="form-control"
					type="text"
					placeholder="Coloca el titulo de la pelicula"
					id="movieNameInput"
				/>

				<label className="form-label" htmlFor="movieOverviewInput">
					Sinopsis
				</label>
				<input
					{...register("overview")}
					className="form-control"
					type="text"
					placeholder="Coloca la sinopsis de la pelicula"
					id="movieOverviewInput"
				/>

				<label className="form-label" htmlFor="movieReleaseDateInput">
					Fecha de estreno
				</label>
				<input
					{...register("release_date")}
					className="form-control"
					type="text"
					placeholder="Coloca la fecha de estreno"
					id="movieReleaseDateInput"
				/>

				<label className="form-label" htmlFor="moviePosterInput">
					URL del poster de la pelicula
				</label>
				<input
					{...register("poster")}
					className="form-control"
					type="text"
					placeholder="Coloca la URL con el poster de la pelicula"
					id="moviePosterInput"
				/>

				<button className="btn btn-success mt-3" type="submit">
					Actualizar pelicula
				</button>
			</form>
		</div>
	);
};

export default MovieDetailForm;
