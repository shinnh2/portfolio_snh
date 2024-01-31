import { useState } from "react";
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
	return (
		<div className="wrap">
			<Header />
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
