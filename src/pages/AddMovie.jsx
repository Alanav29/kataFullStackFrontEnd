import { useForm } from "react-hook-form";

const AddMovie = () => {
	const { handleSubmit, register } = useForm();

	<div className="container">
		<h1 className="my-3">Sign Up</h1>
		<form className="d-block" onSubmit={handleSubmit()}>
			<label className="form-label" htmlFor="movieNameInput">
				Titulo
			</label>
			<input
				{...register("title")}
				className="form-control"
				type="text"
				placeholder="Coloca el titulo de la pelicula"
				id="addMovieNameInput"
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
	</div>;
};

export default AddMovie;
