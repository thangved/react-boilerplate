import tokenService from "@/services/token.service";
import axios from "axios";

/**
 * @description Create an Axios instance for making HTTP requests
 * @param resource Resource path for the service
 * @example createHttp("users") => http://localhost:3000/users
 * @returns Axios instance
 */
export default function createHttp(resource: string = "") {
	const http = axios.create({
		baseURL: `${import.meta.env.VITE_APP_API_URL}/${resource}`,
	});

	// Add a request interceptor
	http.interceptors.request.use((config) => {
		// Get the access token from the token service
		const accessToken = tokenService.accessToken;
		// If the access token exists, add it to the Authorization header
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	});

	// Add a response interceptor
	http.interceptors.response.use(
		// Return the data if the request is successful
		(res) => res.data,
		// Handle the error if the request is unsuccessful
		(error) => {
			throw error.response?.data || error;
		},
	);

	return http;
}
