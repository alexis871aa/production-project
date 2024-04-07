import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={increment} className={classes.btn}>
				increment
			</button>
		</div>
	);
};
