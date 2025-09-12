import FirstLoader from "@/components/FirstLoader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <Suspense fallback={<FirstLoader />}>
      <Outlet />
    </Suspense>
  );
}
