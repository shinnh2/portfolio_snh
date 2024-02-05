import { useState, useEffect, useRef, forwardRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Visual from "./components/Visual";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	useEffect(() => {
		const onScrollHander = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			const targetPosition = 120 + window.innerHeight;
			if (scrollPosition > targetPosition) setIsHeaderFixed(true);
			else setIsHeaderFixed(false);
		};
		window.addEventListener("scroll", onScrollHander);
		return () => window.removeEventListener("scroll", onScrollHander);
	}, []);

	return (
		<div className="wrap">
			<Header isHeaderFixed={isHeaderFixed} />
			<Visual />
			<Profile />
			<Skills />
			<Work />
			<Project />
			<Footer />
		</div>
	);
}

export default App;
