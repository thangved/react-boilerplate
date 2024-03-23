import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	return (
		<Suspense>
			<Outlet />
		</Suspense>
	);
}
