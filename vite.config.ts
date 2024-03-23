import { useHtmlMinifyPlugin } from "@tomjs/vite-plugin-html";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import prefetchPlugin from "vite-plugin-bundle-prefetch";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default () => {
	return defineConfig({
		plugins: [react(), prefetchPlugin(), useHtmlMinifyPlugin(), ViteImageOptimizer()],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	});
};
