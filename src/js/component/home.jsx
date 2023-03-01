import React from "react";

//include images into your bundle

import NavBar from "./NavBar.jsx";
import Jumbtron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar />
		<Jumbtron />
		<Card />
		<Card />
		<Card />
		<Card />
		</>
	);
};










export default Home;
