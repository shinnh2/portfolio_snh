const Nav = () => {
	return (
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
	);
};
export default Nav;
