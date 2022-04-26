import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import { Navbar } from "../component/Navbar.jsx";
import { Carousel } from "../component/Carousel.jsx";
import { Footer } from "../component/Footer.jsx";
import { PokeCard } from "../component/PokeCard.jsx";
import { Counter } from "../component/Counter.jsx";
import { PokeCards } from "../component/PokeCards.jsx";
import { CustomModal } from "../component/CustomModal.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid m-0 p-0">
			<Navbar />
			<Carousel />
			<CustomModal />
			<PokeCards />
			<Footer />
		</div>
	);
};

PokeCard.propTypes = {
	title: PropTypes.string,
	colSpacing: PropTypes.string,
};

export default Home;
