import { Base } from "./Base";

/**
 * @description User model, extended from the base model
 */
export type User = Base & {
	/**
	 * @description Email of the user
	 */
	email: string;
};
