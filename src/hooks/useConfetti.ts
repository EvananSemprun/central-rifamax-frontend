import { RootState } from "@config/store/index";
import { useDispatch, useSelector } from "react-redux";
import { setConfetti } from "@config/store/reducers/confetti.slice";

function useConfetti() {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.confetti);

  const isRunning = selector.isRunning;

  const toggle = () => {
    dispatch(setConfetti({ isRunning: !isRunning }));
  };

  const stop = () => {
    dispatch(setConfetti({ isRunning: false }));
  }

  const start = () => {
    dispatch(setConfetti({ isRunning: true }));
  }

  return { isRunning, toggle, stop, start };
}

export default useConfetti;