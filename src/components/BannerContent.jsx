import { useRef } from "react";
import ContentForBanner from "./ContentForBanner";
import serie1 from "../assets/serie1.jpg";
import serie2 from "../assets/serie2.jpg";

const BannerContent = () => {
	const contentGroup = [
		{
			id: 1,
			img: serie1,
		},
		{
			id: 2,
			img: serie2,
		},
		{
			id: 3,
			img: serie1,
		},
		{
			id: 4,
			img: serie2,
		},
	];

	const bannerMovilAreaRef = useRef();

	const scrollRight = () => {
		bannerMovilAreaRef.current.scrollLeft += 3000;
	};

	const scrollLeft = () => {
		bannerMovilAreaRef.current.scrollLeft -= 3000;
	};

	return (
		<div className="d-flex align-items-center banner">
			<div className="">
				<button onClick={scrollLeft} className="p-1 btnBannerLeft">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-arrow-left-short"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
						/>
					</svg>
				</button>
			</div>
			<div className="d-flex bannerImgsArea" ref={bannerMovilAreaRef}>
				{contentGroup.map((content) => (
					<ContentForBanner key={content.id} img={content.img} />
				))}
			</div>
			<div>
				<button onClick={scrollRight} className="btnBannerRight">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-arrow-right-short"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default BannerContent;
