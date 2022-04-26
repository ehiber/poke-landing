import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.jsx";

export const PokeCard = ({ title, colSpacing = "col-12" }) => {
	return (
		<div className={colSpacing}>
			<div className="card">
				<img
					src="https://i.pinimg.com/564x/9a/e6/cb/9ae6cbdc93ac5eb728e097c87496fa14.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<Button title={title} />
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
