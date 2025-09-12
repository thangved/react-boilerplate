import axios, { AxiosInstance } from "axios";
import { TokenService } from "./token.service";

/**
 * Base service class to be extended by other services
 * @author Kim Minh Thang
 */
export class BaseService {
  protected client: AxiosInstance;
  private readonly tokenService: TokenService;
  /**
   * Constructor for the base service
   */
  constructor(resource: string) {
    this.tokenService = new TokenService();
    this.client = axios.create({
      baseURL: `/api/${resource}`,
    });

    // Add a request interceptor
    this.client.interceptors.request.use((config) => {
      // Get the access token from the token service
      const accessToken = this.tokenService.accessToken;
      // If the access token exists, add it to the Authorization header
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    });

    // Add a response interceptor
    this.client.interceptors.response.use(
      // Return the data if the request is successful
      (res) => res.data,
      // Handle the error if the request is unsuccessful
      (error) => {
        throw error.response?.data || error;
      },
    );
  }
}
