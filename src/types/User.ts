import { Base, BaseInput } from "./Base";

/**
 * User model, extended from the base model
 */
export type User = Base & {
	/**
	 * Email of the user
	 */
	email: string;
};

/**
 * User input model, used to create a new user
 */
export type UserInput = BaseInput<User>;
