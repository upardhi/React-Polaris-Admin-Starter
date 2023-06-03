import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resetSearch } from "store/slices/searchSlice";
import { useAppDispatch } from "./reduxHooks";


export default function ScrollToTop() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetSearch({}));
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}