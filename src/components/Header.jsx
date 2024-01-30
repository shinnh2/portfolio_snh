import MenuIcon from "./../assets/menu_icon.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="logo">SHINNH</h1>
				<nav className="navigation">
					<a href="">PROFILE</a>
					<a href="">SKILL</a>
					<a href="">CAREER</a>
					<a href="">PROJECT</a>
				</nav>
				<div className="menu">
					<img src={MenuIcon} alt="menu 버튼" />
				</div>
			</div>
		</header>
	);
};
export default Header;
