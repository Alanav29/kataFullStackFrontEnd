/* eslint-disable react/prop-types */
import "../styles/contentCardForList.css";
import { Link } from "react-router-dom";

const ContentCardForList = ({ movie }) => {
	return (
		<div>
			<div className="card cardList">
				<img src={movie.poster} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{movie.title}</h5>
					<Link to={`/movie/${movie._id}`} className="btn btn-primary">
						Movie Detail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ContentCardForList;