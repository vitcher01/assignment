import React from 'react';

const MovieList = (props) => {
	const FavComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container justify-content-start m-3'>
					<img src={movie.Poster} alt='movie' style={{height:"300px",width:"222px"}}></img>
					<div>
					<span style={{fontFamily:"Roboto",alignContent:"center"}}>{movie.Title}</span>
					</div>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay align-items-center justify-content-center'
					>
						<FavComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
