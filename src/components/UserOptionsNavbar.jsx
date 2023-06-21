import { useSelector, useDispatch } from "react-redux";
import { selectUser, setUser } from "../features/userFeature";
import { Link } from "react-router-dom";

const UserOptionsNavbar = () => {
	const dispatch = useDispatch();
	const signOff = () => {
		window.localStorage.clear();
		dispatch(setUser(false));
	};

	const userSigned = useSelector(selectUser);

	let optionSignOff = <button onClick={signOff}>Cerrar Sesion</button>;

	let optionSignIn = <Link to="/signIn">Iniciar Sesion</Link>;

	let optionSelected;

	if (userSigned.email) {
		optionSelected = optionSignOff;
	} else {
		optionSelected = optionSignIn;
	}

	return (
		<>
			<div>{optionSelected}</div>
		</>
	);
};

export default UserOptionsNavbar;
