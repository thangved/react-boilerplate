import DefaultLayout from "@/layouts/default";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		Component: DefaultLayout,
	},
]);

export default router;
