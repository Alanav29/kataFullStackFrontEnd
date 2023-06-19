import { configureStore } from "@reduxjs/toolkit";
import setMoviesSlice from "../features/setMoviesSlice";

export default configureStore({
	reducer: {
		setMovies: setMoviesSlice,
	},
});
