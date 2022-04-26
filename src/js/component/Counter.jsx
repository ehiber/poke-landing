import React, { useState, useEffect } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);
	const [secondCount, setSecondCount] = useState(0);

	useEffect(() => {
		console.log("SOY EL PRIMER USE EFFECT");

		return () => {
			if (count < -3) {
				setCount(0);
			}
		};
	});

	useEffect(() => {
		if (secondCount % 4 === 0) {
			setSecondCount(secondCount + 5);
		}
	}, [secondCount, setSecondCount]);

	return (
		<div className="row">
			<div className="col-4">
				<h1>{count}</h1>
				<button
					onClick={() => {
						setCount(count + 1);
					}}>
					{" "}
					+1{" "}
				</button>
				<button
					onClick={() => {
						setCount(count - 1);
					}}>
					{" "}
					-1{" "}
				</button>
			</div>

			<div className="col-4">
				<h1>{secondCount}</h1>
				<button
					onClick={() => {
						setSecondCount(secondCount + 1);
					}}>
					{" "}
					+1{" "}
				</button>
				<button
					onClick={() => {
						setSecondCount(secondCount - 1);
					}}>
					{" "}
					-1{" "}
				</button>
			</div>
		</div>
	);
};
