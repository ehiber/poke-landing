import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.jsx";
import { Link } from "react-router-dom";

export const PokeCard = ({
	title,
	colSpacing = "col-12",
	image,
	idPokemon = 0,
}) => {
	return (
		<div className={colSpacing}>
			<div className="card">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<Link to={`/pokemon/${idPokemon}`}> Go to {title} </Link>
				</div>
			</div>
		</div>
	);
};

PokeCard.propTypes = {
	title: PropTypes.string,
	colSpacing: PropTypes.string,
};

Button.propTypes = {
	title: PropTypes.string,
};
