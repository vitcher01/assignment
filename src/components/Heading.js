import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col col-md-1'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;
