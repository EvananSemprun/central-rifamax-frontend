import { RootState } from "@config/store/index";
import {
  deleteIntegrator,
  addIntegrator,
} from "@config/store/reducers/integrator.slice";
import { IntegratorState } from "@interfaces/index";
import { useDispatch, useSelector } from "react-redux";

function useIntegrator() {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.integrator);

  const integrator = selector;

  const setIntegrator = (integrator: IntegratorState) => {
    dispatch(addIntegrator(integrator))
  }

  const removeIntegrator = () => {
    dispatch(deleteIntegrator())
  }

  return { integrator, setIntegrator, removeIntegrator };
}

export default useIntegrator;
