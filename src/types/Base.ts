/**
 * Base model, extended by other models
 */
export type Base = {
	/**
	 * Unique identifier for the base
	 */
	id: string;
	/**
	 * Name of the base
	 */
	createdAt: string; // ISO 8601 date string
	/**
	 * Name of the base
	 */
	updatedAt: string; // ISO 8601 date string
};

/**
 * Base input model, used to create a new base
 * @template T The type of the base
 * @extends Base
 */
export type BaseInput<T extends Base = Base> = Omit<T, "id" | "createdAt" | "updatedAt">;
