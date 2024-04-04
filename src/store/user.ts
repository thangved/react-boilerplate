import { User } from "@/models/User";
import { createSlice } from "@reduxjs/toolkit";

/**
 * @description User slice, used to store the user in the Redux store
 */
export const userSlice = createSlice({
	name: "user",
	initialState: null as User | null,
	reducers: {
		setUser: (_state, action) => action.payload,
		clearUser: () => null,
	},
});

export const { setUser, clearUser } = userSlice.actions;
