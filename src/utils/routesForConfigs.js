const baseGeneralURL = "https://stormy-scarf-bee.cyclic.app/";

// routes for the movies configuration

const moviesBaseEndpoint = `${baseGeneralURL}api/movies/`;

// routes fot the users configuration

const usersBaseEndpoint = `${baseGeneralURL}api/users/`;
const userInfoEndpoint = `${baseGeneralURL}api/users/me/`;
const userLogInEndpoint = `${baseGeneralURL}api/users/login/`;
const userUpdateLikedMoviesEndpoint = `${baseGeneralURL}api/users/likedMovies/`;

export {
	moviesBaseEndpoint,
	usersBaseEndpoint,
	userInfoEndpoint,
	userLogInEndpoint,
	userUpdateLikedMoviesEndpoint,
};
