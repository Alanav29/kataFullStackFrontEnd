import Navbar from "./components/Navbar";
import Index from "./routes/Index";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/appStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "./features/userFeature";
import { useEffect } from "react";
import getUserInfo from "./utils/getUserInfoConfig";
import { selectChangesCounter } from "./features/changesCounterFeature";

function App() {
	const dispatch = useDispatch();
	const userSigned = useSelector(selectUser);
	const changesCountered = useSelector(selectChangesCounter);

	const resetUser = async () => {
		try {
			const result = await getUserInfo(userSigned.token);

			if (result.status === 200) {
				dispatch(
					setUser({
						email: result.data.email,
						token: userSigned.token,
						name: result.data.name,
						likedMovies: result.data.likedMovies,
					})
				);
				console.log("se actualizo estado general del usuario");
			}
		} catch (error) {
			console.log(
				"Ocurrio un error al recuperar informacion del Usuario ",
				error.message
			);
		}
	};

	useEffect(() => {
		if (userSigned.token) {
			resetUser();
		}
	}, [changesCountered]);

	useEffect(() => {
		let user = JSON.parse(window.localStorage.getItem("user"));

		if (user) {
			dispatch(setUser(user));
		}
	}, []);

	return (
		<>
			<Router>
				<Navbar />
				<Index />
			</Router>
		</>
	);
}

export default App;
