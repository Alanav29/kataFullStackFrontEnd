import "../styles/contentCardForList.css";

const ContentCardForList = ({ movie }) => {
	return (
		<div>
			<div className="card cardList">
				<img src={movie.poster} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{movie.title}</h5>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContentCardForList;
