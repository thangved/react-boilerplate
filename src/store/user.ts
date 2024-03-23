import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
	id: number;
};

export const userSlice = createSlice({
	name: "user",
	initialState: null as UserState | null,
	reducers: {
		setUser: (_state, action) => action.payload,
		clearUser: () => null,
	},
});

export const { setUser, clearUser } = userSlice.actions;
