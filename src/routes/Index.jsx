import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DataInstallDb from "../pages/DataInstallDb";
import AllMovies from "../pages/AllMovies";

const Index = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/peliculas" element={<AllMovies />} />
			<Route path="/dataInstall" element={<DataInstallDb />} />
		</Routes>
	);
};

export default Index;
