import http from "@/http/http";
import { BaseService } from "./base.service";

/**
 * Service class for CRUD operations
 * - POST: Create
 * - GET: Read (All and Single)
 * - PUT: Update
 * - DELETE: Delete
 * @author Kim Minh Thang
 */
export class CrudService<T = unknown> extends BaseService {
	/**
	 * Constructor for the CRUD service
	 * @param resource Resource path for the service
	 * @example new CrudService("users") => http://localhost:3000/users
	 */
	constructor(resource: string) {
		super(http(resource));
	}

	/**
	 * Create a new data in the resource
	 * @param data - Data to be created
	 * @returns Created data
	 */
	async create(data: Omit<T, "id">): Promise<T> {
		return await this.http.post("", data);
	}

	/**
	 * Get all data from the resource
	 * @returns All data
	 */
	async getAll(): Promise<T[]> {
		return await this.http.get("");
	}

	/**
	 * Get a single data from the resource
	 * @param id ID of the data to be fetched
	 * @returns Data with the given ID
	 */
	async get(id: string): Promise<T> {
		return await this.http.get(id);
	}

	/**
	 * Update a data in the resource
	 * @param id ID of the data to be updated
	 * @param data Data to be updated
	 * @returns Updated data
	 */
	async update(id: string, data: Partial<T>): Promise<T> {
		return await this.http.put(id, data);
	}

	/**
	 * Delete a data from the resource
	 * @param id ID of the data to be deleted
	 */
	async delete(id: string): Promise<void> {
		await this.http.delete(id);
	}
}
