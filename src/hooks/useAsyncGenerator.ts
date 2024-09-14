import { useEffect, useState } from "react";
import { IUseAsyncGenerator } from "@interfaces/index";

function useAsyncGenerator<T>(generatorFn: () => IterableIterator<Promise<T>>): IUseAsyncGenerator<T> {
  const [state, setState] = useState<IUseAsyncGenerator<T>>({ loading: true, refetch: () => {} });

  useEffect(() => {
    async function executeRequest(gen: IterableIterator<Promise<T>>) {
      try {
        const { value, done } = await gen.next();
        if (!done) {
          setState((prevState) => ({ ...prevState, loading: false, data: value as any }));
          executeRequest(gen);
        } else {
          setState((prevState) => ({ ...prevState, loading: false, data: value }));
        }
      } catch (error) {
        setState((prevState) => ({ ...prevState, loading: false, error }));
      }
    }
    function refetch() {
      setState((prevState) => ({ ...prevState, loading: true }));
      executeRequest(generatorFn());
    }
    executeRequest( generatorFn());
    setState((prevState) => ({ ...prevState, refetch }));
  }, []);
  return state;
}

export default useAsyncGenerator