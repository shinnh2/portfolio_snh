import MenuIcon from "./../assets/menu_icon.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="logo">SHINNH</h1>
				<nav className="navigation">
					<a href="">
						<span data-naviname="PROFILE">PROFILE</span>
					</a>
					<a href="">
						<span data-naviname="SKILL">SKILL</span>
					</a>
					<a href="">
						<span data-naviname="CAREER">CAREER</span>
					</a>
					<a href="">
						<span data-naviname="PROJECT">PROJECT</span>
					</a>
				</nav>
				<div className="menu">
					<img src={MenuIcon} alt="menu 버튼" />
				</div>
			</div>
		</header>
	);
};
export default Header;
