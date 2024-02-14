const handleClickTopButton = () => {
	window.scrollTo({ top: 0, left: 0 });
};

const TopButton = () => {
	return (
		<button className="top_button" onClick={handleClickTopButton}>
			클릭시 맨 위로 스크롤됩니다.
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
				<mask
					id="mask0_164_410"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="24"
					height="24"
				>
					<rect width="24" height="24" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_164_410)">
					<path d="M4 5V3H20V5H4ZM11 21V10.8L8.4 13.4L7 12L12 7L17 12L15.6 13.4L13 10.8V21H11Z" />
				</g>
			</svg>
		</button>
	);
};
export default TopButton;
