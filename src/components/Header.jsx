import MenuIcon from "./MenuIcon";
import Nav from "./Nav";

const Header = ({ isHeaderFixed, setIsDrawerOff }) => {
	const handleClickMenu = () => {
		setIsDrawerOff(false);
	};
	return (
		<header className={isHeaderFixed ? "header fixed" : "header"}>
			<div className="container">
				<h1 className="logo">
					<a href="./">SHINNH</a>
				</h1>
				<Nav />
				<button className="menu" onClick={handleClickMenu}>
					<MenuIcon />
				</button>
			</div>
		</header>
	);
};
export default Header;
