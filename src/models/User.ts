import { Base } from "./Base";

/**
 * User model, extended from the base model
 */
export type User = Base & {
	/**
	 * Email of the user
	 */
	email: string;
};
