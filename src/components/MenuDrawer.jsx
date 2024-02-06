import CloseIcon from "./CloseIcon";
import Nav from "./Nav";

const colorChipValue = ["green", "purple-blue", "yellow", "red"];
const handleClickColorSelect = (colorName) => {
	document.documentElement.style.setProperty(
		"--primary-color",
		`var(--${colorName})`
	);
};

const MenuDrawer = ({ isDrawerOff, setIsDrawerOff }) => {
	const handleClickDrawerClose = () => {
		setIsDrawerOff(true);
	};
	return (
		<div className={isDrawerOff ? "drawer_wrap off" : "drawer_wrap"}>
			<div className="drawer_dim" onClick={handleClickDrawerClose}></div>
			<div className="drawer">
				<div className="drawer_head">
					<button className="close_btn" onClick={handleClickDrawerClose}>
						<CloseIcon />
					</button>
				</div>
				<Nav />
				<div className="color_select">
					<h2 className="title">Color Select</h2>
					<ul className="color_chips">
						{colorChipValue.map((el, idx) => (
							<li
								key={idx}
								className="color_chip"
								data-color={el}
								onClick={() => handleClickColorSelect(el)}
							>
								{el}
							</li>
						))}
					</ul>
					<p className="description">
						원하는 색으로 현재 웹의 메인 컬러를 바꿀 수 있습니다.
					</p>
				</div>
			</div>
		</div>
	);
};
export default MenuDrawer;
