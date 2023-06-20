import { createSlice } from "@reduxjs/toolkit";

export const userFeature = createSlice({
	name: "User",
	initialState: {
		value: undefined,
	},
	reducers: {
		setUser: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setUser } = userFeature.actions;

export const selectUser = (state) => state.setUser.value;

export default userFeature.reducer;
