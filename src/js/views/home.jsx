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
// const client_id = "636b3ae11dd9492194f0403ba2b24f4d"; // Your client id
// const client_secret = "491ff32703aa46449a0778cbd37ed16f"; // Your secret
// const redirect_uri =
// 	"https://3000-ehiber-pokelanding-v6yhbu9wnya.ws-us43.gitpod.io/"; // Your redirect uri
// const scopes = 'user-read-private user-read-email'

// var authOptions = {
// 	url: 'https://accounts.spotify.com/api/token',
// 	headers: {
// 	  'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
// 	},
// 	form: {
// 	  grant_type: 'client_credentials'
// 	},
// 	json: true
//   };
//create your first component
const Home = () => {
	return (
		<div className="container-fluid m-0 p-0">
			{/* <Navbar /> */}
			<Carousel />
			<CustomModal />
			<PokeCards />
			{/* <Footer /> */}
		</div>
	);
};

PokeCard.propTypes = {
	title: PropTypes.string,
	colSpacing: PropTypes.string,
};

export default Home;
