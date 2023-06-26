import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import postMovie from "../utils/postMovieConfig";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userFeature";
import { setChange } from "../features/changesCounterFeature";

const AddMovie = () => {
	const { handleSubmit, register } = useForm();
	const navigate = useNavigate();
	const userSigned = useSelector(selectUser);
	const dispatch = useDispatch();

	const tryPostMovie = (data) => {
		const fetchPostMovie = async (data) => {
			try {
				const result = await postMovie(data, userSigned.token);

				if (result.status === 201) {
					dispatch(setChange(1));
					console.log("se agrego la pelicula");
				}
			} catch (error) {
				console.log("Ocurrio un error al agregar la pelicula ", error.message);
			}
		};
		fetchPostMovie(data);
		navigate("/");
	};

	return (
		<div className="container p-4">
			<h1 className="my-3">Agregar pelicula</h1>
			<form className="d-block" onSubmit={handleSubmit(tryPostMovie)}>
				<label className="form-label" htmlFor="movieNameInput">
					Titulo
				</label>
				<input
					{...register("title")}
					className="form-control"
					type="text"
					placeholder="Coloca el titulo de la pelicula"
					id="movieNameInput"
					required
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
					required
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
					required
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
					required
				/>

				<button className="btn btn-success mt-3" type="submit">
					Agregar pelicula
				</button>
			</form>
		</div>
	);
};

export default AddMovie;
