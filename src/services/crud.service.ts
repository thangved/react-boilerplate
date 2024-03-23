import createHttp from "@/http/createHttp";
import { BaseService } from "./base.service";

export class CrudService<T = unknown> extends BaseService {
	constructor(resource: string) {
		super(createHttp(resource));
	}

	async create(data: Omit<T, "id">): Promise<T> {
		return await this.http.post("", data);
	}

	async getAll(): Promise<T[]> {
		return await this.http.get("");
	}

	async get(id: string): Promise<T> {
		return await this.http.get(id);
	}

	async update(id: string, data: Partial<T>): Promise<T> {
		return await this.http.put(id, data);
	}

	async delete(id: string): Promise<void> {
		await this.http.delete(id);
	}
}
