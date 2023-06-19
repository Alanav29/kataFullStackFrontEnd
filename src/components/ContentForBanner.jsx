import "../styles/ContentForBanner.css";

// eslint-disable-next-line react/prop-types
const ContentForBanner = ({ img }) => {
	return (
		<div className="content">
			<img src={img} />
		</div>
	);
};

export default ContentForBanner;
