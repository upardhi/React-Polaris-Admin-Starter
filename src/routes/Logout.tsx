import React, { useEffect } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import { doLogout } from "store/slices/authSlice";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLogout());
    const win: Window = window;
    win.location = "/auth/login";
  }, [dispatch]);

  return <></>;
};

export default Logout;
