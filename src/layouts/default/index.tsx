import FirstLoader from "@/components/FirstLoader";
import { useAppSelector } from "@/hooks";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  const user = useAppSelector((state) => state.user);

  if (!user) return <FirstLoader />;

  return (
    <Suspense fallback={<FirstLoader />}>
      <Outlet />
    </Suspense>
  );
}
