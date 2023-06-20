import { configureStore } from "@reduxjs/toolkit";
import userFeature from "../features/userFeature";

export default configureStore({
	reducer: {
		userFeature: userFeature,
	},
});
