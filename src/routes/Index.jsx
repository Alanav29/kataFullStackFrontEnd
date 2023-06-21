import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DataInstallDb from "../pages/DataInstallDb";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MovieDetail from "../pages/MovieDetail";
import AddMovie from "../pages/AddMovie";

const Index = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/signIn" element={<SignIn />} />
			<Route path="/signUp" element={<SignUp />} />
			<Route path="/addMovie" element={<AddMovie />} />
			<Route path="/movie/:idMovie" element={<MovieDetail />} />
			<Route path="/dataInstall" element={<DataInstallDb />} />
		</Routes>
	);
};

export default Index;
