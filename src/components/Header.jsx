import MenuIcon from "./../assets/settings_icon.svg";

const Header = ({ isHeaderFixed }) => {
	return (
		<header className={isHeaderFixed ? "header fixed" : "header"}>
			<div className="container">
				<h1 className="logo">SHINNH</h1>
				<nav className="navigation">
					<a href="#profile">
						<span data-naviname="PROFILE">PROFILE</span>
					</a>
					<a href="#skills">
						<span data-naviname="SKILLS">SKILLS</span>
					</a>
					<a href="#work">
						<span data-naviname="WORK">WORK</span>
					</a>
					<a href="#project">
						<span data-naviname="PROJECT">PROJECT</span>
					</a>
				</nav>
				<button className="menu">
					<img src={MenuIcon} alt="설정" />
				</button>
			</div>
		</header>
	);
};
export default Header;
