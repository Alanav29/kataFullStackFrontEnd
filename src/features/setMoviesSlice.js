import { createSlice } from "@reduxjs/toolkit";

export const setMoviesSlice = createSlice({
	name: "setMovies",
	initialState: {
		value: undefined,
	},
	reducers: {
		setMovieList: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setMovieList } = setMoviesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.setMovies.value;

export default setMoviesSlice.reducer;
