import { NavbarType } from "@interfaces/index";
import { RootState } from "@config/store/index";
import { useDispatch, useSelector } from "react-redux";
import { setNavbar } from "@config/store/reducers/navbar.slice";

function useNavbar() {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.navbar);

  const navbar = selector.navbar;

  const setNav = (navbar: NavbarType) => {
    dispatch(setNavbar({ navbar: navbar }));
  }

  return { navbar, setNav };
}

export default useNavbar;