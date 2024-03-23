import tokenService from "@/services/token.service";
import axios from "axios";

export default function createHttp(resource: string = "") {
	const http = axios.create({
		baseURL: `${import.meta.env.VITE_APP_API_URL}/${resource}`,
	});

	http.interceptors.request.use((config) => {
		const accessToken = tokenService.accessToken;

		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

		return config;
	});

	http.interceptors.response.use(
		(res) => res.data,
		(error) => {
			throw error.response?.data || error;
		},
	);

	return http;
}
