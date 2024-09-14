import { Observable } from "rxjs";
import { useEffect, useState } from "react";

export const useObservable = <T>(observable: Observable<T>): T | undefined => {
  const [value, setValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    const subscription = observable.subscribe((v: T) => {
      setValue(v);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return value;
};
