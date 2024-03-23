import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/default";

const router = createBrowserRouter([
	{
		path: "/",
		Component: DefaultLayout,
	},
]);

export default router;
