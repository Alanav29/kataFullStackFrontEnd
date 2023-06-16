import Navbar from "./components/Navbar";
import Index from "./routes/Index";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/appStyle.css";

function App() {
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
