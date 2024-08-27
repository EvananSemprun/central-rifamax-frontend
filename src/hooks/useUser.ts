import {
  setUser,
  clearUser,
  setToken,
  setPfp
} from "@config/store/reducers/user.slice";
import { RootState } from "@config/store/index";
import { IUser } from "@interfaces/models.interfaces";
import { useDispatch, useSelector } from "react-redux";

function useUser() {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.user);

  const user = selector.user;

  const clear = () => {
    dispatch(clearUser());
  };

  const update = (user: IUser, token?: string) => {
    dispatch(setUser(user));
    if (token) dispatch(setToken(token));
  };

  const updateNoToken = (user: IUser) => {
    dispatch(setUser(user));
  };

  const setAvatar = (avatar: string | null) => {
    dispatch(setPfp(avatar))
  };

  return { user, clear, update, updateNoToken, setAvatar };
}

export default useUser;
