import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DataInstallDb from "../pages/DataInstallDb";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MovieDetail from "../pages/MovieDetail";
import AddMovie from "../pages/AddMovie";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userFeature";

const Index = () => {
	const userState = useSelector(selectUser);
	let signOptions = <></>;

	if (userState.token) {
		signOptions = <Route path="/addMovie" element={<AddMovie />} />;
	} else {
		signOptions = (
			<>
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/signUp" element={<SignUp />} />
			</>
		);
	}

	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			{signOptions}

			<Route path="/movie/:idMovie" element={<MovieDetail />} />
			<Route path="/dataInstall" element={<DataInstallDb />} />
		</Routes>
	);
};

export default Index;
