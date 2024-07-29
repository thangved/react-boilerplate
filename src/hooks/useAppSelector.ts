import store from "@/store";
import { useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
const useAppSelector = useSelector.withTypes<RootState>();
export default useAppSelector;
