/* eslint-disable react/prop-types */
import ContentCardForList from "./ContentCardForList";

const ContentList = ({ movies }) => {
	return (
		<div className="d-flex flex-wrap justify-content-center m-4">
			{movies.map((movie) => (
				<ContentCardForList key={movie._id} movie={movie} />
			))}
		</div>
	);
};

export default ContentList;
