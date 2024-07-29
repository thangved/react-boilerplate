import store from "@/store";
import { useDispatch } from "react-redux";

export type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default useAppDispatch;
