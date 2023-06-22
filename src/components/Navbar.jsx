import { Link } from "react-router-dom";
import "../styles/navbar.css";
import UserOptionsNavbar from "./UserOptionsNavbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userFeature";

const Navbar = () => {
	const userState = useSelector(selectUser);
	let addMovieDiv = <></>;
	let userMenuText = "Usuarios";

	if (userState.token) {
		addMovieDiv = (
			<div className="navbar-nav mx-3">
				<Link to="/addMovie" className="nav-item btn btn-info">
					Agregar pelicula
				</Link>
			</div>
		);
		userMenuText = userState.name;
	} else {
		userMenuText = "Usuarios";
	}

	return (
		<nav className="navbar navbar-expand bg-body-tertiary">
			<div className="container navContainer">
				<Link className="navbar-brand me-auto" to="/home">
					MovieTime
				</Link>
				{addMovieDiv}
				<div className="navbar-nav mb-lg-0">
					<li className="nav-item dropdown">
						<div
							className="d-flex align-items-center"
							role="button"
							data-bs-toggle="dropdown"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-person-circle me-1"
								viewBox="0 0 16 16"
							>
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
								<path
									fillRule="evenodd"
									d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
								/>
							</svg>
							{userMenuText}
						</div>
						<ul className="dropdown-menu">
							<li>
								<div className="dropdown-item" href="#">
									<UserOptionsNavbar />
								</div>
							</li>
						</ul>
					</li>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
