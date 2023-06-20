import { createSlice } from "@reduxjs/toolkit";

export const setMoviesSlice = createSlice({
	name: "setMovies",
	initialState: {
		value: undefined,
	},
	reducers: {
		setMoviesList: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setMoviesList } = setMoviesSlice.actions;

export const selectMovies = (state) => state.setMovies.value;

export default setMoviesSlice.reducer;
