import { Base, BaseInput, BaseUpdate } from "@/types/base";
import { BaseService } from "./base.service";

/**
 * Service class for CRUD operations
 * - POST: Create
 * - GET: Read (All and Single)
 * - PUT: Update
 * - DELETE: Delete
 * @author Kim Minh Thang
 */
export class CrudService<T extends Base = Base> extends BaseService {
  /**
   * Create a new data in the resource
   * @param data - Data to be created
   * @returns Created data
   */
  create(data: BaseInput<T>): Promise<T> {
    return this.client.post("", data);
  }

  /**
   * Get all data from the resource
   * @returns All data
   */
  getAll(): Promise<T[]> {
    return this.client.get("");
  }

  /**
   * Get a single data from the resource
   * @param id ID of the data to be fetched
   * @returns Data with the given ID
   */
  get(id: string): Promise<T> {
    return this.client.get(id);
  }

  /**
   * Update a data in the resource
   * @param id ID of the data to be updated
   * @param data Data to be updated
   * @returns Updated data
   */
  update(id: string, data: BaseUpdate<T>): Promise<T> {
    return this.client.put(id, data);
  }

  /**
   * Delete a data from the resource
   * @param id ID of the data to be deleted
   */
  delete(id: string): Promise<void> {
    return this.client.delete(id);
  }
}
