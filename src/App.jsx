import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Visual from "./components/Visual";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Project from "./components/Project";
import Footer from "./components/Footer";
import MenuDrawer from "./components/MenuDrawer";
import TopButton from "./components/TopButton";

function App() {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [isDrawerOff, setIsDrawerOff] = useState(true);
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
			<Header isHeaderFixed={isHeaderFixed} setIsDrawerOff={setIsDrawerOff} />
			<Visual />
			<Profile />
			<Skills />
			<Work />
			<Project />
			<Footer />
			<MenuDrawer isDrawerOff={isDrawerOff} setIsDrawerOff={setIsDrawerOff} />
			<TopButton />
		</div>
	);
}

export default App;
