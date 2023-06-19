import Navbar from "./components/Navbar";
import Index from "./routes/Index";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/appStyle.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<>
			<ReduxProvider store={store}>
				<Router>
					<Navbar />
					<Index />
				</Router>
			</ReduxProvider>
		</>
	);
}

export default App;
