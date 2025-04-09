import {
  userAuthAction,
  userLogoutAction,
} from "@/lib/redux/actionCreators/authAction";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

export const useAuthMe = () => {
  const dispatch = useAppDispatch();

  const authMe = () => {
    dispatch(userAuthAction());
  };

  const logout = () => {
    dispatch(userLogoutAction());
  };

  return {
    authMe,
    logout,
  };
};
