import React from 'react';
import './App.css';
import StateLabels from './StateLabels';

const App = () => {

	const clickedState = (e) => {
		console.log(e)
	}

	return (
		<StateLabels clickedState={clickedState}/>
	);
};

export default App;
