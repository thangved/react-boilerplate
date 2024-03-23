import { AxiosInstance } from "axios";

export class BaseService {
	constructor(protected readonly http: AxiosInstance) {}
}
