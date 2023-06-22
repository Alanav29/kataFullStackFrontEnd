import { useForm } from "react-hook-form";
import signIn from "../utils/logInConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userFeature";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const trySignIn = async (data) => {
		try {
			const result = await signIn(data.email, data.password);

			if (result.status === 200) {
				dispatch(
					setUser({
						email: data.email,
						token: result.data.token,
						name: result.data.name,
					})
				);

				window.localStorage.setItem(
					"user",
					JSON.stringify({
						email: data.email,
						token: result.data.token,
						name: result.data.name,
					})
				);

				navigate("/home");
			}
		} catch (error) {
			console.log("Ocurrio un error al traer las peliculas ", error.message);
		}
	};

	return (
		<div className="container p-4">
			<h1 className="my-4">Iniciar Sesion</h1>
			<form onSubmit={handleSubmit(trySignIn)}>
				<div className="mb-3">
					<label htmlFor="signInEmailInput" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="signInEmailInput"
						{...register("email")}
						placeholder="name@example.com"
					/>
					<div id="emailHelp" className="form-text">
						No compartas tus datos con nadie
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="signInPasswordInput" className="form-label">
						Contraseña
					</label>
					<input
						type="password"
						className="form-control"
						id="signInPasswordInput"
						{...register("password")}
						placeholder="Password"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Iniciar sesion
				</button>
			</form>
		</div>
	);
};

export default SignIn;
