const MainTitle = ({ subTitle, title }) => {
	return (
		<div className="main_title">
			{subTitle ? <p className="sub_title">{subTitle}</p> : null}
			<h2 className="title">{title}</h2>
		</div>
	);
};
export default MainTitle;
