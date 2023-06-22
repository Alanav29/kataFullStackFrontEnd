import Navbar from "./components/Navbar";
import Index from "./routes/Index";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/appStyle.css";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userFeature";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
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
